import { extraFrenchToEnglish } from '@/content/extraWords'
import { coreFrenchToEnglish } from '@/content/coreWords'
import { resourceBanks, units } from '@/content/course'
import { getAllLessons } from '@/content/units'
import type { Activity, ContentBlock, Labeled, Lesson } from '@/types/course'

export type HintSource = 'fr' | 'en'

export interface HintPart {
  text: string
  hint?: string
  source?: HintSource
}

const frToEn = new Map<string, string>()
const enToFr = new Map<string, string>()
let maxFrWords = 1
let maxEnWords = 1

export function normalizeHint(value: string) {
  return value
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/'/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ')
}

function remember(map: Map<string, string>, key: string, value: string, maxRef: { n: number }) {
  const normalised = normalizeHint(key)
  if (!normalised || normalised.length > 80) return
  const wordCount = normalised.split(' ').length
  if (wordCount > 4) return
  if (!map.has(normalised)) map.set(normalised, value.trim())
  maxRef.n = Math.max(maxRef.n, wordCount)
}

function addPair(fr: string, en: string) {
  const french = fr.trim()
  const english = en.trim()
  if (!french || !english) return
  const frMax = { n: maxFrWords }
  const enMax = { n: maxEnWords }
  remember(frToEn, french, english, frMax)
  remember(enToFr, english, french, enMax)
  maxFrWords = frMax.n
  maxEnWords = enMax.n
  for (const chunk of french.split(/\s*[/,;≠]+\s*/)) {
    if (chunk && chunk !== french && chunk.split(/\s+/).length <= 4) {
      remember(frToEn, chunk, english, frMax)
      maxFrWords = frMax.n
    }
  }
}

function addLabeled(item?: Labeled) {
  if (!item) return
  addPair(item.fr, item.en)
}

function harvestBlock(block: ContentBlock) {
  addLabeled(block.title)
  addLabeled(block.text)
  block.items?.forEach(addLabeled)
}

function harvestActivity(activity: Activity) {
  addLabeled(activity.title)
  addLabeled(activity.intro)
  addLabeled(activity.audio?.title)
  addLabeled(activity.audio?.hint)
  activity.items?.forEach((item) => {
    addPair(item.fr, item.en)
    if (item.exampleFr && item.exampleEn) addPair(item.exampleFr, item.exampleEn)
  })
  activity.questions?.forEach((question) => {
    addLabeled(question.prompt)
    question.options.forEach(addLabeled)
    addLabeled(question.explanation)
  })
  if (activity.dialogue) {
    addLabeled(activity.dialogue.title)
    addLabeled(activity.dialogue.context)
    activity.dialogue.lines.forEach((line) => addPair(line.fr, line.en))
  }
  activity.letters?.forEach((letter) => addPair(letter.example, letter.exampleEn))
  activity.pins?.forEach((pin) => {
    addLabeled(pin.region)
    addLabeled(pin.when)
  })
  activity.spellNames?.forEach((item) => addLabeled(item.hint))
}

function harvestLesson(lesson: Lesson) {
  addLabeled(lesson.title)
  addLabeled(lesson.summary)
  lesson.blocks.forEach(harvestBlock)
  lesson.activities.forEach(harvestActivity)
}

function harvestCourse() {
  for (const unit of [...units, ...resourceBanks]) {
    addPair(unit.title, unit.titleEn)
    addLabeled(unit.blurb)
    unit.culture.forEach(addLabeled)
    unit.vocabulary.forEach(addLabeled)
    unit.interactions.forEach(addLabeled)
    unit.grammar.forEach(addLabeled)
    unit.phonetics.forEach(addLabeled)
    unit.dailyLife.forEach(addLabeled)
    if (unit.project) addLabeled(unit.project)
  }
  getAllLessons().forEach(harvestLesson)
}

for (const [fr, en] of Object.entries(coreFrenchToEnglish)) addPair(fr, en)
for (const [fr, en] of Object.entries(extraFrenchToEnglish)) addPair(fr, en)
harvestCourse()

const tokenPattern = /([A-Za-zÀ-ÿŒœÆæ]+(?:['’][A-Za-zÀ-ÿŒœÆæ]+)?)|([^A-Za-zÀ-ÿŒœÆæ]+)/g

function lookup(raw: string, source: HintSource): string | undefined {
  const keys = [normalizeHint(raw)]
  const stripped = keys[0].replace(/^(l|d|j|n|m|t|s|c|qu)(?=[a-z])/, '')
  if (stripped && stripped !== keys[0]) keys.push(stripped)
  const map = source === 'fr' ? frToEn : enToFr
  for (const key of keys) {
    const hit = map.get(key)
    if (hit) return hit
  }
  return undefined
}

function joinWords(tokens: string[], from: number, count: number) {
  let seen = 0
  let end = from
  const parts: string[] = []
  for (let i = from; i < tokens.length && seen < count; i += 1) {
    const token = tokens[i]
    if (!token) continue
    if (/^[A-Za-zÀ-ÿŒœÆæ]/.test(token)) {
      parts.push(token)
      seen += 1
      end = i
    } else if (parts.length === 0) {
      return null
    } else {
      parts.push(token)
      end = i
    }
  }
  if (seen < count) return null
  return { text: parts.join(''), end }
}

export function hintParts(text: string, prefer: HintSource | 'auto' = 'auto'): HintPart[] {
  if (!text) return []
  const tokens = text.match(tokenPattern)
  if (!tokens) return [{ text }]

  const parts: HintPart[] = []
  let index = 0
  while (index < tokens.length) {
    const token = tokens[index]
    if (!token || !/^[A-Za-zÀ-ÿŒœÆæ]/.test(token)) {
      parts.push({ text: token })
      index += 1
      continue
    }

    const order: HintSource[] = prefer === 'auto' ? ['fr', 'en'] : [prefer]
    let matched: HintPart | undefined
    let consumed = index

    for (const source of order) {
      const maxWords = Math.min(source === 'fr' ? maxFrWords : maxEnWords, 4)
      for (let count = maxWords; count >= 1; count -= 1) {
        const window = joinWords(tokens, index, count)
        if (!window) continue
        const hint = lookup(window.text, source)
        if (hint) {
          matched = { text: window.text, hint, source }
          consumed = window.end
          break
        }
      }
      if (matched) break
    }

    if (matched) {
      parts.push(matched)
      index = consumed + 1
    } else {
      parts.push({ text: token })
      index += 1
    }
  }
  return parts
}
