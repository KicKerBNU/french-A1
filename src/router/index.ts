import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/course',
      name: 'course',
      component: () => import('@/views/CourseView.vue'),
    },
    {
      path: '/how-it-works',
      name: 'how',
      component: () => import('@/views/HowItWorksView.vue'),
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('@/views/ResourcesView.vue'),
    },
    {
      path: '/units/:slug',
      name: 'unit',
      component: () => import('@/views/UnitView.vue'),
    },
    {
      path: '/units/:slug/:lessonId',
      name: 'lesson',
      component: () => import('@/views/LessonView.vue'),
    },
    {
      path: '/units/:slug/:lessonId/:activityId',
      name: 'activity',
      component: () => import('@/views/ActivityView.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
