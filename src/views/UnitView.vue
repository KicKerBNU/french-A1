<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getUnitBySlug } from '@/content/course'
import { getLessonsForUnit } from '@/content/units'
import { useProgressStore } from '@/stores/progress'
import type { Labeled, Locale } from '@/types/course'

const route = useRoute()
const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const unit = computed(() => getUnitBySlug(String(route.params.slug)))
const lessons = computed(() => (unit.value ? getLessonsForUnit(unit.value.id) : []))
const isResource = computed(() => unit.value?.hub === 'resources')

const groups = computed(() => {
  if (!unit.value) return []
  return [
    { key: 'culture', items: unit.value.culture },
    { key: 'vocabulary', items: unit.value.vocabulary },
    { key: 'interactions', items: unit.value.interactions },
    { key: 'grammar', items: unit.value.grammar },
    { key: 'phonetics', items: unit.value.phonetics },
    { key: 'dailyLife', items: unit.value.dailyLife },
  ].filter((group) => group.items.length > 0)
})

function label(item: Labeled) {
  return progress.labelFor(lang.value, item)
}
</script>

<template>
  <main v-if="unit" class="page">
    <RouterLink class="btn btn-ghost" :to="isResource ? '/resources' : '/course'">
      ← {{ isResource ? t('course.resources') : t('app.course') }}
    </RouterLink>
    <p class="kicker">{{ isResource ? t('course.resources') : `Unité ${unit.id}` }}</p>
    <h1 class="title-xl">{{ lang === 'fr-FR' ? unit.title : unit.titleEn }}</h1>
    <p class="lead">{{ label(unit.blurb) }}</p>

    <section v-if="lessons.length" class="mb-7 grid gap-3">
      <h2 class="mb-0 text-xl">{{ t('unit.lessons') }}</h2>
      <RouterLink
        v-for="lesson in lessons"
        :key="lesson.id"
        class="card grid items-center gap-3.5 p-4 sm:grid-cols-[auto_1fr_auto]"
        :to="`/units/${unit.slug}/${lesson.id}`"
      >
        <span class="grid size-10 place-items-center rounded-xl bg-pine font-extrabold text-cream">{{ lesson.number }}</span>
        <div>
          <h3 class="mb-1 text-xl">{{ label(lesson.title) }}</h3>
          <p class="muted">{{ label(lesson.summary) }}</p>
        </div>
        <span class="chip w-fit">{{ progress.lessonProgress(unit.id, lesson.id) }}%</span>
      </RouterLink>
    </section>
    <p v-else class="card p-5">{{ t('unit.lockedHint') }}</p>

    <div v-if="groups.length || unit.project" class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      <section v-for="group in groups" :key="group.key" class="card p-5">
        <h2 class="mb-2 text-xl">{{ t(`unit.${group.key}`) }}</h2>
        <ul class="m-0 list-disc pl-5">
          <li v-for="item in group.items" :key="item.fr">{{ label(item) }}</li>
        </ul>
      </section>
      <section v-if="unit.project" class="card bg-linear-to-b from-gold/15 to-cream p-5">
        <h2 class="mb-2 text-xl">{{ t('unit.project') }}</h2>
        <p class="m-0">{{ label(unit.project) }}</p>
      </section>
    </div>
  </main>
</template>
