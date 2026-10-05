<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { hintParts, type HintSource } from '@/content/glossary'
import { hideWordTooltip, showWordTooltip } from '@/composables/useWordTooltip'

const props = defineProps<{
  text: string
  source?: HintSource | 'auto'
}>()

const { locale } = useI18n()
const prefer = computed<HintSource | 'auto'>(() => {
  if (props.source) return props.source
  return locale.value === 'fr-FR' ? 'fr' : 'en'
})
const parts = computed(() => hintParts(props.text, prefer.value))

function enter(event: Event, hint: string, source: HintSource) {
  const node = event.currentTarget
  if (!(node instanceof HTMLElement)) return
  showWordTooltip(node, hint, source)
}

function leave() {
  hideWordTooltip()
}
</script>

<template>
  <span>
    <template v-for="(part, index) in parts" :key="index">
      <span
        v-if="part.hint && part.source"
        class="word-tip"
        :aria-label="`${part.text}: ${part.hint}`"
        @mouseenter="enter($event, part.hint, part.source)"
        @mouseleave="leave"
      >
        {{ part.text }}
      </span>
      <template v-else>{{ part.text }}</template>
    </template>
  </span>
</template>
