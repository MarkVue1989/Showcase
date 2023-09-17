import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//CSS
import 'primeicons/primeicons.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
