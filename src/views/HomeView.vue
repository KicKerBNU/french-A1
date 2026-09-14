<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import CoverCard from '@/components/CoverCard.vue'
import ProgressRing from '@/components/ProgressRing.vue'
import { getUnitById, units } from '@/content/course'
import { coverForUnit, homeHero } from '@/content/visuals'
import { getLesson } from '@/content/units'
import { useProgressStore } from '@/stores/progress'
import type { Locale } from '@/types/course'

const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const unit8 = computed(() => units[8])
const percent = computed(() =>
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
const lastLesson = computed(() => {
  const unitId = progress.state.lastUnitId
  const lessonId = progress.state.lastLessonId
  if (unitId == null || lessonId == null) return null
  const lesson = getLesson(unitId, lessonId)
  const unit = getUnitById(unitId)
  if (!lesson || !unit) return null
  return { lesson, unit }
})
</script>

<template>
  <main class="page">
    <section class="photo-card relative mb-8 overflow-hidden">
      <img :src="homeHero.src" :alt="homeHero.alt" class="h-[22rem] w-full object-cover sm:h-[26rem]" />
      <div class="absolute inset-0 bg-linear-to-r from-ink/80 via-ink/45 to-ink/10" />
      <div class="absolute inset-0 flex flex-col justify-end gap-4 p-6 sm:p-10">
        <p class="kicker mb-0 text-gold">{{ t('home.kicker') }}</p>
        <h1 class="m-0 max-w-[16ch] font-serif text-[clamp(2.2rem,6vw,4.2rem)] font-semibold tracking-tight text-cream">
          {{ t('home.title') }}
        </h1>
        <p class="m-0 max-w-[52ch] text-[1.05rem] text-cream/90">{{ t('home.lead') }}</p>
        <div class="flex flex-wrap gap-2.5">
          <RouterLink class="btn btn-primary" :to="`/units/${unit8.slug}`">{{ t('home.cta') }}</RouterLink>
          <RouterLink class="btn bg-cream/90 text-ink hover:bg-cream" to="/course">{{ t('home.mapCta') }}</RouterLink>
          <RouterLink class="btn bg-cream/90 text-ink hover:bg-cream" to="/resources">{{ t('home.bankCta') }}</RouterLink>
        </div>
        <p v-if="lastLesson" class="m-0 font-bold text-cream">
          <RouterLink class="underline decoration-gold/70 underline-offset-4" :to="`/units/${lastLesson.unit.slug}/${lastLesson.lesson.id}`">
            {{ t('home.resume', { lesson: progress.labelFor(lang, lastLesson.lesson.title) }) }}
          </RouterLink>
        </p>
      </div>
    </section>

    <aside class="card mb-8 flex items-center gap-4 p-5 text-pine">
      <ProgressRing :value="percent" :size="86" />
      <div>
        <p class="kicker">{{ t('progress.label') }}</p>
        <h2 class="mb-1 text-2xl">A1</h2>
        <p>{{ t('home.progress', { n: percent }) }}</p>
        <p class="muted">{{ t('home.unitsReady', { n: units.length }) }}</p>
      </div>
    </aside>

    <section class="grid gap-4 sm:grid-cols-2">
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
        <span v-if="unit.available" class="chip">{{ t('course.open') }}</span>
        <span v-else class="chip">{{ t('course.locked') }}</span>
        <span class="chip">{{ progress.unitProgress(unit.id) }}%</span>
      </CoverCard>
    </section>
  </main>
</template>
