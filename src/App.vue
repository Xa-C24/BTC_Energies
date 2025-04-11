<template>
  <div id="app">
    <HeaderMobile @toggleSidebar="toggleSidebar" />
    <Sidebar :isSidebarOpen="isSidebarOpen" @toggleSidebar="toggleSidebar" />
    <div class="layout-wrapper lg:ml-72">
      <div class="layout-content">
        <router-view />
      </div>
      <Footer />
    </div>
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
