let voicesReady = false

function ensureVoices() {
  if (voicesReady) return
  window.speechSynthesis.getVoices()
  voicesReady = true
}

export function speakFrench(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  ensureVoices()
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'fr-FR'
  utterance.rate = 0.92
  const voices = window.speechSynthesis.getVoices()
  const french =
    voices.find((voice) => voice.lang.toLowerCase().startsWith('fr-fr')) ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith('fr'))
  if (french) utterance.voice = french
  window.speechSynthesis.speak(utterance)
}

export function stopSpeech() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
}
