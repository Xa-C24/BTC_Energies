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
                <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">Et demain ?</h2>

                <!-- Trait supérieur -->
              <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>

                <div class="w-full max-w-4xl border-t border-white mb-6"></div>
                <p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                  Notre modèle est plurisectoriel et peut aller au-delà de la valorisation de déchets et de la production d'énergies renouvelables. 
                </p>

                <br> <br>
                <!-- Trait inférieur -->
                <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>
                
              </div>
            </section>

            <!-- Bloc blanc après la vidéo -->
            <section>
              <v-container fluid class="page-blanche_app py-12">

                <div class="page-blanche_app-wrapper">
<br>
<br>           
                 
   
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                      <!-- Titre 1 + soulignement -->
                        <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                          
                          
                          <!-- Image à gauche -->
                      <div class="flex-shrink-0">
                        <img
                          src="/etdemain.png"
                          alt="Rubie"
                          class="w-40 sm:w-56 md:w-72 lg:w-96"
                          />
                      </div>
                          
                          <div class="flex-1">
                          <!-- Titre + soulignement -->
                          <div class="text-left mb-4">
                            <h1 class="text-3xl font-bold text-[#555]">Et demain, que ferons-nous ?</h1>
                                                      
                            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                              <br />
                              <p class="text-gray-600 mt-1">
                                Notre modèle est plurisectoriel et peut aller au-delà de la valorisation de déchets et de la production d'énergies renouvelables.
                              </p>
                              <p class="text-gray-600 mt-1">
                                De par la grande diversité des ressources que nous obtenons, nous avons la possibilité de porter et de développer tout un ensemble de projets industriels.
                              </p>

                               <!-- Ligne de sépartion verte-->
                                 <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                                <br>

                              <p class="text-gray-600 mt-1">
                                BTC Énergies prévoit ainsi de construire une zone de production de plantes à visées thérapeutiques exploitant une partie des ressources générées :
                              </p>

                              <p class="text-gray-600 mt-1">
                                -  Le CO2 purifié servira à booster la croissance des plantes et à en extraire les principes actifs.                              
                              </p>

                              <p class="text-gray-600 mt-1">
                                - Une partie du (di)hydrogène transformé en électricité alimentera les installations.
                              </p>

                              <p class="text-gray-600 mt-1">
                                - Les engrais ainsi que l'eau nourriront les plantes.
                              </p>

                               <!-- Ligne de sépartion verte-->
                               <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                                  <br>

                              <p class="text-gray-600 mt-1">
                                Les plantes seront cultivées en environnement contrôlé (température, hygrométrie, taux de CO2, alimentations en éléments nutritifs etc.). 
                              </p>
 
                              <p class="text-gray-600 mt-1">
                                Nous pourrons ainsi produire, sur-commande, une grande diversité de plantes à haute valeur ajoutée pour l’industrie pharmaceutique, cosmétique ou alimentaire.
                              </p>

                              <p class="text-gray-600 mt-1">
                                Ces zones de productions pourront également être construites à proximité d’unités de méthanisation déjà existantes.
                              </p>

                          </div>

                        
                          <!-- Ligne de sépartion verte-->
                        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
<br>
                        <!-- Études -->
                        <div class="mt-4">
                          <p class="text-3xl text-[#8BC367] font-semibold mt-1">
                              Rien ne se perd, rien ne se crée, tout se transforme et s'exploite !                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br>          
                    

                </div>
              
                <br><br>
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
                    src="/logo_sidebar.png"
                    ref="logoSidebar"
                    alt="BTC Énergies Logo"
                    class="w-40 h-auto max-h-32"
                  />
                </div>

                <!-- Colonne 2 : Vide ou contenu futur -->
                <div></div>

                <!-- Colonne 3 : Texte et bouton -->
                <div class="flex flex-col items-center text-center">
                  <h2 class="font-montserrat font-semibold text-4xl mb-4 text-white">Nous contacter</h2>

                  <a href="/contact"
                  class="font-montserrat font-bold text-black bg-[#C2C4C7] px-6 py-3 rounded-xl shadow transition duration-300 transform
                          hover:bg-[#989A9D] hover:text-white hover:scale-105 hover:shadow-lg
                          active:scale-95 active:shadow-inner flex items-center gap-2">
                            <span class="text-lg"></span>
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

