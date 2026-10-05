<script setup lang="ts">
import { computed, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AudioPlayer from '@/components/AudioPlayer.vue'
import AlphabetBoard from '@/components/AlphabetBoard.vue'
import DialoguePlayer from '@/components/DialoguePlayer.vue'
import FlashcardDeck from '@/components/FlashcardDeck.vue'
import ListenRepeat from '@/components/ListenRepeat.vue'
import MatchingGame from '@/components/MatchingGame.vue'
import QuizPlayer from '@/components/QuizPlayer.vue'
import SpellName from '@/components/SpellName.vue'
import WorldGreetings from '@/components/WorldGreetings.vue'
import WordHint from '@/components/WordHint.vue'
import { getUnitBySlug, units as courseUnits } from '@/content/course'
import { stopSpeech } from '@/composables/useSpeech'
import { imageForTextOrUnit, kindEmoji } from '@/content/visuals'
import { getActivity, getLessonsForUnit, getNextActivity } from '@/content/units'
import { useProgressStore } from '@/stores/progress'
import type { Locale } from '@/types/course'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const unit = computed(() => getUnitBySlug(String(route.params.slug)))
const packed = computed(() =>
  unit.value
    ? getActivity(unit.value.id, String(route.params.lessonId), String(route.params.activityId))
    : undefined,
)
const scene = computed(() => {
  if (!unit.value || !packed.value) return undefined
  const activity = packed.value.activity
  return imageForTextOrUnit(
    unit.value.id,
    activity.title.fr,
    activity.title.en,
    activity.intro?.fr,
    activity.items?.[0]?.fr,
    activity.questions?.[0]?.prompt.fr,
    activity.dialogue?.context.fr,
    activity.pairs?.[0]?.left,
  )
})
const nextPacked = computed(() => {
  if (!unit.value || !packed.value) return undefined
  return getNextActivity(unit.value.id, packed.value.lesson.id, packed.value.activity.id)
})

watch(
  packed,
  (value) => {
    if (unit.value && value) {
      progress.rememberPlace(unit.value.id, value.lesson.id, value.activity.id)
    }
  },
  { immediate: true },
)

function markComplete() {
  if (!packed.value) return
  progress.markDone(packed.value.activity.id)
}

const goesToAnotherActivity = computed(() => {
  if (nextPacked.value) return true
  if (!unit.value || unit.value.hub === 'resources') return false
  const nextUnit = courseUnits.find((item) => item.id === unit.value!.id + 1 && item.available)
  return Boolean(nextUnit && getLessonsForUnit(nextUnit.id)[0]?.activities[0])
})

function continuePath() {
  if (!unit.value || !packed.value) return `/units/${unit.value?.slug ?? 'tour-du-monde'}`
  if (nextPacked.value) {
    return `/units/${unit.value.slug}/${nextPacked.value.lesson.id}/${nextPacked.value.activity.id}`
  }
  if (unit.value.hub === 'resources') return '/resources'
  const nextUnit = courseUnits.find((item) => item.id === unit.value!.id + 1 && item.available)
  if (nextUnit) {
    const firstLesson = getLessonsForUnit(nextUnit.id)[0]
    const firstActivity = firstLesson?.activities[0]
    if (firstLesson && firstActivity) {
      return `/units/${nextUnit.slug}/${firstLesson.id}/${firstActivity.id}`
    }
    return `/units/${nextUnit.slug}`
  }
  return `/units/${unit.value.slug}`
}

function completeAndContinue() {
  markComplete()
  stopSpeech()
  void router.push(continuePath())
}

const continueLabel = computed(() => {
  if (!packed.value) return t('activity.complete')
  if (!progress.isDone(packed.value.activity.id)) return t('activity.complete')
  return goesToAnotherActivity.value ? t('activity.next') : t('activity.unitDone')
})
</script>

<template>
  <main v-if="unit && packed && scene" class="page">
    <RouterLink class="btn btn-ghost" :to="`/units/${unit.slug}/${packed.lesson.id}`">
      ← <WordHint :text="progress.labelFor(lang, packed.lesson.title)" />
    </RouterLink>

    <section class="photo-card relative mb-6 overflow-hidden">
      <img :src="scene.src" :alt="scene.alt" class="h-44 w-full object-cover sm:h-56" />
      <div class="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/20 to-transparent" />
      <div class="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5 text-cream">
        <span class="kind-pill bg-cream/15 text-cream">{{ kindEmoji[packed.activity.type] ?? '▶' }}</span>
        <div>
          <p class="kicker mb-1 text-gold">{{ t(`activity.kind.${packed.activity.type}`) }}</p>
          <h1 class="m-0 font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-cream">
            <WordHint :text="progress.labelFor(lang, packed.activity.title)" />
          </h1>
        </div>
      </div>
    </section>

    <div :key="packed.activity.id">
      <p v-if="packed.activity.intro" class="lead">
        <WordHint :text="progress.labelFor(lang, packed.activity.intro)" />
      </p>
      <AudioPlayer v-if="packed.activity.audio" :audio="packed.activity.audio" />

      <FlashcardDeck
        v-if="packed.activity.type === 'flashcards' && packed.activity.items"
        :items="packed.activity.items"
        :unit-id="unit.id"
      />
      <QuizPlayer
        v-else-if="packed.activity.type === 'quiz' && packed.activity.questions"
        :questions="packed.activity.questions"
        :unit-id="unit.id"
        @finished="markComplete"
      />
      <DialoguePlayer v-else-if="packed.activity.type === 'dialogue' && packed.activity.dialogue" :dialogue="packed.activity.dialogue" />
      <MatchingGame
        v-else-if="packed.activity.type === 'matching' && packed.activity.pairs"
        :pairs="packed.activity.pairs"
        :assign-any="packed.activity.matchStyle === 'assign'"
        @finished="markComplete"
      />
      <AlphabetBoard v-else-if="packed.activity.type === 'alphabet' && packed.activity.letters" :letters="packed.activity.letters" />
      <ListenRepeat
        v-else-if="packed.activity.type === 'listen' && packed.activity.items"
        :items="packed.activity.items"
        :unit-id="unit.id"
      />
      <WorldGreetings v-else-if="packed.activity.type === 'greetings-map' && packed.activity.pins" :pins="packed.activity.pins" />
      <SpellName
        v-else-if="packed.activity.type === 'spell' && packed.activity.spellNames"
        :names="packed.activity.spellNames"
        @finished="markComplete"
      />
    </div>

    <div class="mt-7">
      <button class="btn btn-primary" type="button" @click="completeAndContinue">
        {{ continueLabel }}
      </button>
    </div>
  </main>
  <main v-else class="page">
    <RouterLink class="btn btn-ghost" to="/units/tour-du-monde">← Unité 0</RouterLink>
    <p class="muted">{{ t('unit.lockedHint') }}</p>
  </main>
</template>
