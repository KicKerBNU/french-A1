import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { units } from '@/content/course'
import { getAllActivitiesForUnit, getLessonsForUnit } from '@/content/units'
import type { Locale } from '@/types/course'

export const PROGRESS_STORAGE_KEY = 'premiers-pas-progress'

const COURSE_UNIT_IDS = units.filter((unit) => unit.hub !== 'resources').map((unit) => unit.id)

interface ProgressState {
  completed: string[]
  lastUnitId: number | null
  lastLessonId: string | null
  lastActivityId: string | null
  showEnglish: boolean
}

function blank(): ProgressState {
  return {
    completed: [],
    lastUnitId: null,
    lastLessonId: null,
    lastActivityId: null,
    showEnglish: true,
  }
}

function canUseStorage() {
  try {
    return typeof localStorage !== 'undefined'
  } catch {
    return false
  }
}

function asProgress(value: unknown): ProgressState | null {
  if (!value || typeof value !== 'object') return null
  const record = value as Record<string, unknown>
  const nested = record.state
  const source =
    Array.isArray(record.completed) ? record : nested && typeof nested === 'object' ? (nested as Record<string, unknown>) : null
  if (!source) return null
  const completed = Array.isArray(source.completed)
    ? [...new Set(source.completed.filter((id): id is string => typeof id === 'string' && id.length > 0))]
    : []
  return {
    completed,
    lastUnitId: typeof source.lastUnitId === 'number' ? source.lastUnitId : null,
    lastLessonId: typeof source.lastLessonId === 'string' ? source.lastLessonId : null,
    lastActivityId: typeof source.lastActivityId === 'string' ? source.lastActivityId : null,
    showEnglish: source.showEnglish !== false,
  }
}

function snapshot(value: ProgressState): ProgressState {
  return {
    completed: [...value.completed],
    lastUnitId: value.lastUnitId,
    lastLessonId: value.lastLessonId,
    lastActivityId: value.lastActivityId,
    showEnglish: value.showEnglish,
  }
}

export function loadProgress(): ProgressState {
  if (!canUseStorage()) return blank()
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY)
    if (!raw) return blank()
    return asProgress(JSON.parse(raw)) ?? blank()
  } catch {
    return blank()
  }
}

export function saveProgress(value: ProgressState) {
  if (!canUseStorage()) return
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(snapshot(value)))
  } catch {
    // Private mode and full quotas should not break study.
  }
}

export function persistPiniaProgress(piniaState: unknown) {
  const parsed = asProgress(piniaState)
  if (parsed) saveProgress(parsed)
}

let storageBound = false

export const useProgressStore = defineStore('progress', () => {
  const initial = loadProgress()
  const completed = ref<string[]>(initial.completed)
  const lastUnitId = ref<number | null>(initial.lastUnitId)
  const lastLessonId = ref<string | null>(initial.lastLessonId)
  const lastActivityId = ref<string | null>(initial.lastActivityId)
  const showEnglish = ref(initial.showEnglish)

  const state = computed(() => ({
    completed: completed.value,
    lastUnitId: lastUnitId.value,
    lastLessonId: lastLessonId.value,
    lastActivityId: lastActivityId.value,
    showEnglish: showEnglish.value,
  }))

  function persist() {
    saveProgress(state.value)
  }

  watch([completed, lastUnitId, lastLessonId, lastActivityId, showEnglish], persist, {
    deep: true,
    flush: 'sync',
  })

  function hydrate() {
    const loaded = loadProgress()
    completed.value = loaded.completed
    lastUnitId.value = loaded.lastUnitId
    lastLessonId.value = loaded.lastLessonId
    lastActivityId.value = loaded.lastActivityId
    showEnglish.value = loaded.showEnglish
  }

  if (typeof window !== 'undefined' && !storageBound) {
    storageBound = true
    window.addEventListener('storage', (event) => {
      if (event.key === PROGRESS_STORAGE_KEY) useProgressStore().hydrate()
    })
  }

  const completedSet = computed(() => new Set(completed.value))

  function isDone(activityId: string) {
    return completedSet.value.has(activityId)
  }

  function markDone(activityId: string) {
    if (!activityId || completed.value.includes(activityId)) {
      persist()
      return
    }
    completed.value = [...completed.value, activityId]
    persist()
  }

  function rememberPlace(unitId: number, lessonId: string, activityId: string) {
    lastUnitId.value = unitId
    lastLessonId.value = lessonId
    lastActivityId.value = activityId
    persist()
  }

  function unitProgress(unitId: number) {
    const activities = getAllActivitiesForUnit(unitId)
    if (activities.length === 0) return 0
    const done = activities.filter((activity) => isDone(activity.id)).length
    return Math.round((done / activities.length) * 100)
  }

  function lessonProgress(unitId: number, lessonId: string) {
    const lesson = getLessonsForUnit(unitId).find((item) => item.id === lessonId)
    if (!lesson || lesson.activities.length === 0) return 0
    const done = lesson.activities.filter((activity) => isDone(activity.id)).length
    return Math.round((done / lesson.activities.length) * 100)
  }

  function overallProgress() {
    const activities = COURSE_UNIT_IDS.flatMap((id) => getAllActivitiesForUnit(id))
    if (activities.length === 0) return 0
    const done = activities.filter((activity) => isDone(activity.id)).length
    if (done === 0) return 0
    return Math.max(1, Math.round((done / activities.length) * 100))
  }

  function labelFor(locale: Locale, labeled: { fr: string; en: string }) {
    return locale === 'fr-FR' ? labeled.fr : labeled.en
  }

  return {
    completed,
    lastUnitId,
    lastLessonId,
    lastActivityId,
    showEnglish,
    state,
    isDone,
    markDone,
    rememberPlace,
    hydrate,
    unitProgress,
    lessonProgress,
    overallProgress,
    labelFor,
  }
})
