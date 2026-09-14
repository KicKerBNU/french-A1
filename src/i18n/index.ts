import { createI18n } from 'vue-i18n'
import enUS from '@/i18n/locales/en-US'
import frFR from '@/i18n/locales/fr-FR'
import type { Locale } from '@/types/course'

const STORAGE_KEY = 'premiers-pas-locale'

function readLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'fr-FR' || stored === 'en-US') return stored
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr-FR' : 'en-US'
}

export const i18n = createI18n({
  legacy: false,
  locale: readLocale(),
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'fr-FR': frFR,
  },
})

export function persistLocale(locale: Locale) {
  localStorage.setItem(STORAGE_KEY, locale)
}
