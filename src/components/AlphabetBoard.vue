<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { speakFrench } from '@/composables/useSpeech'
import WordHint from '@/components/WordHint.vue'
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
const isCorrect = computed(() => picked.value === target.value.letter)

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
  if (letter === target.value.letter) {
    score.value += 1
  }
  speakFrench(target.value.letter)
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
    <img src="/images/topics/notebook.jpg" alt="A notebook" class="photo-scene mb-0 h-36 sm:h-44" />
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-secondary" type="button" @click="mode = 'board'">{{ t('activity.hearLetter') }}</button>
      <button class="btn btn-primary" type="button" @click="startQuiz">{{ t('activity.quizLetter') }}</button>
    </div>

    <div v-if="mode === 'board'" class="grid gap-1.5">
      <div class="flex justify-center gap-1.5">
        <button
          v-for="letter in letters.slice(0, 13)"
          :key="letter.letter"
          type="button"
          class="surface grid h-[4.6rem] min-w-0 flex-1 place-items-center content-center gap-0 px-1 text-center"
          @click="play(letter)"
        >
          <b class="font-serif text-[1.35rem] leading-none">{{ letter.letter }}</b>
          <small class="max-w-full truncate text-[0.68rem] leading-tight text-ink-soft">
            <WordHint :text="letter.example" source="fr" />
          </small>
        </button>
      </div>
      <div class="flex justify-center gap-1.5">
        <button
          v-for="letter in letters.slice(13)"
          :key="letter.letter"
          type="button"
          class="surface grid h-[4.6rem] min-w-0 flex-1 place-items-center content-center gap-0 px-1 text-center"
          @click="play(letter)"
        >
          <b class="font-serif text-[1.35rem] leading-none">{{ letter.letter }}</b>
          <small class="max-w-full truncate text-[0.68rem] leading-tight text-ink-soft">
            <WordHint :text="letter.example" source="fr" />
          </small>
        </button>
      </div>
    </div>

    <div v-else class="card grid gap-3 p-5">
      <p class="kicker">{{ score }} / {{ turns }}</p>
      <h3 class="m-0">{{ t('activity.quizLetter') }}</h3>
      <button class="btn btn-ghost w-fit" type="button" @click="speakFrench(target.letter)">{{ t('activity.replay') }}</button>
      <div class="flex flex-wrap justify-center gap-2">
        <button
          v-for="option in choices"
          :key="option.letter"
          type="button"
          class="relative grid size-[4.6rem] place-items-center text-center"
          :class="cellClass(option.letter)"
          :aria-pressed="picked === option.letter"
          @click="choose(option.letter)"
        >
          <b class="font-serif text-[1.4rem] leading-none">{{ option.letter }}</b>
          <span
            v-if="picked && option.letter === target.letter"
            class="absolute bottom-1 text-sm font-bold leading-none text-pine-deep"
          >✓</span>
          <span
            v-else-if="picked === option.letter"
            class="absolute bottom-1 text-sm font-bold leading-none text-terracotta"
          >✗</span>
        </button>
      </div>
      <p
        v-if="picked"
        class="m-0 text-center text-lg font-bold"
        :class="isCorrect ? 'text-pine-deep' : 'text-terracotta'"
        role="status"
        aria-live="polite"
      >
        {{ isCorrect ? t('activity.correct') : t('activity.incorrect') }}
        <span v-if="!isCorrect">{{ t('activity.answerWas', { letter: target.letter }) }}</span>
      </p>
      <button v-if="picked" class="btn btn-primary mx-auto w-fit" type="button" @click="nextPrompt">{{ t('app.next') }}</button>
    </div>
  </div>
</template>
