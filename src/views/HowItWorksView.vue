<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { howImages } from '@/content/visuals'

const { t } = useI18n()

const keys = ['open', 'lessons', 'daily', 'project', 'bilan'] as const
</script>

<template>
  <main class="page">
    <p class="kicker">A1</p>
    <h1 class="title-xl">{{ t('how.title') }}</h1>
    <p class="lead">{{ t('how.lead') }}</p>
    <ol class="my-7 grid list-none gap-4 p-0 sm:grid-cols-2">
      <li v-for="(key, index) in keys" :key="key" class="photo-card" :class="index === 0 ? 'sm:col-span-2' : ''">
        <img :src="howImages[key].src" :alt="howImages[key].alt" class="h-40 w-full object-cover" :class="index === 0 ? 'sm:h-56' : ''" />
        <div class="relative p-5 pt-6">
          <span
            class="absolute -top-5 left-5 grid size-11 place-items-center rounded-xl bg-pine font-serif text-[1.3rem] text-cream shadow-card"
          >
            {{ index + 1 }}
          </span>
          <h2 class="mb-1.5 text-[1.4rem]">{{ t(`how.steps.${key}.title`) }}</h2>
          <p class="m-0">{{ t(`how.steps.${key}.text`) }}</p>
        </div>
      </li>
    </ol>
    <section class="card overflow-hidden p-0 sm:grid sm:grid-cols-[14rem_1fr]">
      <img :src="howImages.bilan.src" :alt="howImages.bilan.alt" class="h-40 w-full object-cover sm:h-full" />
      <div class="p-6">
        <h2 class="mb-1.5 text-[1.4rem]">{{ t('how.extrasTitle') }}</h2>
        <p class="m-0">{{ t('how.extras') }}</p>
        <RouterLink class="btn btn-primary mt-4" to="/resources">{{ t('course.resources') }}</RouterLink>
      </div>
    </section>
  </main>
</template>
