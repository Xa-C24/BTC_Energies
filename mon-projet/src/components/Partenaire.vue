<template>
  <v-app>
    <v-main class="pa-0 ma-0">
 
      <v-row no-gutters class="pa-0 ma-0">
        <!-- Sidebar -->
        <v-col cols="12" md="2" class="pa-0">
          <div class="sidebar">
            <Sidebar />
          </div>
        </v-col>

        <!-- Contenu principal -->
        <v-col class="pa-0 ma-0">
          <div class="main-content">
            <Header />

            <!-- Bloc vidéo -->
            <section class="video-banner relative w-full h-[90vh] overflow-hidden">
              <video autoplay loop muted playsinline class="w-full h-full object-cover">
                <source src="/videos/animation_eau2.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos HTML5.
              </video>
     
     
              <!-- Logo -->
              <div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
                <img src="/logo_sansfond.png" alt="Logo BTC Énergies" class="w-20 h-auto max-w-full" />
              </div>

              <!-- Texte centré -->
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 font-serif z-10">
                <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">Notre équipe</h2>
                

                  <!-- Trait supérieur -->
              <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>

                <p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                  Pour réaliser nos projets, nous nous rapprochons d'une grande variété d'acteurs qui  nous soutiennent à chaque étape.
                </p>
                <br>
                 <!-- Trait inferieur -->
              <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>
              </div>
            </section>


                        <!-- Bandeau bleu pleine largeur -->
              <div class="bandeau_bleu py-30 bg-gradient-to-r from-[#000926] to-[#3c5a81]">
                <div class="flex flex-col items-center text-center px-4">

                  <!-- Trait au-dessus -->
                  <div class="w-[200px] h-1 bg-[#22B17A] mb-14  bandeau_bleu-trait"></div>
                 
                  <h1 class="font-montserrat text-white text-2xl md:text-3xl">
                    Nos documents Investisseurs
                  </h1>

                  <!-- Trait en dessous -->
                  <div class="w-[200px] h-1 bg-[#22B17A] mt-14  bandeau_bleu-trait"></div>
                </div>
              </div>

            <!-- Bloc blanc après la vidéo -->
            <section>
              <v-container fluid class="page-blanche_app py-12">
                <div class="page-blanche_app-wrapper">

                  

                  <!-- Contenu document investisseur -->
                  <section class="bg-white py-10 px-6 md:px-16">
                    <div class="gsap-bloc mb-16">
                      <h2 class="page-blanche_app-title">Financement participatif</h2>
                    </div>

                    <!-- Logo 1 Ulule -->
                    <div class="gsap-bloc mb-16">
                      <div class="flex justify-center items-center my-6">
                        <a 
                          href="https://fr.ulule.com/projet-promethee-energies-renouvelables/?utm_campaign=presale_174497&utm_source=shared-from-Ulule-success-modal-on---http.referer--&utm_medium=uluid_5291556-post-202404060624" 
                          target="_blank" 
                          rel="noopener noreferrer">
                          <img
                            src="/partenaire/ulule.png"
                            alt="Nos partenaires BTC Energies"
                            class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                        </a>
                      </div>
                      <p class="text-gray-500 text-xl text-center">Cliquez sur les logos si vous souhaitez nous soutenir ou découvrir notre démarche RSE.</p>
                    </div>

                    <div class="gsap-bloc mb-16">
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
                    </div>

                    <!-- Nos partenaires -->
                    <div class="gsap-bloc mb-16">
                      <h2 class="text-3xl font-bold text-[#777777] mb-2">Nos partenaires</h2>
                      <br>
                      <p class="text-gray-500 text-xl">2024</p>
                      <div class="flex justify-center items-center my-6">
                        <a 
                          href="https://www.lafrenchtechtoulouse.com/outils-pour-entrepreneurs/programmes/creation-et-amorcage/" 
                          target="_blank" 
                          rel="noopener noreferrer">
                          <img
                            src="/partenaire/lafrenchtechtremplin.png"
                            alt="French Tech Tremplin"
                            class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                        </a>
                      </div>
                      <p class="text-gray-500 text-xl text-center">French Tech Prépa Tremplin</p>
                    </div>

                    <div class="gsap-bloc mb-16">
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
                    </div>

                    <!-- French Tech Toulouse -->
                    <div class="gsap-bloc mb-16">
                      <p class="text-gray-500 text-xl">2024 - 2025</p>
                      <div class="flex justify-center items-center my-6">
                        <a 
                          href="https://lafrenchtechtoulouse.com" 
                          target="_blank" 
                          rel="noopener noreferrer">
                          <img
                            src="/partenaire/lafrenchtechtoulouse.png"
                            alt="French Tech Toulouse"
                            class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                        </a>
                      </div>
                      <p class="text-gray-500 text-xl text-center">French Tech Toulouse</p>
                    </div>
                  </section>
                </div>
              </v-container>
            </section>

            
          </div>
        </v-col>
        <!-- Bandeau bas -->
        <div class="bandeau_bleu mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
              <div class="grid grid-cols-3 items-center text-white px-8 py-6">
                <!-- Colonne 1 : Logo -->
                <div class="flex justify-center">
                  <img
                    ref="logoSidebar"
                    src="/logo_sidebar.png"
                    alt="BTC Énergies Logo"
                    class="w-40 h-auto max-h-32"
                  />
                </div>

                <!-- Colonne 2 : Vide -->
                <div></div>

                <!-- Colonne 3 : Texte et bouton -->
                <div class="flex flex-col items-center text-center">
                  <h2 class="font-montserrat font-semibold text-4xl mb-4 text-white">Nous contacter</h2>
                  <a
                    href="/contact"
                    class="font-montserrat font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner flex items-center gap-2">
                    Nos Coordonnées
                  </a>
                </div>
              </div>
            </div>
      </v-row>
    </v-main>
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
        toggleActions: "play reverse play reverse",
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
