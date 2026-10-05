<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { hideWordTooltipNow, wordTooltip } from '@/composables/useWordTooltip'

const route = useRoute()

function hide() {
  hideWordTooltipNow()
}

onMounted(() => {
  window.addEventListener('scroll', hide, true)
  window.addEventListener('resize', hide)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', hide, true)
  window.removeEventListener('resize', hide)
})

watch(
  () => route.fullPath,
  () => hide(),
)
</script>

<template>
  <Teleport to="body">
    <div
      v-if="wordTooltip.visible"
      class="word-tooltip"
      role="tooltip"
      :style="{ left: `${wordTooltip.x}px`, top: `${wordTooltip.y}px` }"
    >
      <span class="word-tooltip-lang">{{ wordTooltip.source.toUpperCase() }}</span>
      <span>{{ wordTooltip.hint }}</span>
    </div>
  </Teleport>
</template>
