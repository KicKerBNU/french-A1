<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import SpeakButton from '@/components/SpeakButton.vue'
import WordHint from '@/components/WordHint.vue'
import { imageForTextOrUnit } from '@/content/visuals'
import { useProgressStore } from '@/stores/progress'
import type { Locale, QuizQuestion } from '@/types/course'

const props = defineProps<{
  questions: QuizQuestion[]
  unitId?: number
}>()

const emit = defineEmits<{
  finished: [score: number]
}>()

function shuffleQuiz(questions: QuizQuestion[]) {
  return questions.map((item) => {
    const order = item.options.map((_, optionIndex) => optionIndex)
    for (let i = order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[order[i], order[j]] = [order[j], order[i]]
    }
    return {
      ...item,
      options: order.map((optionIndex) => item.options[optionIndex]),
      answer: order.indexOf(item.answer),
    }
  })
}

const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const index = ref(0)
const picked = ref<number | null>(null)
const score = ref(0)
const deck = ref(shuffleQuiz(props.questions))
const question = computed(() => deck.value[index.value])
const lastQuestion = computed(() => index.value + 1 >= deck.value.length)

function resetDeck(questions = props.questions) {
  deck.value = shuffleQuiz(questions)
  index.value = 0
  picked.value = null
  score.value = 0
}

watch(
  () => props.questions,
  (questions) => resetDeck(questions),
)

const visual = computed(() =>
  imageForTextOrUnit(
    props.unitId ?? 0,
    question.value.prompt.fr,
    question.value.prompt.en,
    ...question.value.options.map((option) => option.fr),
  ),
)

function label(item: { fr: string; en: string }) {
  return progress.labelFor(lang.value, item)
}

function choose(optionIndex: number) {
  if (picked.value !== null) return
  picked.value = optionIndex
  if (optionIndex === question.value.answer) score.value += 1
  if (lastQuestion.value) emit('finished', score.value)
}

function next() {
  if (lastQuestion.value) return
  index.value += 1
  picked.value = null
}

function optionClass(optionIndex: number) {
  if (picked.value === null) return 'surface'
  if (optionIndex === question.value.answer) return 'surface surface-good'
  if (picked.value === optionIndex) return 'surface surface-bad'
  return 'surface'
}
</script>

<template>
  <div class="grid gap-4">
    <p class="kicker">{{ index + 1 }} / {{ questions.length }}</p>
    <img :src="visual.src" :alt="visual.alt" class="photo-scene mb-0 h-40 sm:h-48" />
    <h3 class="m-0 text-2xl"><WordHint :text="label(question.prompt)" /></h3>
    <div class="grid gap-2.5">
      <div
        v-for="(option, optionIndex) in question.options"
        :key="option.fr"
        class="flex cursor-pointer items-center justify-between gap-3 px-4 py-3.5"
        :class="optionClass(optionIndex)"
        role="button"
        tabindex="0"
        @click="choose(optionIndex)"
        @keydown.enter.prevent="choose(optionIndex)"
      >
        <span><WordHint :text="label(option)" /></span>
        <SpeakButton :text="option.fr" />
      </div>
    </div>
    <p v-if="picked !== null" class="m-0">
      {{ picked === question.answer ? t('activity.correct') : t('activity.incorrect') }}
      <WordHint :text="label(question.explanation)" />
    </p>
    <button v-if="picked !== null && !lastQuestion" class="btn btn-primary w-fit" type="button" @click="next">
      {{ t('app.next') }}
    </button>
  </div>
</template>
