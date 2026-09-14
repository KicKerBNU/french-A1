<script setup lang="ts">
defineProps<{
  value: number
  size?: number
}>()
</script>

<template>
  <svg class="text-pine" :width="size ?? 54" :height="size ?? 54" viewBox="0 0 36 36" aria-hidden="true">
    <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgb(31 26 20 / 0.12)" stroke-width="3" />
    <circle
      cx="18"
      cy="18"
      r="15.5"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      :stroke-dasharray="`${value} 100`"
      transform="rotate(-90 18 18)"
    />
    <text x="18" y="20.5" text-anchor="middle" font-size="8" font-weight="700" fill="currentColor">
      {{ value }}%
    </text>
  </svg>
</template>
