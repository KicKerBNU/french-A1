<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SpeakButton from '@/components/SpeakButton.vue'
import { imageForTextOrUnit } from '@/content/visuals'
import type { VocabItem } from '@/types/course'

const props = defineProps<{
  items: VocabItem[]
  unitId?: number
}>()

const { t } = useI18n()
const index = ref(0)
const flipped = ref(false)
const order = ref(props.items.map((_, i) => i))

const card = computed(() => props.items[order.value[index.value]])
const visual = computed(() =>
  imageForTextOrUnit(props.unitId ?? 0, card.value.fr, card.value.en, card.value.exampleFr),
)

function next() {
  flipped.value = false
  index.value = (index.value + 1) % order.value.length
}

function prev() {
  flipped.value = false
  index.value = (index.value - 1 + order.value.length) % order.value.length
}

function shuffle() {
  order.value = [...order.value].sort(() => Math.random() - 0.5)
  index.value = 0
  flipped.value = false
}
</script>

<template>
  <div class="grid gap-4">
    <div
      class="photo-card cursor-pointer overflow-hidden"
      role="button"
      tabindex="0"
      @click="flipped = !flipped"
      @keydown.enter.prevent="flipped = !flipped"
    >
      <img :src="visual.src" :alt="visual.alt" class="h-52 w-full object-cover sm:h-64" />
      <div class="grid justify-items-center gap-3 px-5 py-6 text-center">
        <span class="font-semibold text-ink-soft">{{ index + 1 }} / {{ items.length }}</span>
        <template v-if="!flipped">
          <strong class="font-serif text-[clamp(2rem,5vw,3.2rem)]">{{ card.fr }}</strong>
          <SpeakButton :text="card.fr" />
          <small class="font-semibold text-ink-soft">{{ t('activity.flip') }}</small>
        </template>
        <template v-else>
          <strong class="font-serif text-[clamp(2rem,5vw,3.2rem)]">{{ card.en }}</strong>
          <p v-if="card.exampleFr" class="m-0">{{ card.exampleFr }}</p>
          <small v-if="card.exampleEn" class="font-semibold text-ink-soft">{{ card.exampleEn }}</small>
        </template>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-2">
      <button class="btn btn-secondary" type="button" @click="prev">{{ t('activity.prevCard') }}</button>
      <button class="btn btn-secondary" type="button" @click="shuffle">{{ t('activity.shuffle') }}</button>
      <button class="btn btn-primary" type="button" @click="next">{{ t('activity.nextCard') }}</button>
    </div>
  </div>
</template>
