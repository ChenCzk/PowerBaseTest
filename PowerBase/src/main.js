import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import bqDesign from 'bq-design'
//import easyest from 'easyest'
import vcDesign from 'vc-design'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vcDesign)
//app.use(easyest)

app.mount('#app')
