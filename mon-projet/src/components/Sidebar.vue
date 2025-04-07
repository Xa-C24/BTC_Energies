<template>
  <!-- Sidebar overlay pour mobile -->
  <div
    v-if="props.isSidebarOpen"
    class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden"
    @click="toggleSidebar"
  ></div>

  <!-- Sidebar -->
  <div
    :class="[
      'fixed top-0 left-0 h-full w-72 bg-white text-gray-700 z-50 flex flex-col shadow-lg transition-transform duration-300 ease-in-out',
      props.isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      'lg:hidden'
    ]"
  >
    <!-- Bouton de fermeture -->
    <button
      @click="toggleSidebar"
      class="absolute top-4 right-4 text-gray-700 text-3xl focus:outline-none"
    >
      &times;
    </button>

    <!-- Contenu de la sidebar -->
    <div class="flex flex-col h-full pt-16 px-6">

      <!-- Logo principal -->
      <div class="mb-8 flex justify-center">
        <img src="/logo_sidebar.png" alt="BTC Énergies Logo" class="h-12 w-auto" />
      </div>

      <!-- Menu navigation -->
      <ul class="flex-grow space-y-4 border-t border-gray-200 pt-4">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="border-b border-gray-200 pb-2"
        >
          <router-link
            :to="item.route"
            class="block text-gray-700 hover:text-green-600 font-medium"
            @click="handleLinkClick"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>

      <!-- Réseaux sociaux -->
      <div class="flex justify-center space-x-4 mt-6 text-gray-500">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const props = defineProps({ isSidebarOpen: Boolean })
const emit = defineEmits(['toggleSidebar'])

const logoL = ref(null)
const logoS = ref(null)
const menuList = ref(null)

const menuItems = [
  { label: 'Accueil', route: '/' },
  { label: 'Notre Constat', route: '/Constat' },
  { label: 'Nos solutions', route: '/Solutions' },
  { label: 'Financements et partenaires', route: '/Partenaires' },
  { label: 'Notre équipe', route: '/equipe' },
  { label: 'Contact', route: '/contact' },
  { label: 'Et demain ?', route: '/EtDemain' },
  { label: 'Mentions légales', route: '/mentions-legales' },
]

const toggleSidebar = () => {
  emit('toggleSidebar')
}

const handleLinkClick = () => {
  emit('toggleSidebar')
}

onMounted(() => {
  gsap.from(logoL.value, {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: 'power2.out',
  })

  gsap.from(logoS.value, {
    opacity: 0,
    y: -30,
    duration: 1.5,
    delay: 0.5,
    ease: 'power2.out',
  })

  if (menuList.value) {
    gsap.from(menuList.value.children, {
      opacity: 0,
      x: -50,
      stagger: 0.1,
      duration: 0.9,
      delay: 0.8,
      ease: 'power2.out',
    })

    Array.from(menuList.value.children).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.1, duration: 0.3, ease: 'power2.out' })
      })

      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    })
  }
})
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  padding: 20px;
}

.scrollable-list li {
  padding: 8px 0;
  transition: color 1.8s ease-in-out;
}

.scrollable-list li:hover {
  color: #d8e8ec;
}
</style>
