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
import { imageForTextOrUnit, kindEmoji } from '@/content/visuals'
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

if (unit.value && packed.value) {
  progress.rememberPlace(unit.value.id, packed.value.lesson.id, packed.value.activity.id)
}

function complete() {
  if (!packed.value) return
  progress.markDone(packed.value.activity.id)
}
</script>

<template>
  <main v-if="unit && packed && scene" class="page">
    <RouterLink class="btn btn-ghost" :to="`/units/${unit.slug}/${packed.lesson.id}`">
      ← {{ progress.labelFor(lang, packed.lesson.title) }}
    </RouterLink>

    <section class="photo-card relative mb-6 overflow-hidden">
      <img :src="scene.src" :alt="scene.alt" class="h-44 w-full object-cover sm:h-56" />
      <div class="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/20 to-transparent" />
      <div class="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5 text-cream">
        <span class="kind-pill bg-cream/15 text-cream">{{ kindEmoji[packed.activity.type] ?? '▶' }}</span>
        <div>
          <p class="kicker mb-1 text-gold">{{ t(`activity.kind.${packed.activity.type}`) }}</p>
          <h1 class="m-0 font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-cream">
            {{ progress.labelFor(lang, packed.activity.title) }}
          </h1>
        </div>
      </div>
    </section>

    <p v-if="packed.activity.intro" class="lead">{{ progress.labelFor(lang, packed.activity.intro) }}</p>
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
      @finished="complete"
    />
    <DialoguePlayer v-else-if="packed.activity.type === 'dialogue' && packed.activity.dialogue" :dialogue="packed.activity.dialogue" />
    <MatchingGame
      v-else-if="packed.activity.type === 'matching' && packed.activity.pairs"
      :pairs="packed.activity.pairs"
      @finished="complete"
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
