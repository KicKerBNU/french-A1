import { unit0Lessons } from '@/content/units/unit-0'
import { unit1Lessons } from '@/content/units/unit-1'
import { unit2Lessons } from '@/content/units/unit-2'
import { unit3Lessons } from '@/content/units/unit-3'
import { unit4Lessons } from '@/content/units/unit-4'
import { unit5Lessons } from '@/content/units/unit-5'
import { unit6Lessons } from '@/content/units/unit-6'
import { unit7Lessons } from '@/content/units/unit-7'
import { unit8Lessons } from '@/content/units/unit-8'
import { communicationLessons } from '@/content/resources/communication'
import { grammarLessons } from '@/content/resources/grammar'
import { vocabularyLessons } from '@/content/resources/vocabulary'
import type { Activity, Lesson } from '@/types/course'

const lessonsByUnit: Record<number, Lesson[]> = {
  0: unit0Lessons,
  1: unit1Lessons,
  2: unit2Lessons,
  3: unit3Lessons,
  4: unit4Lessons,
  5: unit5Lessons,
  6: unit6Lessons,
  7: unit7Lessons,
  8: unit8Lessons,
  90: grammarLessons,
  91: vocabularyLessons,
  92: communicationLessons,
}

export function getLessonsForUnit(unitId: number): Lesson[] {
  return lessonsByUnit[unitId] ?? []
}

export function getAllLessons(): Lesson[] {
  return Object.values(lessonsByUnit).flat()
}

export function getLesson(unitId: number, lessonId: string): Lesson | undefined {
  return getLessonsForUnit(unitId).find((lesson) => lesson.id === lessonId)
}

export function getActivity(
  unitId: number,
  lessonId: string,
  activityId: string,
): { lesson: Lesson; activity: Activity } | undefined {
  const lesson = getLesson(unitId, lessonId)
  const activity = lesson?.activities.find((item) => item.id === activityId)
  if (!lesson || !activity) return undefined
  return { lesson, activity }
}

export function getAllActivitiesForUnit(unitId: number): Activity[] {
  return getLessonsForUnit(unitId).flatMap((lesson) => lesson.activities)
}

export function getNextActivity(
  unitId: number,
  lessonId: string,
  activityId: string,
): { lesson: Lesson; activity: Activity } | undefined {
  const lessons = getLessonsForUnit(unitId)
  const lessonIndex = lessons.findIndex((lesson) => lesson.id === lessonId)
  if (lessonIndex < 0) return undefined
  const lesson = lessons[lessonIndex]
  const activityIndex = lesson.activities.findIndex((item) => item.id === activityId)
  if (activityIndex < 0) return undefined
  const nextInLesson = lesson.activities[activityIndex + 1]
  if (nextInLesson) return { lesson, activity: nextInLesson }
  const nextLesson = lessons[lessonIndex + 1]
  const nextActivity = nextLesson?.activities[0]
  if (nextLesson && nextActivity) return { lesson: nextLesson, activity: nextActivity }
  return undefined
}
