<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { extraSections, units } from '@/content/course'
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

    <div class="grid gap-4">
      <article v-for="unit in units" :key="unit.id" class="card p-6">
        <header class="mb-2.5 flex flex-wrap items-center gap-3">
          <span class="size-3.5 rounded-full" :style="{ background: unit.accent }"></span>
          <div class="min-w-0 flex-1">
            <p class="kicker mb-0">Unité {{ unit.id }}</p>
            <h2 class="text-[1.6rem]">{{ lang === 'fr-FR' ? unit.title : unit.titleEn }}</h2>
          </div>
          <span v-if="unit.available" class="chip">{{ t('home.unitOpen') }} · {{ progress.unitProgress(unit.id) }}%</span>
          <span v-else class="chip">{{ t('course.locked') }}</span>
        </header>
        <p class="mb-3">{{ progress.labelFor(lang, unit.blurb) }}</p>
        <ul class="mb-4 list-disc pl-5 text-ink-soft">
          <li v-for="item in unit.interactions.slice(0, 3)" :key="item.fr">{{ progress.labelFor(lang, item) }}</li>
        </ul>
        <RouterLink v-if="unit.available" class="btn btn-primary" :to="`/units/${unit.slug}`">{{ t('course.open') }}</RouterLink>
        <RouterLink v-else class="btn btn-secondary" :to="`/units/${unit.slug}`">{{ t('app.continue') }}</RouterLink>
      </article>
    </div>

    <section class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <component
        :is="item.available && item.to ? RouterLink : 'div'"
        v-for="item in extraSections"
        :key="item.id"
        class="card flex items-center justify-between gap-3 p-4"
        :to="item.available && item.to ? item.to : undefined"
      >
        <h3 class="m-0 text-[1.05rem]">{{ lang === 'fr-FR' ? item.title : item.titleEn }}</h3>
        <span class="chip">{{ item.available ? t('home.unitOpen') : t('course.locked') }}</span>
      </component>
    </section>
  </main>
</template>
