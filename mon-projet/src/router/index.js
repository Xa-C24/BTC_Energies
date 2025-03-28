import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue'
import Constat from '../components/Constat.vue'
import Solutions from '../components/Solutions.vue'
import Partenaire from '../components/Partenaire.vue'

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/constat', name: 'Constat', component: Constat },
  { path: '/Solutions', name: 'Solutions', component: Solutions },
  { path: '/partenaires', name: 'Partenaires', component: Partenaire },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
