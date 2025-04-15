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
        <v-col class="pa-10 ma-10">
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
                <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">Contact</h2>

                <!-- Trait supérieur -->
              <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>

                <div class="w-full max-w-4xl border-t border-white mb-6"></div>
                <p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                  Vous êtes à la recherche d'une solution durable pour la gestion de vos déchets et la production d'énergie propre ? BTC Énergies est votre partenaire idéa                </p>

                <br> <br>
                <!-- Trait inférieur -->
                <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>
                
              </div>
            </section>

            <!-- Bloc blanc après la vidéo -->
            <section>
              <v-container fluid class="page-blanche_app py-12">
                <div class="page-blanche_app-wrapper">
                
              

          <div class="min-h-screen flex items-center justify-center bg-gray-50 px-8 py-12" style="background-image: url('/pattern.svg');">
            <div class="w-full max-w-4xl bg-white bg-opacity-70 p-8 rounded-lg shadow-md">
              <form @submit.prevent="envoyerFormulaire" class="space-y-6">

                <div class="flex items-center mb-4">
                  <label for="nom" class="block text-lg font-semibold text-[#3E3E3E] mb-2 mr-7">Votre Nom et <br> Prénom</label>
                  <input v-model="nom" id="nom" type="text" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="flex items-center mb-4">
                  <label for="email" class="block text-lg font-semibold text-[#3E3E3E] mb-2 mr-10">Adresse <br>E-Mail</label>
                  <input v-model="email" id="email" type="email" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="flex items-center mb-4">
                  <label for="message" class="block text-lg font-semibold text-[#3E3E3E] mb-2 mr-4">Votre Message</label>
                  <textarea v-model="message" id="message" rows="4" required
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                <!-- Bouton d'envoi -->
                <div class="text-center">
                  <button type="submit"
                    class="bg-gray-800 hover:bg-black text-white font-bold py-2 px-12 rounded-full shadow">
                    Soumettre
                  </button>
                </div>

                    <!-- Espace-->              
                  <div class="mb-8"></div>

                <!-- Bloc Contact -->
                <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-mg md:text-base px-2">
                  <a href="mailto:direction@btc-energies.fr" 
                   class="inline-block text-xl text-[#8BC367] hover:text-[#8BC367] no-underline hover:no-underline transform transition-transform duration-200 hover:scale-105"
                   >
                    direction@btc-energies.fr
                  </a>
                  <span class="italic text-[#8BC367]">
                    +33 6 29 56 07 56
                  </span>
                </div>
              </form>
            </div>
          </div>

  
  </div>
   </v-container>
</section>

            

          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Sidebar from './Sidebar.vue';


const logoSidebar = ref(null);
gsap.registerPlugin(ScrollTrigger);

const nom = ref('')
const email = ref('')
const message = ref('')

const envoyerFormulaire = () => {
  console.log({ nom: nom.value, email: email.value, message: message.value })
  alert('Formulaire envoyé (simulé) !')
}
</script>

