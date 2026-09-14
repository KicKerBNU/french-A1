<script setup lang="ts">
import { speakFrench } from '@/composables/useSpeech'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  text: string
}>()

const { t } = useI18n()
</script>

<template>
  <button class="icon-btn shrink-0" type="button" :aria-label="t('activity.speak')" @click.stop="speakFrench(props.text)">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 10v4h3l5 4V6L7 10H4z" fill="currentColor" />
      <path d="M16 9a4 4 0 010 6M18.5 7a7 7 0 010 10" stroke="currentColor" stroke-width="1.8" />
    </svg>
  </button>
</template>
