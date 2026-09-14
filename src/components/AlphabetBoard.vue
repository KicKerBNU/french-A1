<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { speakFrench } from '@/composables/useSpeech'
import type { AlphabetLetter } from '@/types/course'

const props = defineProps<{
  letters: AlphabetLetter[]
}>()

const { t } = useI18n()
const mode = ref<'board' | 'quiz'>('board')
const target = ref(props.letters[0])
const choices = ref<AlphabetLetter[]>(props.letters.slice(0, 4))
const picked = ref<string | null>(null)
const score = ref(0)
const turns = ref(0)

function play(letter: AlphabetLetter) {
  speakFrench(letter.letter)
}

function makeChoices(current: AlphabetLetter) {
  const others = props.letters.filter((item) => item.letter !== current.letter)
  const mix = [current, ...others.sort(() => Math.random() - 0.5).slice(0, 3)]
  return mix.sort(() => Math.random() - 0.5)
}

function nextPrompt() {
  picked.value = null
  target.value = props.letters[Math.floor(Math.random() * props.letters.length)]
  choices.value = makeChoices(target.value)
  speakFrench(target.value.letter)
}

function startQuiz() {
  mode.value = 'quiz'
  score.value = 0
  turns.value = 0
  nextPrompt()
}

function choose(letter: string) {
  if (picked.value) return
  picked.value = letter
  turns.value += 1
  if (letter === target.value.letter) score.value += 1
}

function cellClass(letter: string) {
  if (!picked.value) return 'surface'
  if (letter === target.value.letter) return 'surface surface-good'
  if (picked.value === letter) return 'surface surface-bad'
  return 'surface'
}

watch(
  () => props.letters,
  () => {
    target.value = props.letters[0]
  },
)
</script>

<template>
  <div class="grid gap-4">
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-secondary" type="button" @click="mode = 'board'">{{ t('activity.hearLetter') }}</button>
      <button class="btn btn-primary" type="button" @click="startQuiz">{{ t('activity.quizLetter') }}</button>
    </div>

    <div v-if="mode === 'board'" class="grid grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] gap-2">
      <button
        v-for="letter in letters"
        :key="letter.letter"
        type="button"
        class="surface grid min-h-[4.5rem] gap-0.5 p-2"
        @click="play(letter)"
      >
        <b class="font-serif text-[1.4rem]">{{ letter.letter }}</b>
        <small class="text-ink-soft">{{ letter.example }}</small>
      </button>
    </div>

    <div v-else class="card grid gap-3 p-5">
      <p class="kicker">{{ score }} / {{ turns }}</p>
      <h3 class="m-0">{{ t('activity.quizLetter') }}</h3>
      <button class="btn btn-ghost w-fit" type="button" @click="speakFrench(target.letter)">{{ t('activity.replay') }}</button>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] gap-2">
        <button
          v-for="option in choices"
          :key="option.letter"
          type="button"
          class="grid min-h-[4.5rem] p-2"
          :class="cellClass(option.letter)"
          @click="choose(option.letter)"
        >
          <b class="font-serif text-[1.4rem]">{{ option.letter }}</b>
        </button>
      </div>
      <button v-if="picked" class="btn btn-primary w-fit" type="button" @click="nextPrompt">{{ t('app.next') }}</button>
    </div>
  </div>
</template>
