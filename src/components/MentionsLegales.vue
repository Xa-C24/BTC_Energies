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
              <video autoplay loop muted playsinline preload="auto" class="w-full h-full object-cover">
                <source src="/videos/animation_eau2.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos HTML5.
              </video>

              <!-- Logo -->
              <div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
                <img src="/logo_sansfond.png" alt="Logo BTC Énergies" class="w-16 sm:w-20 md:w-24 lg:w-28 h-auto" />
              </div>


              
              <!-- Texte centré -->
                
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 font-serif z-10">
                <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">Mentions Légales</h2>
                <div class="w-16 h-1 bg-[#FFFF] rounded-full mt-1"></div>
              </div>
            </section>

            <!-- Bloc blanc après la vidéo -->
            <section>
              <v-container fluid class="page-blanche_app py-12 px-4 sm:px-6">
                <div class="page-blanche_app-wrapper max-w-screen-xl mx-auto">
                  <div class="gsap-bloc hover:scale-[1.03] transition-transform duration-300 ease-in-out">
                    <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6">
                      <!-- Image à gauche -->
                      <div class="flex-shrink-0">
                        <img
                          src="/favicon2.jpg"
                          alt="Logo BTC Energies"
                          class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                      </div>

                      <!-- Texte à droite -->
                      <div class="flex-1">
                        <!-- Titre + soulignement -->
                        <div class="text-left mb-4">
                          <h2 class="text-3xl font-bold text-[#555]">Mentions légales</h2>
                          <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                        </div>

                        <!-- Détails -->
                        <ul class="text-gray-600 text-xl space-y-1 mb-6">
                          <li><strong>Dénomination sociale : BTC Energies</strong></li>
                          <li>Forme Juridique : SAS</li>
                          <li>Capital social : 120€</li>
                          <li>Siège social : 9 RUE DE L'AVENIR, 31470 FONTENILLES</li>
                        </ul>

                        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Coordonnées -->
                        <div class="mt-6 space-y-2">
                          <p class="text-lg italic font-semibold text-gray-700">
                            Téléphone : <span class="text-[#8BC367]">+33 6 29 56 07 56</span>
                          </p>
                          <p class="text-lg italic font-semibold text-gray-700">Email :</p>
                            <a href="mailto:direction@btc-energies.fr" 
                             class="inline-block text-xl text-[#8BC367] hover:text-[#8BC367] no-underline hover:no-underline transform transition-transform duration-200 hover:scale-105"
                            >
                              direction@btc-energies.fr
                            </a> 
                            <div class="mt-1 space-y-1"></div>
                            <a href="mailto:kermon31@gmail.com" 
                             class="inline-block text-xl text-[#8BC367] hover:text-[#8BC367] no-underline hover:no-underline transform transition-transform duration-200 hover:scale-105"
                             >
                              kermon31@gmail.com
                            </a>                        
                          </div>
                        <div class="mt-8 space-y-2"></div>
                                             
                      </div>
                    </div>
                    <div class="mt-8 space-y-2"></div>
                    <p class="font-serif text-black text-3xl md:text-4xl leading-relaxed tracking-wide text-center">
                            Les solutions de demain
                          </p> 
                  </div>
                </div>
              </v-container>
            </section>
          </div>
        </v-col>

        <!-- Bandeau bas -->
        <div class="bandeau_bleu mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
          <div class="grid grid-cols-1 sm:grid-cols-3 items-center text-white px-4 sm:px-8 py-6 gap-6">
            <!-- Colonne 1 : Logo -->
            <div class="flex justify-center">
              <img
                src="/logo_sidebar.png"
                ref="logoSidebar"
                alt="BTC Énergies Logo"
                class="w-28 sm:w-40 h-auto max-h-32"
              />
            </div>

            <!-- Colonne 2 : Vide ou contenu futur -->
            <div></div>

            <!-- Colonne 3 : Texte et bouton -->
            <div class="flex flex-col items-center text-center">
              <h2 class="font-semibold text-2xl sm:text-4xl mb-4 text-white">Nous contacter</h2>
              <a href="/contact"
                class="font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                       hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                       active:scale-95 active:shadow-inner flex items-center gap-2">
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

const logoSidebar = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.utils.toArray(".gsap-bloc").forEach((bloc) => {
    gsap.from(bloc, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bloc,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      }
    });
  });

  //  Animation du logo au scroll
  gsap.from(logoSidebar.value, {
    scrollTrigger: {
      trigger: logoSidebar.value,
      start: 'top 90%',
      toggleActions: 'play reverse play reverse',
    },
    scale: 0,
    opacity: 0,
    duration: 5,
    ease: 'back.out(1.7)',
  });
});
</script>

