<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import CoverCard from '@/components/CoverCard.vue'
import { resourceBanks } from '@/content/course'
import { coverForUnit } from '@/content/visuals'
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

    <section class="mt-7 grid gap-4 sm:grid-cols-3">
      <CoverCard
        v-for="bank in banks"
        :key="bank.id"
        :src="coverForUnit(bank.id).src"
        :alt="coverForUnit(bank.id).alt"
        :to="`/units/${bank.slug}`"
        :kicker="`${progress.unitProgress(bank.id)}%`"
        :title="lang === 'fr-FR' ? bank.title : bank.titleEn"
        :subtitle="progress.labelFor(lang, bank.blurb)"
        :accent="bank.accent"
        tall
      />
    </section>

    <p class="muted mt-6">{{ t('resources.note') }}</p>
  </main>
</template>
