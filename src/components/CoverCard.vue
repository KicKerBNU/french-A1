<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  src: string
  alt: string
  to?: string
  kicker?: string
  title: string
  subtitle?: string
  accent?: string
  tall?: boolean
}>()
</script>

<template>
  <component :is="to ? RouterLink : 'article'" :to="to" class="photo-card group">
    <div class="relative overflow-hidden" :class="tall ? 'h-52 sm:h-60' : 'h-40 sm:h-44'">
      <img :src="src" :alt="alt" class="size-full object-cover transition duration-500 group-hover:scale-[1.04]" />
      <div class="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/15 to-transparent" />
      <span
        v-if="kicker"
        class="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[0.7rem] font-extrabold tracking-wide text-cream"
        :style="{ background: accent ?? 'rgb(44 92 79 / 0.92)' }"
      >
        {{ kicker }}
      </span>
      <div class="absolute inset-x-0 bottom-0 p-4 text-cream">
        <h3 class="m-0 font-serif text-[1.35rem] leading-tight text-cream">{{ title }}</h3>
        <p v-if="subtitle" class="mt-1 mb-0 line-clamp-2 text-sm text-cream/85">{{ subtitle }}</p>
      </div>
    </div>
    <div v-if="$slots.default" class="flex flex-wrap items-center justify-between gap-3 p-4">
      <slot />
    </div>
  </component>
</template>
