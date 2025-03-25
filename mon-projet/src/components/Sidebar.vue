<template>

<!-- BOUTON BURGER visible en mobile uniquement -->
<button 
  @click="toggleSidebar" 
  class="md:hidden fixed top-4 left-4 z-50 bg-[#061832] text-white p-2 rounded shadow-lg">
  ☰
</button>

<!-- OVERLAY FOND FLOU en mobile -->
<div
  v-if="isSidebarOpen"
  @click="isSidebarOpen = false"
  class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
></div>
<div
  ref="sidebar"
  :class="[
    'sidebar z-50 bg-[#061832] text-white fixed top-0 left-0 h-screen w-64 p-4',
    isSidebarOpen ? 'block' : 'hidden',
    'md:block'
  ]"
>

    <!-- Logo en haut de la sidebar -->
    <div ref="logoL" class="logo-containerL mb-6 flex justify-center">
      <img src="/logo_sidebar.png" alt="BTC Énergies Logo"/>
    </div>

    <br>

    <!-- Deuxième image avec taille plus grande -->
    <div ref="logoS" class="logo-containerS mb-6 flex justify-center">
      <img src="/LeSoDeDe.png" alt="Les Solutions de demain"/>
    </div>

    <br>

    <!-- Flèche supplémentaire centrée au-dessus du menu -->
    <div ref="arrowH" class="menu-arrow_H"></div>

    <ul ref="menuList" class="scrollable-list font-Urbanist text-white text-lg">
      <li v-for="(item, index) in menuItems" :key="index" ref="menuItems">
            <router-link
          :to="item.route"
          class="block hover:text-blue-500 transition-colors duration-300"
        >
          {{ item.label }}
      </router-link>
      </li>
    </ul>

    <!-- Flèche supplémentaire centrée sous le menu -->
    <div ref="arrowB" class="menu-arrow_B"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import gsap from "gsap";

export default {
  name: "Sidebar",
  setup() {
    const sidebar = ref(null);
    const logoL = ref(null);
    const logoS = ref(null);
    const menuList = ref(null);
    const isSidebarOpen = ref(false);
    const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
    const menuItems = [
    { label: "Accueil", route: "/" },
    { label: "Notre Constat", route: "/constat" },
    { label: "Nos solutions", route: "/solutions" },
    { label: "Financements et partenaires", route: "/partenaires" },
    { label: "Notre équipe", route: "/equipe" },
    { label: "Contact", route: "/contact" },
    { label: "Et demain ?", route: "/avenir" },
    { label: "Mentions légales", route: "/mentions-legales" },
  ];

    

    onMounted(() => {
  gsap.from(logoL.value, {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power2.out",
  });

  // Effet de zoom au survol pour chaque élément du menu
  Array.from(menuList.value.children).forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.1, // Zoom léger
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1, // Retour à la taille normale
        duration: 0.3,
        ease: "power2.out",
      });
    }); //  Cette accolade ferme correctement la boucle forEach()
  });
  

      gsap.from(logoS.value, {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(menuList.value.children, {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });
    });
   

    return {
      sidebar,
      logoL,
      logoS,
      menuList,
      menuItems,
      isSidebarOpen,
      toggleSidebar,
    };
  }, // <- Fermeture correcte de `setup()`
};
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
