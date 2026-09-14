<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SpeakButton from '@/components/SpeakButton.vue'
import type { ContentBlock, Locale } from '@/types/course'

const props = defineProps<{
  blocks: ContentBlock[]
}>()

const { locale } = useI18n()
const lang = computed(() => locale.value as Locale)

function text(labeled?: { fr: string; en: string }) {
  if (!labeled) return ''
  return lang.value === 'fr-FR' ? labeled.fr : labeled.en
}
</script>

<template>
  <div class="grid gap-3.5">
    <template v-for="(block, index) in blocks" :key="index">
      <h3 v-if="block.type === 'heading'" class="mt-2 mb-0 text-[1.4rem]">{{ text(block.title) }}</h3>
      <p v-else-if="block.type === 'paragraph'" class="m-0 muted">{{ text(block.text) }}</p>
      <aside v-else-if="block.type === 'note'" class="rounded-r-2xl border-l-[3px] border-gold bg-gold/10 px-4 py-4">
        <strong>{{ text(block.title) }}</strong>
        <p class="mt-1.5 mb-0">{{ text(block.text) }}</p>
      </aside>
      <ul v-else-if="block.type === 'examples'" class="m-0 grid list-none gap-2 p-0">
        <li
          v-for="item in block.items"
          :key="item.fr"
          class="grid gap-3 rounded-2xl bg-cream/80 p-3 shadow-[inset_0_0_0_1px_var(--color-line)] sm:grid-cols-[1.2fr_1fr]"
        >
          <span class="flex items-center justify-between gap-2 font-bold">
            {{ item.fr }}
            <SpeakButton :text="item.fr" />
          </span>
          <span class="text-[0.92rem] text-ink-soft">{{ item.en }}</span>
        </li>
      </ul>
    </template>
  </div>
</template>
