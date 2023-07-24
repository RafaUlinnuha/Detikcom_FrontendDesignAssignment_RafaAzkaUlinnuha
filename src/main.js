import './index.css'
import 'flowbite'
import Vue3Marquee from 'vue3-marquee'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).use(Vue3Marquee).mount('#app')
