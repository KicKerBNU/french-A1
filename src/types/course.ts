export type Locale = 'en-US' | 'fr-FR'

export type ActivityType =
  | 'flashcards'
  | 'quiz'
  | 'dialogue'
  | 'matching'
  | 'alphabet'
  | 'listen'
  | 'greetings-map'
  | 'spell'

export interface Labeled {
  fr: string
  en: string
}

export interface ExtraSection {
  id: string
  title: string
  titleEn: string
  afterUnit: number
  available: boolean
  to?: string
}

export interface UnitMeta {
  id: number
  slug: string
  title: string
  titleEn: string
  page: number
  available: boolean
  accent: string
  hub?: 'resources'
  blurb: Labeled
  culture: Labeled[]
  vocabulary: Labeled[]
  interactions: Labeled[]
  grammar: Labeled[]
  phonetics: Labeled[]
  dailyLife: Labeled[]
  project: Labeled | null
}

export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'note' | 'examples'
  title?: Labeled
  text?: Labeled
  items?: Labeled[]
}

export interface VocabItem {
  id: string
  fr: string
  en: string
  ipa?: string
  exampleFr?: string
  exampleEn?: string
}

export interface QuizQuestion {
  id: string
  prompt: Labeled
  options: Labeled[]
  answer: number
  explanation: Labeled
}

export interface DialogueLine {
  speaker: string
  fr: string
  en: string
}

export interface Dialogue {
  id: string
  title: Labeled
  context: Labeled
  lines: DialogueLine[]
}

export interface MatchPair {
  id: string
  left: string
  right: string
}

export interface AlphabetLetter {
  letter: string
  example: string
  exampleEn: string
}

export interface GreetingPin {
  id: string
  greeting: string
  region: Labeled
  when: Labeled
  x: number
  y: number
}

export interface SpellTarget {
  id: string
  name: string
  hint: Labeled
}

export interface ActivityAudio {
  src: string
  title: Labeled
  hint?: Labeled
}

export interface Activity {
  id: string
  type: ActivityType
  title: Labeled
  intro?: Labeled
  audio?: ActivityAudio
  items?: VocabItem[]
  questions?: QuizQuestion[]
  dialogue?: Dialogue
  pairs?: MatchPair[]
  letters?: AlphabetLetter[]
  pins?: GreetingPin[]
  spellNames?: SpellTarget[]
}

export interface Lesson {
  id: string
  unitId: number
  number: number
  title: Labeled
  summary: Labeled
  blocks: ContentBlock[]
  activities: Activity[]
}
