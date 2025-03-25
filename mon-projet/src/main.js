// main.js

import { createApp } from 'vue'

// Styles globaux
import './style.css'
import './assets/tailwind.css'

// Composant racine
import App from './App.vue'
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Création des instances
const vuetify = createVuetify({
  components,
  directives
})

// ✅ Crée une seule fois l'app
const app = createApp(App)

// ✅ Utilise Vuetify et le Router AVANT le mount
app.use(vuetify)
app.use(router)

// ✅ Monte l’app une seule fois
app.mount('#app')