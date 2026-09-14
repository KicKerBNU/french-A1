<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { persistLocale } from '@/i18n'
import { useProgressStore } from '@/stores/progress'
import type { Locale } from '@/types/course'

const { t, locale } = useI18n()
const route = useRoute()
const progress = useProgressStore()
const openProgress = computed(() =>
  Math.round(
    (progress.unitProgress(0) +
      progress.unitProgress(1) +
      progress.unitProgress(2) +
      progress.unitProgress(3) +
      progress.unitProgress(4) +
      progress.unitProgress(5) +
      progress.unitProgress(6) +
      progress.unitProgress(7) +
      progress.unitProgress(8)) /
      9,
  ),
)

function setLocale(next: Locale) {
  locale.value = next
  persistLocale(next)
  document.documentElement.lang = next === 'fr-FR' ? 'fr' : 'en'
}

function pill(name: string) {
  if (name === 'resources') {
    const slug = route.params.slug
    const inBank = typeof slug === 'string' && ['grammaire', 'vocabulaire', 'communication'].includes(slug)
    return route.name === 'resources' || inBank ? 'nav-pill nav-pill-on' : 'nav-pill'
  }
  return route.name === name ? 'nav-pill nav-pill-on' : 'nav-pill'
}

setLocale(locale.value as Locale)
</script>

<template>
  <div class="min-h-dvh">
    <header
      class="sticky top-0 z-20 mx-auto flex w-[min(70rem,calc(100%-2rem))] flex-wrap items-center gap-4 bg-paper/85 py-3.5 backdrop-blur-md"
    >
      <RouterLink class="flex items-center gap-2.5" to="/">
        <span class="grid size-10 place-items-center rounded-xl bg-pine font-serif text-xl text-cream">à</span>
        <span>
          <strong class="block text-[0.95rem]">{{ t('app.name') }}</strong>
          <small class="block text-[0.72rem] font-semibold text-ink-soft">{{ t('app.level') }}</small>
        </span>
      </RouterLink>

      <nav class="order-3 flex w-full gap-1.5 md:order-none md:ml-auto md:w-auto">
        <RouterLink to="/" :class="pill('home')">{{ t('app.home') }}</RouterLink>
        <RouterLink to="/course" :class="pill('course')">{{ t('app.course') }}</RouterLink>
        <RouterLink to="/resources" :class="pill('resources')">{{ t('course.resources') }}</RouterLink>
        <RouterLink to="/how-it-works" :class="pill('how')">{{ t('app.how') }}</RouterLink>
      </nav>

      <div class="ml-auto flex items-center gap-2.5 md:ml-0">
        <span class="chip">{{ openProgress }}%</span>
        <div class="flex rounded-full bg-cream/70 p-0.5 shadow-[inset_0_0_0_1px_var(--color-line)]" role="group" :aria-label="t('app.language')">
          <button type="button" :class="locale === 'en-US' ? 'nav-pill nav-pill-on' : 'nav-pill'" @click="setLocale('en-US')">
            EN
          </button>
          <button type="button" :class="locale === 'fr-FR' ? 'nav-pill nav-pill-on' : 'nav-pill'" @click="setLocale('fr-FR')">
            FR
          </button>
        </div>
      </div>
    </header>
    <RouterView />
  </div>
</template>
