<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import CoverCard from '@/components/CoverCard.vue'
import { getUnitBySlug } from '@/content/course'
import { coverForUnit, imageForTextOrUnit } from '@/content/visuals'
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
const cover = computed(() => (unit.value ? coverForUnit(unit.value.id) : null))

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

function lessonCover(title: Labeled, summary: Labeled) {
  if (!unit.value) return coverForUnit(0)
  return imageForTextOrUnit(unit.value.id, title.fr, title.en, summary.fr)
}
</script>

<template>
  <main v-if="unit && cover" class="page">
    <RouterLink class="btn btn-ghost" :to="isResource ? '/resources' : '/course'">
      ← {{ isResource ? t('course.resources') : t('app.course') }}
    </RouterLink>

    <section class="photo-card relative mb-8 overflow-hidden">
      <img :src="cover.src" :alt="cover.alt" class="h-56 w-full object-cover sm:h-72" />
      <div class="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/25 to-transparent" />
      <div class="absolute inset-x-0 bottom-0 p-6 text-cream">
        <p class="kicker mb-2 text-gold">{{ isResource ? t('course.resources') : `Unité ${unit.id}` }}</p>
        <h1 class="m-0 font-serif text-[clamp(1.8rem,4vw,3rem)] text-cream">{{ lang === 'fr-FR' ? unit.title : unit.titleEn }}</h1>
        <p class="mt-2 mb-0 max-w-[50ch] text-cream/90">{{ label(unit.blurb) }}</p>
      </div>
    </section>

    <section v-if="lessons.length" class="mb-8">
      <h2 class="mb-3 text-xl">{{ t('unit.lessons') }}</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <CoverCard
          v-for="lesson in lessons"
          :key="lesson.id"
          :src="lessonCover(lesson.title, lesson.summary).src"
          :alt="lessonCover(lesson.title, lesson.summary).alt"
          :to="`/units/${unit.slug}/${lesson.id}`"
          :kicker="String(lesson.number)"
          :title="label(lesson.title)"
          :subtitle="label(lesson.summary)"
          :accent="unit.accent"
        >
          <span class="chip">{{ progress.lessonProgress(unit.id, lesson.id) }}%</span>
          <span class="chip">{{ t('unit.activities', { n: lesson.activities.length }) }}</span>
        </CoverCard>
      </div>
    </section>
    <p v-else class="card p-5">{{ t('unit.lockedHint') }}</p>

    <div v-if="groups.length || unit.project" class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      <section v-for="group in groups" :key="group.key" class="card p-5">
        <h2 class="mb-2 text-xl">{{ t(`unit.${group.key}`) }}</h2>
        <ul class="m-0 list-disc pl-5">
          <li v-for="item in group.items" :key="item.fr">{{ label(item) }}</li>
        </ul>
      </section>
      <section v-if="unit.project" class="card overflow-hidden p-0">
        <img :src="cover.src" :alt="cover.alt" class="h-28 w-full object-cover" />
        <div class="p-5">
          <h2 class="mb-2 text-xl">{{ t('unit.project') }}</h2>
          <p class="m-0">{{ label(unit.project) }}</p>
        </div>
      </section>
    </div>
  </main>
</template>
