<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SpeakButton from '@/components/SpeakButton.vue'
import { useProgressStore } from '@/stores/progress'
import type { Locale, QuizQuestion } from '@/types/course'

const props = defineProps<{
  questions: QuizQuestion[]
}>()

const emit = defineEmits<{
  finished: [score: number]
}>()

const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const index = ref(0)
const picked = ref<number | null>(null)
const score = ref(0)
const done = ref(false)

const question = computed(() => props.questions[index.value])

function label(item: { fr: string; en: string }) {
  return progress.labelFor(lang.value, item)
}

function choose(optionIndex: number) {
  if (picked.value !== null) return
  picked.value = optionIndex
  if (optionIndex === question.value.answer) score.value += 1
}

function next() {
  if (index.value + 1 >= props.questions.length) {
    done.value = true
    emit('finished', score.value)
    return
  }
  index.value += 1
  picked.value = null
}

function restart() {
  index.value = 0
  picked.value = null
  score.value = 0
  done.value = false
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
    <div v-if="done" class="card grid justify-items-start gap-3 p-6">
      <p class="kicker">{{ t('activity.score', { score, total: questions.length }) }}</p>
      <button class="btn btn-primary" type="button" @click="restart">{{ t('activity.again') }}</button>
    </div>
    <template v-else>
      <p class="kicker">{{ index + 1 }} / {{ questions.length }}</p>
      <h3 class="m-0 text-2xl">{{ label(question.prompt) }}</h3>
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
          <span>{{ label(option) }}</span>
          <SpeakButton :text="option.fr" />
        </div>
      </div>
      <p v-if="picked !== null" class="m-0">
        {{ picked === question.answer ? t('activity.correct') : t('activity.incorrect') }}
        {{ label(question.explanation) }}
      </p>
      <button v-if="picked !== null" class="btn btn-primary w-fit" type="button" @click="next">
        {{ index + 1 === questions.length ? t('activity.complete') : t('app.next') }}
      </button>
    </template>
  </div>
</template>
