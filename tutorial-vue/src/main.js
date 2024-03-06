import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const myapp = createApp(App)
const pinia = createPinia()

myapp.use(pinia)
myapp.mount('#app')

import './assets/main.css'

createApp(App).mount('#app')

import "../node_modules/bootstrap/dist/js/bootstrap.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'