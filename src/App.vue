<template>
  <div id="app">
    <HeaderMobile @toggleSidebar="toggleSidebar" />
    <Sidebar :isSidebarOpen="isSidebarOpen" @toggleSidebar="toggleSidebar" />

    <!-- Contenu principal -->
    <div class="layout-wrapper lg:ml-72">
      <div class="layout-content">
        <router-view />
        <Footer />
      </div>
    </div>

    <!-- Footer en dehors du layout wrapper -->
   
  </div>
</template>


<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
import HeaderMobile from './components/HeaderMobile.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  max-width: 100vw;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
