<template>
  <div id="app">
    <Sidebar />
    <div class="layout-wrapper">
      <div class="layout-content">
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
</script>
