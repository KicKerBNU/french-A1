import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { getAllActivitiesForUnit, getLessonsForUnit } from '@/content/units'
import type { Locale } from '@/types/course'

const STORAGE_KEY = 'premiers-pas-progress'

interface ProgressState {
  completed: string[]
  lastUnitId: number | null
  lastLessonId: string | null
  lastActivityId: string | null
  showEnglish: boolean
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return {
        completed: [],
        lastUnitId: null,
        lastLessonId: null,
        lastActivityId: null,
        showEnglish: true,
      }
    }
    return JSON.parse(raw) as ProgressState
  } catch {
    return {
      completed: [],
      lastUnitId: null,
      lastLessonId: null,
      lastActivityId: null,
      showEnglish: true,
    }
  }
}

export const useProgressStore = defineStore('progress', () => {
  const state = ref<ProgressState>(load())

  watch(
    state,
    (value) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    },
    { deep: true },
  )

  const completedSet = computed(() => new Set(state.value.completed))

  function isDone(activityId: string) {
    return completedSet.value.has(activityId)
  }

  function markDone(activityId: string) {
    if (!state.value.completed.includes(activityId)) {
      state.value.completed.push(activityId)
    }
  }

  function rememberPlace(unitId: number, lessonId: string, activityId: string) {
    state.value.lastUnitId = unitId
    state.value.lastLessonId = lessonId
    state.value.lastActivityId = activityId
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

  function labelFor(locale: Locale, labeled: { fr: string; en: string }) {
    return locale === 'fr-FR' ? labeled.fr : labeled.en
  }

  return {
    state,
    isDone,
    markDone,
    rememberPlace,
    unitProgress,
    lessonProgress,
    labelFor,
  }
})
