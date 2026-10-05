<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { imageForText } from '@/content/visuals'
import WordHint from '@/components/WordHint.vue'
import type { MatchPair } from '@/types/course'

const props = defineProps<{
  pairs: MatchPair[]
  assignAny?: boolean
}>()

const emit = defineEmits<{
  finished: []
}>()

const { t } = useI18n()
const left = computed(() => props.pairs.map((pair) => ({ id: pair.id, text: pair.left })))
const rightItems = computed(() => props.pairs.map((pair) => ({ id: pair.id, text: pair.right })))
const right = ref(
  [...props.pairs]
    .sort(() => Math.random() - 0.5)
    .map((pair) => ({ id: pair.id, text: pair.right })),
)
const selected = ref<string | null>(null)
const selectedRight = ref<string | null>(null)
const matched = ref<string[]>([])
const assigned = ref<Record<string, string>>({})
const wrong = ref<string | null>(null)

const unusedActivities = computed(() => {
  const used = new Set(Object.values(assigned.value))
  return right.value.filter((item) => !used.has(item.id))
})

const planComplete = computed(
  () => props.assignAny && Object.keys(assigned.value).length === props.pairs.length,
)

function visualFor(text: string) {
  return imageForText(text)
}

function activityFor(leftId: string) {
  const rightId = assigned.value[leftId]
  return rightItems.value.find((item) => item.id === rightId)?.text
}

function chooseLeft(id: string) {
  wrong.value = null
  if (props.assignAny) {
    if (assigned.value[id] && !selectedRight.value) {
      const copy = { ...assigned.value }
      delete copy[id]
      assigned.value = copy
      selected.value = null
      return
    }
    selected.value = id
    tryAssign()
    return
  }
  selected.value = id
}

function chooseRight(id: string) {
  wrong.value = null
  if (props.assignAny) {
    selectedRight.value = id
    tryAssign()
    return
  }
  if (!selected.value) return
  if (selected.value === id) {
    matched.value.push(id)
    selected.value = null
    if (matched.value.length === props.pairs.length) emit('finished')
    return
  }
  wrong.value = id
}

function tryAssign() {
  if (!selected.value || !selectedRight.value) return
  assigned.value = { ...assigned.value, [selected.value]: selectedRight.value }
  selected.value = null
  selectedRight.value = null
  if (Object.keys(assigned.value).length === props.pairs.length) emit('finished')
}

function reset() {
  matched.value = []
  selected.value = null
  selectedRight.value = null
  wrong.value = null
  assigned.value = {}
  right.value = [...props.pairs]
    .sort(() => Math.random() - 0.5)
    .map((pair) => ({ id: pair.id, text: pair.right }))
}

function leftClass(id: string) {
  if (props.assignAny) {
    if (assigned.value[id]) return 'surface surface-good'
    if (selected.value === id) return 'surface surface-on'
    return 'surface'
  }
  if (matched.value.includes(id)) return 'surface opacity-40'
  if (selected.value === id) return 'surface surface-on'
  return 'surface'
}

function rightClass(id: string) {
  if (props.assignAny) {
    if (selectedRight.value === id) return 'surface surface-on'
    return 'surface'
  }
  if (matched.value.includes(id)) return 'surface opacity-40'
  if (wrong.value === id) return 'surface surface-bad'
  return 'surface'
}
</script>

<template>
  <div class="grid gap-3 sm:grid-cols-2">
    <p v-if="assignAny" class="muted col-span-full m-0">{{ t('activity.planHint') }}</p>
    <div class="grid gap-2">
      <button
        v-for="item in left"
        :key="item.id"
        type="button"
        class="flex min-h-[3.25rem] flex-col justify-center gap-0.5 px-3 py-2.5 text-left"
        :class="leftClass(item.id)"
        :disabled="!assignAny && matched.includes(item.id)"
        @click="chooseLeft(item.id)"
      >
        <span class="flex items-center gap-3">
          <img
            v-if="!assignAny && visualFor(item.text)"
            :src="visualFor(item.text)!.src"
            :alt="visualFor(item.text)!.alt"
            class="size-10 rounded-lg object-cover"
          />
          <strong><WordHint :text="item.text" source="fr" /></strong>
        </span>
        <small v-if="assignAny && activityFor(item.id)" class="font-normal text-ink-soft">
          <WordHint :text="activityFor(item.id)!" source="fr" />
        </small>
      </button>
    </div>
    <div class="grid gap-2">
      <button
        v-for="item in assignAny ? unusedActivities : right"
        :key="item.id"
        type="button"
        class="flex min-h-[3.25rem] items-center px-3 py-2.5 text-left"
        :class="rightClass(item.id)"
        :disabled="!assignAny && matched.includes(item.id)"
        @click="chooseRight(item.id)"
      >
        <WordHint :text="item.text" source="fr" />
      </button>
    </div>
    <p
      v-if="assignAny ? planComplete : matched.length === pairs.length"
      class="col-span-full mt-2 mb-0 font-bold text-pine-deep"
    >
      {{ assignAny ? t('activity.planDone') : t('activity.matched') }}
    </p>
    <button class="btn btn-secondary col-span-full w-fit" type="button" @click="reset">{{ t('activity.reset') }}</button>
  </div>
</template>
