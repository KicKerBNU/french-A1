<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LessonBlocks from '@/components/LessonBlocks.vue'
import { getUnitBySlug } from '@/content/course'
import { getLesson } from '@/content/units'
import { useProgressStore } from '@/stores/progress'
import type { Locale } from '@/types/course'

const route = useRoute()
const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const unit = computed(() => getUnitBySlug(String(route.params.slug)))
const lesson = computed(() =>
  unit.value ? getLesson(unit.value.id, String(route.params.lessonId)) : undefined,
)
</script>

<template>
  <main v-if="unit && lesson" class="page">
    <RouterLink class="btn btn-ghost" :to="`/units/${unit.slug}`">
      ← {{ lang === 'fr-FR' ? unit.title : unit.titleEn }}
    </RouterLink>
    <p class="kicker">{{ unit.hub === 'resources' ? t('resources.fromUnit', { n: lesson.number }) : t('lesson.lesson', { n: lesson.number }) }}</p>
    <h1 class="title-xl">{{ progress.labelFor(lang, lesson.title) }}</h1>
    <p class="lead">{{ progress.labelFor(lang, lesson.summary) }}</p>

    <section class="card mb-7 p-6">
      <p class="kicker">{{ t('lesson.readFirst') }}</p>
      <LessonBlocks :blocks="lesson.blocks" />
    </section>

    <section class="grid gap-2.5">
      <h2 class="m-0 text-xl">{{ t('lesson.activities') }}</h2>
      <RouterLink
        v-for="activity in lesson.activities"
        :key="activity.id"
        class="card flex items-center justify-between gap-3 p-4"
        :to="`/units/${unit.slug}/${lesson.id}/${activity.id}`"
      >
        <div>
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
