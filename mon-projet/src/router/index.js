import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue'
import Constat from '../components/Constat.vue'

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/constat', name: 'Constat', component: Constat },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
