<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SpeakButton from '@/components/SpeakButton.vue'
import { speakFrench } from '@/composables/useSpeech'
import { imageForTextOrUnit } from '@/content/visuals'
import type { VocabItem } from '@/types/course'

const props = defineProps<{
  items: VocabItem[]
  unitId?: number
}>()

const { t } = useI18n()
const current = ref(0)

function play(text: string) {
  speakFrench(text)
  current.value += 1
}

function visualFor(item: VocabItem) {
  return imageForTextOrUnit(props.unitId ?? 0, item.fr, item.en)
}
</script>

<template>
  <div class="grid gap-2.5">
    <article
      v-for="(item, index) in items"
      :key="item.id"
      class="card flex items-center justify-between gap-3 p-3"
      :class="index === current ? 'shadow-[inset_0_0_0_1.5px_var(--color-pine)]' : ''"
    >
      <img :src="visualFor(item).src" :alt="visualFor(item).alt" class="photo-thumb" />
      <div class="min-w-0 flex-1">
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
