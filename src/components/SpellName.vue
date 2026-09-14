<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SpeakButton from '@/components/SpeakButton.vue'
import { speakFrench } from '@/composables/useSpeech'
import { useProgressStore } from '@/stores/progress'
import type { Locale, SpellTarget } from '@/types/course'

const props = defineProps<{
  names: SpellTarget[]
}>()

const emit = defineEmits<{
  finished: []
}>()

const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const index = ref(0)
const typed = ref('')
const ok = ref(false)

const current = computed(() => props.names[index.value])
const target = computed(() =>
  current.value.name
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toUpperCase()
    .replace(/[^A-Z]/g, ''),
)
const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function press(letter: string) {
  if (ok.value) return
  typed.value += letter
  if (typed.value === target.value) {
    ok.value = true
    speakFrench(current.value.name)
    if (index.value === props.names.length - 1) emit('finished')
  }
}

function clear() {
  typed.value = ''
  ok.value = false
}

function next() {
  if (index.value < props.names.length - 1) {
    index.value += 1
    clear()
  }
}
</script>

<template>
  <div class="grid gap-3">
    <p class="kicker">{{ index + 1 }} / {{ names.length }}</p>
    <h3 class="m-0 flex items-center gap-2 text-[1.8rem]">
      {{ current.name }} <SpeakButton :text="current.name" />
    </h3>
    <p class="muted">{{ progress.labelFor(lang, current.hint) }}</p>
    <p class="m-0 min-h-12 rounded-2xl bg-cream px-3 py-3 font-extrabold tracking-[0.18em]">{{ typed || '—' }}</p>
    <p v-if="ok" class="m-0 font-bold text-pine-deep">{{ t('activity.spellDone') }}</p>
    <div class="grid grid-cols-9 gap-1.5 md:grid-cols-[repeat(13,minmax(0,1fr))]">
      <button
        v-for="letter in keys"
        :key="letter"
        type="button"
        class="surface min-h-11 font-extrabold"
        @click="press(letter)"
      >
        {{ letter }}
      </button>
    </div>
    <div class="flex gap-2">
      <button class="btn btn-secondary" type="button" @click="clear">{{ t('activity.spellClear') }}</button>
      <button v-if="ok && index < names.length - 1" class="btn btn-primary" type="button" @click="next">
        {{ t('activity.spellNext') }}
      </button>
    </div>
  </div>
</template>
