<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { imageForText } from '@/content/visuals'
import type { MatchPair } from '@/types/course'

const props = defineProps<{
  pairs: MatchPair[]
}>()

const emit = defineEmits<{
  finished: []
}>()

const { t } = useI18n()
const left = computed(() => props.pairs.map((pair) => ({ id: pair.id, text: pair.left })))
const right = ref(
  [...props.pairs]
    .sort(() => Math.random() - 0.5)
    .map((pair) => ({ id: pair.id, text: pair.right })),
)
const selected = ref<string | null>(null)
const matched = ref<string[]>([])
const wrong = ref<string | null>(null)

function visualFor(text: string) {
  return imageForText(text)
}

function chooseLeft(id: string) {
  selected.value = id
  wrong.value = null
}

function chooseRight(id: string) {
  if (!selected.value) return
  if (selected.value === id) {
    matched.value.push(id)
    selected.value = null
    if (matched.value.length === props.pairs.length) emit('finished')
    return
  }
  wrong.value = id
}

function reset() {
  matched.value = []
  selected.value = null
  wrong.value = null
  right.value = [...props.pairs]
    .sort(() => Math.random() - 0.5)
    .map((pair) => ({ id: pair.id, text: pair.right }))
}

function leftClass(id: string) {
  if (matched.value.includes(id)) return 'surface opacity-40'
  if (selected.value === id) return 'surface surface-on'
  return 'surface'
}

function rightClass(id: string) {
  if (matched.value.includes(id)) return 'surface opacity-40'
  if (wrong.value === id) return 'surface surface-bad'
  return 'surface'
}
</script>

<template>
  <div class="grid gap-3 sm:grid-cols-2">
    <div class="grid gap-2">
      <button
        v-for="item in left"
        :key="item.id"
        type="button"
        class="flex min-h-[3.25rem] items-center gap-3 px-3 py-2.5"
        :class="leftClass(item.id)"
        :disabled="matched.includes(item.id)"
        @click="chooseLeft(item.id)"
      >
        <img v-if="visualFor(item.text)" :src="visualFor(item.text)!.src" :alt="visualFor(item.text)!.alt" class="size-10 rounded-lg object-cover" />
        {{ item.text }}
      </button>
    </div>
    <div class="grid gap-2">
      <button
        v-for="item in right"
        :key="item.id"
        type="button"
        class="flex min-h-[3.25rem] items-center gap-3 px-3 py-2.5"
        :class="rightClass(item.id)"
        :disabled="matched.includes(item.id)"
        @click="chooseRight(item.id)"
      >
        <img v-if="visualFor(item.text)" :src="visualFor(item.text)!.src" :alt="visualFor(item.text)!.alt" class="size-10 rounded-lg object-cover" />
        {{ item.text }}
      </button>
    </div>
    <p v-if="matched.length === pairs.length" class="col-span-full mt-2 mb-0 font-bold text-pine-deep">
      {{ t('activity.matched') }}
    </p>
    <button class="btn btn-secondary col-span-full w-fit" type="button" @click="reset">{{ t('activity.reset') }}</button>
  </div>
</template>
