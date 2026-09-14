<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SpeakButton from '@/components/SpeakButton.vue'
import { speakFrench } from '@/composables/useSpeech'
import { useProgressStore } from '@/stores/progress'
import type { GreetingPin, Locale } from '@/types/course'

const props = defineProps<{
  pins: GreetingPin[]
}>()

const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
</script>

<template>
  <div class="grid gap-3.5">
    <p class="muted">{{ t('activity.tapPin') }}</p>
    <div class="card relative min-h-60 overflow-hidden">
      <svg class="block h-auto w-full" viewBox="0 0 400 220" role="img" aria-label="World">
        <rect width="400" height="220" fill="#d7efe6" rx="18" />
        <path
          fill="#2c5c4f"
          opacity="0.88"
          d="M48 78c22-18 58-22 86-10 18 8 28 6 46-8 22-16 48-8 62 8 10 12 28 10 40-2 18-16 40-10 58 6l8 46c-18 20-46 28-72 18-20-8-32 2-48 16-22 20-52 16-70-2-14-14-34-10-50 2-22 16-54 8-70-14z"
        />
        <circle
          v-for="pin in pins"
          :key="pin.id"
          :cx="pin.x"
          :cy="pin.y"
          r="7"
          fill="#fffdf8"
          stroke="#b57a2b"
          stroke-width="3"
        />
      </svg>
      <button
        v-for="pin in pins"
        :key="`${pin.id}-btn`"
        type="button"
        class="absolute -translate-x-1/2 -translate-y-[120%] rounded-full bg-cream px-2.5 py-1.5 text-[0.82rem] font-extrabold whitespace-nowrap shadow-card"
        :style="{ left: `${(pin.x / 400) * 100}%`, top: `${(pin.y / 220) * 100}%` }"
        @click="speakFrench(pin.greeting)"
      >
        {{ pin.greeting }}
      </button>
    </div>
    <ul class="m-0 grid list-none gap-2 p-0">
      <li
        v-for="pin in pins"
        :key="pin.id"
        class="surface flex flex-col justify-between gap-3 p-3.5 font-normal sm:flex-row sm:items-center"
      >
        <strong class="flex items-center gap-2">
          {{ pin.greeting }}
          <SpeakButton :text="pin.greeting" />
        </strong>
        <span class="text-left text-[0.92rem] font-normal text-ink-soft sm:text-right">
          {{ progress.labelFor(lang, pin.region) }} · {{ progress.labelFor(lang, pin.when) }}
        </span>
      </li>
    </ul>
  </div>
</template>
