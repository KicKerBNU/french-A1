<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SpeakButton from '@/components/SpeakButton.vue'
import { speakFrench } from '@/composables/useSpeech'
import type { VocabItem } from '@/types/course'

defineProps<{
  items: VocabItem[]
}>()

const { t } = useI18n()
const current = ref(0)

function play(text: string) {
  speakFrench(text)
  current.value += 1
}
</script>

<template>
  <div class="grid gap-2.5">
    <article
      v-for="(item, index) in items"
      :key="item.id"
      class="card flex items-center justify-between gap-3 p-4"
      :class="index === current ? 'shadow-[inset_0_0_0_1.5px_var(--color-pine)]' : ''"
    >
      <div>
        <strong class="text-[1.15rem]">{{ item.fr }}</strong>
        <p class="mt-1 mb-0 muted">{{ item.en }}</p>
      </div>
      <div class="flex items-center gap-2">
        <SpeakButton :text="item.fr" />
        <button class="btn btn-secondary" type="button" @click="play(item.fr)">{{ t('activity.repeat') }}</button>
      </div>
    </article>
  </div>
</template>
