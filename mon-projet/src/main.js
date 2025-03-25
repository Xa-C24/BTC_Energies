// main.js

import { createApp } from 'vue'

<<<<<<< HEAD
// Styles globaux existants
import './style.css'
import './assets/tailwind.css'

//  composant racine
import App from './App.vue'

// 1) Import de Vuetify 3 et de ses styles
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

// 2) Import des composants et directives Vuetify (ou de ceux dont tu as besoin)
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 3) Création de l'instance Vuetify
const vuetify = createVuetify({
  components,
  directives
})

// 4) Création de ton application Vue
const app = createApp(App)

// 5) On "connecte" Vuetify à l’app
app.use(vuetify)

// 6) On monte l’application
=======
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
>>>>>>> d775ca6 (psh de photos page constat et accueil)
app.mount('#app')
