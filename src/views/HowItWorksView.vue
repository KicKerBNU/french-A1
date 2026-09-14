<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const keys = ['open', 'lessons', 'daily', 'project', 'bilan'] as const
</script>

<template>
  <main class="page">
    <p class="kicker">A1</p>
    <h1 class="title-xl">{{ t('how.title') }}</h1>
    <p class="lead">{{ t('how.lead') }}</p>
    <ol class="my-7 grid list-none gap-3 p-0">
      <li v-for="(key, index) in keys" :key="key" class="card relative py-5 pr-6 pl-20">
        <span
          class="absolute top-5 left-5 grid size-11 place-items-center rounded-xl bg-pine font-serif text-[1.3rem] text-cream"
        >
          {{ index + 1 }}
        </span>
        <h2 class="mb-1.5 text-[1.4rem]">{{ t(`how.steps.${key}.title`) }}</h2>
        <p class="m-0">{{ t(`how.steps.${key}.text`) }}</p>
      </li>
    </ol>
    <section class="card p-6">
      <h2 class="mb-1.5 text-[1.4rem]">{{ t('how.extrasTitle') }}</h2>
      <p class="m-0">{{ t('how.extras') }}</p>
      <RouterLink class="btn btn-primary mt-4" to="/resources">{{ t('course.resources') }}</RouterLink>
    </section>
  </main>
</template>
