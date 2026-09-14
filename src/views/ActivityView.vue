<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
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
import { getUnitBySlug } from '@/content/course'
import { getActivity } from '@/content/units'
import { useProgressStore } from '@/stores/progress'
import type { Locale } from '@/types/course'

const route = useRoute()
const { t, locale } = useI18n()
const progress = useProgressStore()
const lang = computed(() => locale.value as Locale)
const unit = computed(() => getUnitBySlug(String(route.params.slug)))
const packed = computed(() =>
  unit.value
    ? getActivity(unit.value.id, String(route.params.lessonId), String(route.params.activityId))
    : undefined,
)

if (unit.value && packed.value) {
  progress.rememberPlace(unit.value.id, packed.value.lesson.id, packed.value.activity.id)
}

function complete() {
  if (!packed.value) return
  progress.markDone(packed.value.activity.id)
}
</script>

<template>
  <main v-if="unit && packed" class="page">
    <RouterLink class="btn btn-ghost" :to="`/units/${unit.slug}/${packed.lesson.id}`">
      ← {{ progress.labelFor(lang, packed.lesson.title) }}
    </RouterLink>
    <p class="kicker">{{ t(`activity.kind.${packed.activity.type}`) }}</p>
    <h1 class="title-lg mb-2.5">{{ progress.labelFor(lang, packed.activity.title) }}</h1>
    <p v-if="packed.activity.intro" class="lead">{{ progress.labelFor(lang, packed.activity.intro) }}</p>
    <AudioPlayer v-if="packed.activity.audio" :audio="packed.activity.audio" />

    <FlashcardDeck v-if="packed.activity.type === 'flashcards' && packed.activity.items" :items="packed.activity.items" />
    <QuizPlayer
      v-else-if="packed.activity.type === 'quiz' && packed.activity.questions"
      :questions="packed.activity.questions"
      @finished="complete"
    />
    <DialoguePlayer v-else-if="packed.activity.type === 'dialogue' && packed.activity.dialogue" :dialogue="packed.activity.dialogue" />
    <MatchingGame
      v-else-if="packed.activity.type === 'matching' && packed.activity.pairs"
      :pairs="packed.activity.pairs"
      @finished="complete"
    />
    <AlphabetBoard v-else-if="packed.activity.type === 'alphabet' && packed.activity.letters" :letters="packed.activity.letters" />
    <ListenRepeat v-else-if="packed.activity.type === 'listen' && packed.activity.items" :items="packed.activity.items" />
    <WorldGreetings v-else-if="packed.activity.type === 'greetings-map' && packed.activity.pins" :pins="packed.activity.pins" />
    <SpellName
      v-else-if="packed.activity.type === 'spell' && packed.activity.spellNames"
      :names="packed.activity.spellNames"
      @finished="complete"
    />

    <div class="mt-7">
      <button class="btn btn-primary" type="button" @click="complete">
        {{ progress.isDone(packed.activity.id) ? t('activity.completed') : t('activity.complete') }}
      </button>
    </div>
  </main>
  <main v-else class="page">
    <RouterLink class="btn btn-ghost" to="/units/tour-du-monde">← Unité 0</RouterLink>
    <p class="muted">{{ t('unit.lockedHint') }}</p>
  </main>
</template>
