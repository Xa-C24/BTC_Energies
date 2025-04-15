<template>
  <v-app>
  <div class="flex min-h-screen">

    <!-- Sidebar -->
    <div>
      <Sidebar />
    </div>

    <!-- Contenu principal -->
    <div class="flex-1 flex flex-col">
      <Header />

      <!-- Bloc vidéo -->
      <section class="relative w-full h-[90vh] overflow-hidden">
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/videos/animation_eau2.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos HTML5.
        </video>

        

        <!-- Logo -->
        <div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
          <img src="/logo_sansfond.png" alt="Logo BTC Énergies" class="w-20 h-auto max-w-full" />
        </div>

        <!-- Texte centré -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 font-serif z-10">
          <h2 class="text-4xl md:text-5xl font-bold mb-8">Financements et partenaires</h2>
          <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>
          <p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Pour réaliser nos projets, nous nous rapprochons d'une grande variété d'acteurs qui nous soutiennent à chaque étape.
          </p>
          <div class="w-full max-w-4xl border-t-[1px] border-white mt-6"></div>
        </div>
      </section>

      <!-- Bandeau bleu -->
      <section class="w-full bg-gradient-to-r from-[#000926] to-[#3c5a81] py-20">
        <div class="flex flex-col items-center text-center px-4">
          <div class="w-[200px] h-1 bg-[#22B17A] mb-14"></div>
          <h1 class="font-montserrat text-white text-2xl md:text-3xl">
            Nos documents Investisseurs
          </h1>
          <div class="w-[200px] h-1 bg-[#22B17A] mt-14"></div>
        </div>
      </section>

      <!-- Bloc blanc -->
      <section class="bg-white py-20 px-6 md:px-16 w-full">
        <!-- Financement participatif -->
        <div class="text-center mb-20">
          <h2 class="text-3xl font-bold text-[#777777] mb-6">Financement participatif</h2>
          <div class="flex justify-center items-center my-6">
            <a href="https://fr.ulule.com/projet-promethee-energies-renouvelables/"
               target="_blank" rel="noopener noreferrer">
              <img src="/partenaire/ulule.png" alt="Ulule" class="w-30 hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>
          <p class="text-gray-500 text-xl">Cliquez sur les logos si vous souhaitez nous soutenir ou découvrir notre démarche RSE.</p>
          <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
        </div>

        <!-- Partenaires -->
        <div class="text-center mb-20">
          <h2 class="text-3xl font-bold text-[#777777] mb-2">Nos partenaires</h2>
          <p class="text-gray-500 text-xl">2024</p>
          <div class="flex justify-center items-center my-6">
            <a href="https://www.lafrenchtechtoulouse.com/outils-pour-entrepreneurs/programmes/creation-et-amorcage/"
               target="_blank" rel="noopener noreferrer">
              <img src="/partenaire/lafrenchtechtremplin.png" alt="French Tech Tremplin"
                   class="w-30 hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>
          <p class="text-gray-500 text-xl">French Tech Prépa Tremplin</p>
          <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
        </div>
      

        <div class="text-center">
          <p class="text-gray-500 text-xl">2024 - 2025</p>
          <div class="flex justify-center items-center my-6">
            <a href="https://lafrenchtechtoulouse.com" target="_blank" rel="noopener noreferrer">
              <img src="/partenaire/lafrenchtechtoulouse.png" alt="French Tech Toulouse"
                   class="w-30 hover:scale-110 transition-transform duration-300 ease-in-out" />
            </a>
          </div>
          <p class="text-gray-500 text-xl">French Tech Toulouse</p>
        </div>
     
      </section>


      <!-- Footer -->
      <footer class="w-full bg-[#0d111c] text-white text-center py-4 text-sm">
        <p>Site optimisé pour la version ordinateur</p>
        <p>
          Optimisé par
          <a href="https://www.webnode.fr" target="_blank" class="underline">Webnode</a> •
          <a href="/cookies" class="underline">Cookies</a>
        </p>
      </footer>

    </div>

  </div>
</v-app>

</template>



<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

const logoSidebar = ref(null); // ✅ Ref pour le logo
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const bandeauBleuText = document.querySelector('.bandeau_bleu-text');

  // ✅ Animation texte principal
  if (bandeauBleuText) {
    gsap.fromTo(
      bandeauBleuText,
      { opacity: 0, y: -40, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bandeauBleuText,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // ✅ Animation traits verts
  gsap.utils.toArray('.bandeau_bleu-trait').forEach((trait) => {
    gsap.fromTo(
      trait,
      { scaleX: 0, transformOrigin: 'center' },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: trait,
          start: 'top 90%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  });

  // ✅ Animation blocs GSAP
  gsap.utils.toArray(".gsap-bloc").forEach((bloc, i) => {
    gsap.from(bloc, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: i * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bloc,
        start: "top 90%",
        toggleActions: "play none none reset",
      }
    });
  });

  

  // ✅ Animation du logo
  if (logoSidebar.value) {
    gsap.from(logoSidebar.value, {
      scrollTrigger: {
        trigger: logoSidebar.value,
        start: 'top 85%',
        toggleActions: 'play reverse play reverse',
      },
      scale: 0.8,
      opacity: 0,
      duration: 5,
      ease: 'back.out(1.7)',
    });
  }
});
</script>
