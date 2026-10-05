export type VoiceGender = 'female' | 'male'

const maleSpeakers = new Set([
  'noah',
  'tom',
  'marc',
  'samir',
  'hugo',
  'loic',
  'koffi',
  'marco',
  'leo',
  'yanis',
  'yann',
  'client',
  'agent',
  'vendeur',
  'serveur',
  'visiteur',
  'employe',
  'libraire',
  'paul',
  'karim',
])

const femaleSpeakers = new Set([
  'ines',
  'lina',
  'nadia',
  'lea',
  'mila',
  'maya',
  'amira',
  'lucy',
  'awa',
  'claire',
  'nora',
  'sara',
  'helene',
  'costa',
  'nina',
  'clara',
  'odette',
  'receptionniste',
  'vendeuse',
  'serveuse',
  'cliente',
  'accueil',
])

export type SpeakOptions = {
  speaker?: string
  voice?: VoiceGender
}

let playToken = 0
let currentAudio: HTMLAudioElement | null = null

function speakerKey(speaker?: string) {
  return (speaker ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/[\s/]+/)[0]
}

export function genderFor(speaker?: string): VoiceGender {
  const key = speakerKey(speaker)
  if (!key) return 'female'
  if (maleSpeakers.has(key)) return 'male'
  if (femaleSpeakers.has(key)) return 'female'
  return 'female'
}

export function dialogueVoices(speakers: string[]): Record<string, VoiceGender> {
  const unique: string[] = []
  for (const speaker of speakers) {
    if (!unique.includes(speaker)) unique.push(speaker)
  }

  const assigned: Record<string, VoiceGender> = {}
  let previous: VoiceGender | undefined
  for (const speaker of unique) {
    let voice = genderFor(speaker)
    if (previous && unique.length > 1 && voice === previous) {
      voice = voice === 'female' ? 'male' : 'female'
    }
    assigned[speaker] = voice
    previous = voice
  }
  return assigned
}

function scoreVoice(voice: SpeechSynthesisVoice, gender: VoiceGender) {
  const lang = voice.lang.toLowerCase()
  const name = voice.name.toLowerCase()
  let score = 0
  if (lang.startsWith('fr-fr')) score += 40
  else if (lang.startsWith('fr')) score += 20
  else return -1
  if (/(premium|enhanced|neural|natural|online)/.test(name)) score += 50
  if (name.includes('google')) score += 28
  if (gender === 'male' && /(henri|thomas|paul|claude|jean)/.test(name)) score += 30
  if (gender === 'female' && /(denise|amelie|amélie|audrey|vivienne|marie)/.test(name)) score += 30
  if (name.includes('compact') || name.includes('eloquence')) score -= 45
  return score
}

function bestFrenchVoice(voices: SpeechSynthesisVoice[], gender: VoiceGender) {
  return [...voices].sort((a, b) => scoreVoice(b, gender) - scoreVoice(a, gender))[0]
}

function speakWithBrowser(text: string, gender: VoiceGender) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'fr-FR'
  utterance.rate = 0.88
  utterance.pitch = gender === 'male' ? 0.82 : 1.08
  const voice = bestFrenchVoice(window.speechSynthesis.getVoices(), gender)
  if (voice && scoreVoice(voice, gender) > 0) utterance.voice = voice
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
  const voice = options.voice ?? genderFor(options.speaker)
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
      if (token === playToken) speakWithBrowser(text, voice)
    }
    await audio.play()
  } catch {
    if (token !== playToken) return
    speakWithBrowser(text, voice)
  }
}
