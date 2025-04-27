// main.js

import { createApp } from 'vue'
import 'vuetify/styles'
// import '@mdi/font/css/materialdesignicons.css' // (si tu utilises des icônes mdi)


// Styles globaux
import './style.css'
import './assets/tailwind.css'

// Composant racine
import App from './App.vue'
import router from './router'

// Vuetify
import vuetify from './plugins/vuetify'



// ✅ Crée une seule fois l'app
const app = createApp(App)

// ✅ Utilise Vuetify et le Router AVANT le mount
app.use(vuetify)
app.use(router)

// ✅ Monte l’app une seule fois
app.mount('#app')