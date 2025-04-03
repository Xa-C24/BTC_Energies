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
<br>
<br>           
                 
<v-form class="max-w-4xl mx-auto px-4" @submit.prevent="submitForm">
  <v-row dense>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.nom"
        label="Nom"
        required
        outlined
        dense
        class="bg-white rounded"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.prenom"
        label="Prénom"
        required
        outlined
        dense
        class="bg-white rounded"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.email"
        label="Email"
        type="email"
        required
        outlined
        dense
        class="bg-white rounded"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.telephone"
        label="Téléphone"
        type="tel"
        outlined
        dense
        class="bg-white rounded"
      ></v-text-field>
    </v-col>

    <v-col cols="12">
      <v-textarea
        v-model="form.message"
        label="Votre message"
        required
        outlined
        rows="5"
        class="bg-white rounded"
      ></v-textarea>
    </v-col>

    <v-col cols="12" class="text-center mt-4">
      <v-btn type="submit" color="primary" class="px-6 py-2">
        Envoyer
      </v-btn>
    </v-col>
  </v-row>
</v-form>

    
                    

                </div>
                <br><br>
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

