<template>

  <v-app>

      <!-- video animation eau -->
  <div class="video-banner relative w-full h-[90vh] overflow-hidden">

<!-- Vidéo de fond -->
<video autoplay loop muted playsinline class="w-full h-full object-cover">
  <source src="/videos/animation_eau2.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos HTML5.
</video>

<!-- Logo centré en haut -->
<div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
<img src="/logo_sansfond.png" alt="Logo BTC Énergies" class="w-20 h-auto max-w-full" />
</div>

<!-- Texte centré -->
<div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 font-serif z-10">

<!-- Titre -->
<h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">Financements et partenaires</h2>

<!-- Trait supérieur -->
<div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>


<!-- Texte -->
<p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ">
Pour réaliser nos projets, nous nous rapprochons d'une grande variété d'acteurs qui  
<span class="block mt-1">nous soutiennent à chaque étape.</span>
</p>
<br>
<!-- Trait inférieur -->
<div class="w-full max-w-4xl border-t-[1px] border-white mb-6"></div>

</div>
</div>
     
     <!-- Bandeau bleu -->
      <div class="bandeau_bleu w-full py-30 bg-gradient-to-r from-[#000926] to-[#3c5a81]">
        <div class="flex flex-col items-center text-center px-4">
          <div class="w-[200px] h-1 bg-[#22B17A] mb-14 bandeau_bleu-trait"></div>

          <h1 class="bandeau_bleu-text font-montserrat text-white text-2xl md:text-3xl pl-10">
            Nos documents Investisseurs
          </h1>

          <div class="w-[200px] h-1 bg-[#22B17A] mt-14 bandeau_bleu-trait"></div>
        </div>
      </div>
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

            

            <!-- Document Investisseur -->
            <section class="bg-white py-10 px-6 md:px-16">

            
              
           

    

       
       
<br>  
      <div class="gsap-bloc mb-16">            
        
            <!-- Investisseur -->
      
              <h2 class="page-blanche_app-title">
                Financement participatif
              </h2>
              <div class="flex justify-center mb-6"></div>
      </div>
<br>              
              
<br>             
           

<!-- Logo 1  Ulule-->

<div class="gsap-bloc mb-16">
    <div class="flex justify-center items-center my-6">
            <a 
                href="https://fr.ulule.com/projet-promethee-energies-renouvelables/?utm_campaign=presale_174497&utm_source=shared-from-Ulule-success-modal-on---http.referer--&utm_medium=uluid_5291556-post-202404060624" 
                target="_blank" 
                rel="noopener noreferrer"
              >
            <img
              src="/partenaire/ulule.png"
              alt="Nos partenaires BTC Energies"
              class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </a>
        </div>
        <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
          <p>Cliquez sur les logos si vous souhaitez nous soutenir ou découvrir notre démarche RSE.</p>
        </ol>
  </div

<br>
<br>

    <div class="gsap-bloc mb-16">
        <!-- Ligne de sépartion verte-->
        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
    </div>
<br>
<br>

      <div class="gsap-bloc mb-16">
          <!-- Titre Nos partenaires + soulignement -->
          <div class="text-left mb-6">
            <h2 class="text-3xl font-bold text-[#777777]">Nos partenaires</h2>
            <div class="w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
          </div>

                 <!-- Logo French Tech Tremplin -->

          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
            <p>2024</p>
          </ol>
                  <div class="flex justify-center items-center my-6">
                    <a 
                        href="https://www.lafrenchtechtoulouse.com/outils-pour-entrepreneurs/programmes/creation-et-amorcage/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                    <img
                      src="/partenaire/lafrenchtechtremplin.png"
                      alt="Nos partenaires BTC Energies"
                      class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </a>
                </div>
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
            <p>French Tech Prépa Tremplin</p>
          </ol>
        </div> 
<br><br>

  <div class="gsap-bloc mb-16">

           <!-- Ligne de sépartion verte-->
           <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
  </div> 
<br><br>

    <div class="gsap-bloc mb-16">
            <!-- Logo French Tech Toulouse -->

            <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
              <p>2024 - 2025 </p>
            </ol>
              <div class="flex justify-center items-center my-6">
                <a 
                    href="https://lafrenchtechtoulouse.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                
                <img
                  src="/partenaire/lafrenchtechtoulouse.png"
                  alt="Nos parteanaires BTC Energies"
                  class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </a>
              </div>
                  <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
                    <p>French Tech Toulouse</p>
                  </ol>
        </div> 

<br><br>

    
          
</section>
</div>


            <!-- Bandeau bas -->
            <div class="bandeau_bleu mt-6 w-full bg-gradient-to-r from-[#000926] to-[#3c5a81]">
              <div class="grid grid-cols-3 items-center text-white px-8 py-6">
                
                <!-- Colonne 1 : Logo -->
                <div class="flex justify-center">
                  <img
                    
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
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

const logoBandeau = ref(null);
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const bandeauBleuText = document.querySelector('.bandeau_bleu-text');

  // Animation du texte principal au scroll
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

  // Animation des traits verts au scroll
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
          toggleActions: 'play none none none',
        },
      }
    );
  });

  gsap.utils.toArray(".gsap-bloc").forEach((bloc, i) => {
    gsap.from(bloc, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: i * 0.1, // décalage léger entre les blocs
      ease: "power2.out",
      scrollTrigger: {
        trigger: bloc,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      }
    });
  });
  gsap.from(logoBandeau.value, {
    scrollTrigger: {
      trigger: '.bandeau_bleu',
      start: 'top 80%',
      toggleActions: 'play reverse play reverse',
    },
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)',
  });
 
});
</script>