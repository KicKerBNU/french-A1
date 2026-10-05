import { reactive } from 'vue'

export const wordTooltip = reactive({
  visible: false,
  hint: '',
  source: 'en' as 'fr' | 'en',
  x: 0,
  y: 0,
})

let hideTimer = 0

export function showWordTooltip(target: HTMLElement, hint: string, source: 'fr' | 'en') {
  window.clearTimeout(hideTimer)
  const rect = target.getBoundingClientRect()
  const pad = 88
  wordTooltip.hint = hint
  wordTooltip.source = source === 'fr' ? 'en' : 'fr'
  wordTooltip.x = Math.min(Math.max(rect.left + rect.width / 2, pad), window.innerWidth - pad)
  wordTooltip.y = Math.max(rect.top - 6, 12)
  wordTooltip.visible = true
}

export function hideWordTooltip() {
  window.clearTimeout(hideTimer)
  hideTimer = window.setTimeout(() => {
    wordTooltip.visible = false
  }, 80)
}

export function hideWordTooltipNow() {
  window.clearTimeout(hideTimer)
  wordTooltip.visible = false
}
