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

      <!-- Contenu principal avec la vidéo -->
      <v-col>    

           <!-- Bloc vidéo -->
      <section class="video-banner relative w-full h-[90vh] overflow-hidden">
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
                <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white ml-4">Contact</h2>

                <!-- Trait supérieur -->
              <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>

                <div class="w-full max-w-4xl border-t border-white mb-6"></div>
                <p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed pl-10">
                  Vous êtes à la recherche d'une solution durable pour la gestion de vos déchets et la production d'énergie propre ? BTC Énergies est votre partenaire idéal.
                </p>

                <br> <br>
                <!-- Trait inférieur -->
                <div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>
              </div>
            </section>

             
        
             <!-- Section Contact -->

             <div class="pl-16 sm:pl-20 md:pl-24 lg:pl-40 xl:pl-60">
             <v-container class="min-h-screen bg-gray-200 flex items-center justify-center px-4 py-8">
              <div class="text-center mb-20">

                <!-- Ligne de sépartion verte-->
               <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
 <br>


        <!-- Texte en tête -->

        <v-row justify="center">
          <v-col cols="12" md="10">
            <h4 class="text-center text-[#475C79] font-bold pl-8">
            Vous souhaitez en savoir plus sur nos solutions, proposer un partenariat, ou tout simplement entrer en contact avec notre équipe&nbsp;?<br>
              Remplissez ce formulaire. Nous reviendrons vers vous dans les meilleurs délais.                    <br />
            </h4>
          </v-col>
        </v-row>

        <!-- Ligne de sépartion verte-->
        <div class="bandeau_bleu-trait border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
  <br>

            <!-- Formulaire de Contact -->

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
                  <button
                    ref="boutonSoumettre"
                    type="submit"
                    class="bg-gray-800 hover:bg-black text-white font-bold py-2 px-12 rounded-full shadow"
                  >
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
            </div>
            
            

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

gsap.registerPlugin(ScrollTrigger);

const logoSidebar = ref(null);
const nom = ref('');
const email = ref('');
const message = ref('');
const boutonSoumettre = ref(null);

const envoyerFormulaire = () => {
  console.log({ nom: nom.value, email: email.value, message: message.value });

  // Animation rebond au clic
  if (boutonSoumettre.value) {
    gsap.fromTo(
      boutonSoumettre.value,
      { scale: 1 },
      {
        scale: 1.55,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
      }
    );
  }

  alert('Formulaire envoyé (simulé) !');
};

onMounted(() => {
  // ✅ Animation du logo
  if (logoSidebar.value) {
    gsap.fromTo(
      logoSidebar.value,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: logoSidebar.value,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }

  // ✅ Animation des traits verts
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

  // ✅ Animation au survol du bouton
  const bouton = boutonSoumettre.value;
  if (bouton) {
    bouton.addEventListener('mouseenter', () => {
      gsap.to(bouton, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out',
      });
    });

    bouton.addEventListener('mouseleave', () => {
      gsap.to(bouton, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    });
  }
});
</script>
