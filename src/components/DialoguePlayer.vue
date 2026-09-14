<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AvatarChip from '@/components/AvatarChip.vue'
import SpeakButton from '@/components/SpeakButton.vue'
import { avatarFor } from '@/content/visuals'
import { useProgressStore } from '@/stores/progress'
import type { Dialogue, Locale } from '@/types/course'

const props = defineProps<{
  dialogue: Dialogue
}>()

const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const step = ref(0)
const pool = ref(shuffle(props.dialogue.lines.map((_, i) => i)))
const built = ref<number[]>([])

function shuffle<T>(list: T[]) {
  return [...list].sort(() => Math.random() - 0.5)
}

function pick(lineIndex: number) {
  built.value.push(lineIndex)
  pool.value = pool.value.filter((item) => item !== lineIndex)
}

function reset() {
  built.value = []
  pool.value = shuffle(props.dialogue.lines.map((_, i) => i))
}

const ordered = computed(
  () => built.value.every((value, index) => value === index) && built.value.length === props.dialogue.lines.length,
)
</script>

<template>
  <div class="grid gap-4">
    <p class="muted">{{ progress.labelFor(lang, dialogue.context) }}</p>
    <ol class="m-0 grid list-none gap-2.5 p-0">
      <li v-for="line in dialogue.lines.slice(0, step + 1)" :key="line.fr" class="surface flex items-start gap-3 p-3.5">
        <AvatarChip :src="avatarFor(line.speaker).src" :alt="avatarFor(line.speaker).alt" :name="line.speaker" />
        <div class="min-w-0 flex-1">
          <span class="text-xs font-extrabold text-gold-deep">{{ line.speaker }}</span>
          <strong class="mt-0.5 flex items-center gap-2">{{ line.fr }} <SpeakButton :text="line.fr" /></strong>
          <small v-if="progress.state.showEnglish" class="mt-1 block text-ink-soft">{{ line.en }}</small>
        </div>
      </li>
    </ol>
    <button v-if="step < dialogue.lines.length - 1" class="btn btn-primary w-fit" type="button" @click="step += 1">
      {{ t('app.next') }}
    </button>

    <section v-if="step === dialogue.lines.length - 1" class="card grid gap-3 p-5">
      <h3 class="m-0">{{ t('activity.order') }}</h3>
      <div class="grid gap-2">
        <button
          v-for="(lineIndex, i) in built"
          :key="`${lineIndex}-${i}`"
          class="flex items-center gap-2 rounded-xl bg-pine/10 px-3 py-2.5 text-left"
          type="button"
          disabled
        >
          <AvatarChip
            :src="avatarFor(dialogue.lines[lineIndex].speaker).src"
            :alt="avatarFor(dialogue.lines[lineIndex].speaker).alt"
            size="sm"
          />
          {{ dialogue.lines[lineIndex].fr }}
        </button>
      </div>
      <div class="grid gap-2">
        <button
          v-for="lineIndex in pool"
          :key="lineIndex"
          class="surface flex items-center gap-2 px-3 py-2.5"
          type="button"
          @click="pick(lineIndex)"
        >
          <AvatarChip
            :src="avatarFor(dialogue.lines[lineIndex].speaker).src"
            :alt="avatarFor(dialogue.lines[lineIndex].speaker).alt"
            size="sm"
          />
          {{ dialogue.lines[lineIndex].fr }}
        </button>
      </div>
      <p v-if="ordered" class="m-0 font-bold text-pine-deep">{{ t('activity.correct') }}</p>
      <button class="btn btn-secondary w-fit" type="button" @click="reset">{{ t('activity.reset') }}</button>
    </section>
  </div>
</template>
