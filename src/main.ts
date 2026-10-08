import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'
import { i18n } from '@/i18n'
import router from '@/router'
import { persistPiniaProgress } from '@/stores/progress'
import '@/style.css'

const pinia = createPinia()
pinia.use(({ store }) => {
  if (store.$id !== 'progress') return
  store.$subscribe((_mutation, state) => {
    persistPiniaProgress(state)
  }, { detached: true })
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
