// IMPORTACIONES GENERALES DE VUE

import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

// IMPORTACIONES PLUGINS

import i18n from './plugins/i18n'
import router from './router/index'
import PrimeVue from 'primevue/config'

// ESTILOS PrimeVue
import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

createApp(App)
.use(i18n)
.use(router)
.use(PrimeVue)
.mount('#app')
