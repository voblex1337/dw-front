
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.css'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)

app.use(router)
app.use(Notifications)
app.use(createPinia())

app.mount('#app')