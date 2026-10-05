const maleSpeakers = new Set([
  'noah',
  'tom',
  'serveur',
  'agent',
  'vendeur',
  'visiteur',
  'employe',
  'employé',
])

export type SpeakOptions = {
  speaker?: string
}

let playToken = 0
let currentAudio: HTMLAudioElement | null = null

function genderFor(speaker?: string): 'female' | 'male' {
  if (!speaker) return 'female'
  const key = speaker
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/[\s/]+/)[0]
  return maleSpeakers.has(key) ? 'male' : 'female'
}

function scoreVoice(voice: SpeechSynthesisVoice) {
  const lang = voice.lang.toLowerCase()
  const name = voice.name.toLowerCase()
  let score = 0
  if (lang.startsWith('fr-fr')) score += 40
  else if (lang.startsWith('fr')) score += 20
  else return -1
  if (/(premium|enhanced|neural|natural|online)/.test(name)) score += 50
  if (name.includes('google')) score += 28
  if (/(denise|henri|amelie|amélie|audrey|vivienne)/.test(name)) score += 18
  if (name.includes('compact') || name.includes('eloquence')) score -= 45
  return score
}

function bestFrenchVoice(voices: SpeechSynthesisVoice[]) {
  return [...voices].sort((a, b) => scoreVoice(b) - scoreVoice(a))[0]
}

function speakWithBrowser(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'fr-FR'
  utterance.rate = 0.88
  utterance.pitch = 1
  const voice = bestFrenchVoice(window.speechSynthesis.getVoices())
  if (voice && scoreVoice(voice) > 0) utterance.voice = voice
  window.speechSynthesis.speak(utterance)
}

function warmVoices() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.getVoices()
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    window.speechSynthesis.getVoices()
  })
}

if (typeof window !== 'undefined') warmVoices()

export function stopSpeech() {
  playToken += 1
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.src = ''
    currentAudio = null
  }
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel()
  }
}

export async function speakFrench(text: string, options: SpeakOptions = {}) {
  if (!text.trim()) return
  stopSpeech()
  const token = playToken
  const voice = genderFor(options.speaker)
  const url = `/api/tts?text=${encodeURIComponent(text)}&voice=${voice}`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('tts')
    const blob = await response.blob()
    if (token !== playToken) return
    const objectUrl = URL.createObjectURL(blob)
    const audio = new Audio(objectUrl)
    currentAudio = audio
    audio.onended = () => {
      URL.revokeObjectURL(objectUrl)
      if (currentAudio === audio) currentAudio = null
    }
    audio.onerror = () => {
      URL.revokeObjectURL(objectUrl)
      if (token === playToken) speakWithBrowser(text)
    }
    await audio.play()
  } catch {
    if (token !== playToken) return
    speakWithBrowser(text)
  }
}
