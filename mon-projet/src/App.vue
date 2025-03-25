<template>
  <div id="app" class="flex">
    <Sidebar />
    <div class="flex-1">
      <router-view /> <!-- c’est ici que toutes les pages s’affichent -->
    </div>
  </div>
</template>
