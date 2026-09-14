<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LessonBlocks from '@/components/LessonBlocks.vue'
import { getUnitBySlug } from '@/content/course'
import { coverForUnit, imageForTextOrUnit, kindEmoji } from '@/content/visuals'
import { getLesson } from '@/content/units'
import { useProgressStore } from '@/stores/progress'
import type { Activity, Locale } from '@/types/course'

const route = useRoute()
const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const unit = computed(() => getUnitBySlug(String(route.params.slug)))
const lesson = computed(() =>
  unit.value ? getLesson(unit.value.id, String(route.params.lessonId)) : undefined,
)
const banner = computed(() => {
  if (!unit.value || !lesson.value) return coverForUnit(0)
  return imageForTextOrUnit(unit.value.id, lesson.value.title.fr, lesson.value.title.en, lesson.value.summary.fr)
})

function activityVisual(activity: Activity) {
  if (!unit.value) return coverForUnit(0)
  return imageForTextOrUnit(
    unit.value.id,
    activity.title.fr,
    activity.title.en,
    activity.intro?.fr,
    activity.items?.[0]?.fr,
    activity.dialogue?.context.fr,
  )
}
</script>

<template>
  <main v-if="unit && lesson" class="page">
    <RouterLink class="btn btn-ghost" :to="`/units/${unit.slug}`">
      ← {{ lang === 'fr-FR' ? unit.title : unit.titleEn }}
    </RouterLink>

    <section class="photo-card relative mb-7 overflow-hidden">
      <img :src="banner.src" :alt="banner.alt" class="h-48 w-full object-cover sm:h-64" />
      <div class="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
      <div class="absolute inset-x-0 bottom-0 p-6 text-cream">
        <p class="kicker mb-2 text-gold">
          {{ unit.hub === 'resources' ? t('resources.fromUnit', { n: lesson.number }) : t('lesson.lesson', { n: lesson.number }) }}
        </p>
        <h1 class="m-0 font-serif text-[clamp(1.7rem,4vw,2.8rem)] text-cream">{{ progress.labelFor(lang, lesson.title) }}</h1>
        <p class="mt-2 mb-0 max-w-[50ch] text-cream/90">{{ progress.labelFor(lang, lesson.summary) }}</p>
      </div>
    </section>

    <section class="card mb-7 p-6">
      <p class="kicker">{{ t('lesson.readFirst') }}</p>
      <LessonBlocks :blocks="lesson.blocks" />
    </section>

    <section class="grid gap-2.5">
      <h2 class="m-0 text-xl">{{ t('lesson.activities') }}</h2>
      <RouterLink
        v-for="activity in lesson.activities"
        :key="activity.id"
        class="card flex items-center gap-3 p-3"
        :to="`/units/${unit.slug}/${lesson.id}/${activity.id}`"
      >
        <img :src="activityVisual(activity).src" :alt="activityVisual(activity).alt" class="photo-thumb" />
        <span class="kind-pill">{{ kindEmoji[activity.type] ?? '▶' }}</span>
        <div class="min-w-0 flex-1">
          <p class="kicker mb-1">{{ t(`activity.kind.${activity.type}`) }}</p>
          <h3 class="m-0 text-xl">{{ progress.labelFor(lang, activity.title) }}</h3>
        </div>
        <span class="chip">{{ progress.isDone(activity.id) ? t('unit.done') : t('app.start') }}</span>
      </RouterLink>
    </section>
  </main>
  <main v-else class="page">
    <RouterLink class="btn btn-ghost" to="/units/tour-du-monde">← Unité 0</RouterLink>
    <p class="muted">{{ t('unit.lockedHint') }}</p>
  </main>
</template>
