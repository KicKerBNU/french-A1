<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CoverCard from '@/components/CoverCard.vue'
import { extraSections, units } from '@/content/course'
import { coverForUnit, extraCovers } from '@/content/visuals'
import { useProgressStore } from '@/stores/progress'
import type { Locale } from '@/types/course'

const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
</script>

<template>
  <main class="page">
    <p class="kicker">A1</p>
    <h1 class="title-xl">{{ t('course.title') }}</h1>
    <p class="lead">{{ t('course.subtitle') }}</p>

    <div class="grid gap-4 sm:grid-cols-2">
      <CoverCard
        v-for="unit in units"
        :key="unit.id"
        :src="coverForUnit(unit.id).src"
        :alt="coverForUnit(unit.id).alt"
        :to="unit.available ? `/units/${unit.slug}` : undefined"
        :kicker="`Unité ${unit.id}`"
        :title="lang === 'fr-FR' ? unit.title : unit.titleEn"
        :subtitle="progress.labelFor(lang, unit.blurb)"
        :accent="unit.accent"
      >
        <ul class="m-0 flex-1 list-disc pl-5 text-sm text-ink-soft">
          <li v-for="item in unit.interactions.slice(0, 2)" :key="item.fr">{{ progress.labelFor(lang, item) }}</li>
        </ul>
        <span v-if="unit.available" class="chip">{{ t('course.open') }}</span>
        <span v-else class="chip">{{ t('course.locked') }}</span>
      </CoverCard>
    </div>

    <section class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <CoverCard
        v-for="item in extraSections"
        :key="item.id"
        :src="(extraCovers[item.id] ?? extraCovers.resources).src"
        :alt="(extraCovers[item.id] ?? extraCovers.resources).alt"
        :to="item.available && item.to ? item.to : undefined"
        :kicker="item.available ? t('home.unitOpen') : t('course.locked')"
        :title="lang === 'fr-FR' ? item.title : item.titleEn"
      />
    </section>
  </main>
</template>
