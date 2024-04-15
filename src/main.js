import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' // api for state management to handle states.

import './axios'
import App from './App.vue' 
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
