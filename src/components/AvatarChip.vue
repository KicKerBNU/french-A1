<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  name?: string
  size?: 'sm' | 'md'
}>()
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    class="rounded-full object-cover shadow-[inset_0_0_0_1px_rgb(31_26_20_/_0.12)]"
    :class="size === 'sm' ? 'size-8' : 'size-11'"
  />
</template>
