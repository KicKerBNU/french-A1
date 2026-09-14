<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ProgressRing from '@/components/ProgressRing.vue'
import { getUnitById, units } from '@/content/course'
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
    <section class="grid items-center gap-7 py-6 pb-10 lg:grid-cols-[1.4fr_0.8fr]">
      <div>
        <p class="kicker">{{ t('home.kicker') }}</p>
        <h1 class="mb-3.5 font-serif text-[clamp(2.4rem,6vw,4.4rem)] font-semibold tracking-tight">
          {{ t('home.title') }}
        </h1>
        <p class="max-w-[58ch] text-[1.08rem] text-ink-soft">{{ t('home.lead') }}</p>
        <div class="mt-6 flex flex-wrap gap-2.5">
          <RouterLink class="btn btn-primary" :to="`/units/${unit8.slug}`">{{ t('home.cta') }}</RouterLink>
          <RouterLink class="btn btn-secondary" to="/course">{{ t('home.mapCta') }}</RouterLink>
          <RouterLink class="btn btn-secondary" to="/resources">{{ t('home.bankCta') }}</RouterLink>
        </div>
        <p v-if="lastLesson" class="mt-4 font-bold">
          <RouterLink
            class="underline decoration-gold/40 underline-offset-4"
            :to="`/units/${lastLesson.unit.slug}/${lastLesson.lesson.id}`"
          >
            {{ t('home.resume', { lesson: progress.labelFor(lang, lastLesson.lesson.title) }) }}
          </RouterLink>
        </p>
      </div>
      <aside class="card flex items-center gap-4 p-6 text-pine">
        <ProgressRing :value="percent" :size="86" />
        <div>
          <p class="kicker">{{ t('progress.label') }}</p>
          <h2 class="mb-1 text-2xl">A1</h2>
          <p>{{ t('home.progress', { n: percent }) }}</p>
          <p class="muted">{{ t('home.unitsReady', { n: units.length }) }}</p>
        </div>
      </aside>
    </section>

    <section class="grid gap-3">
      <article
        v-for="unit in units"
        :key="unit.id"
        class="card grid items-center gap-4 p-4 sm:grid-cols-[auto_1fr_auto]"
      >
        <span class="grid size-11 place-items-center rounded-xl font-extrabold text-cream" :style="{ background: unit.accent }">
          {{ unit.id }}
        </span>
        <div>
          <h3 class="mb-1 text-xl">{{ lang === 'fr-FR' ? unit.title : unit.titleEn }}</h3>
          <p class="muted">{{ progress.labelFor(lang, unit.blurb) }}</p>
        </div>
        <RouterLink v-if="unit.available" class="btn btn-primary" :to="`/units/${unit.slug}`">{{ t('course.open') }}</RouterLink>
        <span v-else class="chip w-fit">{{ t('course.locked') }}</span>
      </article>
    </section>
  </main>
</template>
