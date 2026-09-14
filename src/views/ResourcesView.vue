<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { resourceBanks } from '@/content/course'
import { useProgressStore } from '@/stores/progress'
import type { Locale } from '@/types/course'

const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const banks = computed(() => resourceBanks.filter((bank) => bank.available))
</script>

<template>
  <main class="page">
    <RouterLink class="btn btn-ghost" to="/course">← {{ t('app.course') }}</RouterLink>
    <p class="kicker">{{ t('resources.kicker') }}</p>
    <h1 class="title-xl">{{ t('resources.title') }}</h1>
    <p class="lead">{{ t('resources.lead') }}</p>

    <section class="mt-7 grid gap-3">
      <RouterLink
        v-for="bank in banks"
        :key="bank.id"
        class="card grid items-center gap-4 p-5 sm:grid-cols-[auto_1fr_auto]"
        :to="`/units/${bank.slug}`"
      >
        <span
          class="grid size-12 place-items-center rounded-xl font-serif text-lg font-extrabold text-cream"
          :style="{ background: bank.accent }"
        >
          {{ lang === 'fr-FR' ? bank.title.slice(0, 1) : bank.titleEn.slice(0, 1) }}
        </span>
        <div>
          <h2 class="mb-1 text-[1.45rem]">{{ lang === 'fr-FR' ? bank.title : bank.titleEn }}</h2>
          <p class="muted m-0">{{ progress.labelFor(lang, bank.blurb) }}</p>
        </div>
        <span class="chip w-fit">{{ progress.unitProgress(bank.id) }}%</span>
      </RouterLink>
    </section>

    <p class="muted mt-6">{{ t('resources.note') }}</p>
  </main>
</template>
