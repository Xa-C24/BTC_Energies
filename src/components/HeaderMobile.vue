<template>
  <div class="flex items-center justify-between bg-[#061832] text-white p-4 lg:hidden fixed top-0 left-0 right-0 z-50">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="/logo_sidebar.png" alt="BTC Énergies Logo" class="h-12 w-auto" />
      <span class="ml-12 text-2xl">Les solutions de demain</span>
    </div>

    <!-- Bouton burger -->
    <button @click="$emit('toggleSidebar')" class="text-white focus:outline-none">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</template>

<script setup>
// Pas besoin de script pour l'instant car le composant est très simple et utilise uniquement les events natifs
</script>

<style scoped>
/* Optionnel : tu peux améliorer un peu le focus du bouton burger pour l’accessibilité */
button:focus {
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>
