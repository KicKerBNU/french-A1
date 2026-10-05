import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { Readable } from 'node:stream'
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts'
import type { Connect, Plugin } from 'vite'

const voices = {
  female: 'fr-FR-DeniseNeural',
  male: 'fr-FR-HenriNeural',
} as const

const cacheDir = path.resolve('.tts-cache')
const maxTextLength = 500

function keyFor(text: string, voice: string) {
  return createHash('sha1').update(`${voice}\n${text}`).digest('hex')
}

function collect(stream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    let settled = false
    const finish = () => {
      if (settled) return
      settled = true
      resolve(Buffer.concat(chunks))
    }
    const fail = (error: Error) => {
      if (settled) return
      settled = true
      reject(error)
    }
    stream.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)))
    stream.on('end', finish)
    stream.on('close', finish)
    stream.on('error', fail)
    setTimeout(() => fail(new Error('TTS timed out')), 20000)
  })
}

async function synthesise(text: string, voice: string) {
  const tts = new MsEdgeTTS()
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3)
  const { audioStream } = tts.toStream(text, { rate: 0.88 })
  try {
    const audio = await collect(audioStream)
    if (audio.length < 64) throw new Error('Empty TTS audio')
    return audio
  } finally {
    tts.close()
  }
}

let queue = Promise.resolve()

function enqueue<T>(work: () => Promise<T>) {
  const run = queue.then(work, work)
  queue = run.then(
    () => undefined,
    () => undefined,
  )
  return run
}

export function frenchTtsPlugin(): Plugin {
  const handler: Connect.NextHandleFunction = async (req, res, next) => {
    const url = req.url ?? ''
    if (!url.startsWith('/api/tts')) {
      next()
      return
    }

    const parsed = new URL(url, 'http://localhost')
    const text = parsed.searchParams.get('text')?.trim() ?? ''
    const voiceKey = parsed.searchParams.get('voice') === 'male' ? 'male' : 'female'

    if (!text || text.length > maxTextLength) {
      res.statusCode = 400
      res.end('Invalid text')
      return
    }

    const voice = voices[voiceKey]
    const file = path.join(cacheDir, `${keyFor(text, voice)}.mp3`)

    try {
      await mkdir(cacheDir, { recursive: true })
      let audio: Buffer
      try {
        audio = await readFile(file)
      } catch {
        audio = await enqueue(() => synthesise(text, voice))
        await writeFile(file, audio)
      }
      res.statusCode = 200
      res.setHeader('Content-Type', 'audio/mpeg')
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      res.end(audio)
    } catch (error) {
      console.error('[tts]', error)
      res.statusCode = 502
      res.end('TTS unavailable')
    }
  }

  return {
    name: 'french-tts',
    configureServer(server) {
      server.middlewares.use(handler)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler)
    },
  }
}
