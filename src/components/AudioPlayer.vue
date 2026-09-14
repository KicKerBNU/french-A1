<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { stopSpeech } from '@/composables/useSpeech'
import { useProgressStore } from '@/stores/progress'
import type { ActivityAudio, Locale } from '@/types/course'

const props = defineProps<{
  audio: ActivityAudio
}>()

const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const el = ref<HTMLAudioElement | null>(null)
const playing = ref(false)
const current = ref(0)
const duration = ref(0)

const ratio = computed(() => (duration.value ? current.value / duration.value : 0))

function format(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

function toggle() {
  const node = el.value
  if (!node) return
  if (playing.value) {
    node.pause()
    return
  }
  stopSpeech()
  void node.play()
}

function replay() {
  const node = el.value
  if (!node) return
  node.currentTime = 0
  stopSpeech()
  void node.play()
}

function seek(event: Event) {
  const node = el.value
  const input = event.target as HTMLInputElement
  if (!node || !duration.value) return
  node.currentTime = Number(input.value) * duration.value
}

watch(
  () => props.audio.src,
  () => {
    playing.value = false
    current.value = 0
    duration.value = 0
  },
)

onBeforeUnmount(() => {
  el.value?.pause()
})
</script>

<template>
  <section class="card mb-6 grid gap-3.5 p-5">
    <audio
      ref="el"
      :src="audio.src"
      preload="metadata"
      @play="playing = true"
      @pause="playing = false"
      @ended="playing = false"
      @timeupdate="current = el?.currentTime ?? 0"
      @loadedmetadata="duration = el?.duration ?? 0"
    />
    <div>
      <p class="kicker">{{ t('activity.recording') }}</p>
      <h3 class="mb-1 text-xl">{{ progress.labelFor(lang, audio.title) }}</h3>
      <p v-if="audio.hint" class="muted">{{ progress.labelFor(lang, audio.hint) }}</p>
    </div>
    <div class="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:grid-cols-[auto_1fr_auto_auto]">
      <button
        class="grid size-11 place-items-center rounded-full bg-pine text-cream"
        type="button"
        :aria-label="playing ? t('activity.pause') : t('activity.play')"
        @click="toggle"
      >
        <svg v-if="!playing" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M8 5v14l11-7z" />
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z" />
        </svg>
      </button>
      <input
        class="w-full accent-pine"
        type="range"
        min="0"
        max="1"
        step="0.001"
        :value="ratio"
        :aria-label="t('activity.recording')"
        @input="seek"
      />
      <span class="text-sm font-bold tabular-nums text-ink-soft">{{ format(current) }} / {{ format(duration) }}</span>
      <button class="btn btn-secondary col-span-full sm:col-span-1" type="button" @click="replay">
        {{ t('activity.replay') }}
      </button>
    </div>
  </section>
</template>
