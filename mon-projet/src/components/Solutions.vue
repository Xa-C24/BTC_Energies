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

            <!-- Vidéo -->
            <div class="w-full h-[90vh] overflow-hidden">
              <video
                class="w-full h-full object-cover"
                autoplay
                loop
                muted
                playsinline
              >
                <source src="/videos/videoplayback.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>

            <!-- Section Nos Solutions -->
            <section class="bg-white py-10 px-6 md:px-16">
              <h2 class="page-blanche_app-title">
                Nos solutions
              </h2>
              <div class="flex justify-center mb-6">
<br>              
              </div>
              <p class="text-[#475C79] font-bold text-xl text-center max-w-4xl mx-auto">
                En France, il existe seulement 1175 Unité de Méthanisation et presque aucune unité de Gazéification Hydrothermale.
              </p>
<br>

               <!-- Logo 1 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/logo1.png"
              alt="Nos services BTC Energies"
              class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <!-- Titre 1 + soulignement -->
          <div class="text-left mb-6">
            <h2 class="text-3xl font-bold text-[#777777]">Préparation</h2>
            <div class="w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
          </div>

            <!-- Liste -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
            <li>1. Récupération et acheminement des intrants sur site.</li>
            <li>2. Tri et séparation des intrants.</li>
            <li>3. Broyage des déchets valorisables.</li>
            <li>4. Mélange, pulpage et brassage.</li>
          </ol>
<br><br>

          <!-- Logo 2 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/logo4.png"
              alt="Nos services BTC Energies"
              class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <!-- Titre 2 + soulignement -->
          <div class="text-left mb-6">
            <h2 class="text-3xl font-bold text-[#777777]">Valorisation</h2>
            <div class="w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
          </div>

            <!-- Liste -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
            <p>La Gazéification Hydrothermale ou GH permet d'extraire différents gaz et minéraux par procédé catalytique ou par procédé de haute température.</p>
          </ol>
<br><br>
          <!-- Logo 3 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/logo3.png"
              alt="Nos services BTC Energies"
              class="w-30 transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <!-- Titre 2 + soulignement -->
          <div class="text-left mb-6">
            <h2 class="text-3xl font-bold text-[#777777]">Exploitation</h2>
            <div class="w-14 h-0.5 bg-[#8BC367] rounded-full mt-1"></div>
          </div>

            <!-- Liste -->
            <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
            <li>1.  Gaz produits : (Di)Hydrogène, méthane et CO2 qui seront purifiés avant d'être réinjectés dans le réseau, transformés en électricité, comprimés ou exploités sur place.</li>
            <li>2.  Eau récupérée : sera traitée par un processus d'électrolyse (après passage en procédé d'osmose inverse ou en évapo-condensateur) et/ou réexploitée sur place.</li>
            <li>3. Matière minérale extraite : sera séchée, séparée, et vendue à des cimentiers ou à des affineurs. Une partie des engrais seront également exploités sur place. </li>
          </ol>
  <br><br>

        <!-- Ligne de sépartion verte-->
        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

          <!-- Notre offre de services -->
         
    <br>
    <br>        
            <h2 class="page-blanche_app-title ">
                Notre offre de services
              </h2>
              <br><br>
              <p class="text-[#475C79] font-bold text-xl text-center max-w-4xl mx-auto">
              Nous pouvons traiter une grande variété de matière issues de différents secteurs.              </p>
              

              <!-- image 1 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/image1.png"
              alt="Nos services BTC Energies"
              class="w-30 transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

            <!-- Liste image 2 -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
          <p>Nous proposons nos services à toute structure (publique ou privée) souhaitant optimiser son système de traitement de déchets et d'eaux usées. Nous prenons en charge le traitement de leurs déchets et assurons le développement, la gestion et l'exploitation d'un système sur-mesure, adapté à leurs besoins.</p>
          </ol>

<br>
  

        <!-- Ligne de sépartion verte-->
        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

<br>
<br>
        <h2 class="page-blanche_app-title ">
          Nos produits finis et leurs débouchés :
              </h2>
<br>
                 <!-- image 3 -->
          <div class="flex justify-center items-center my-6">
            <img
              src="/solutions/image2.png"
              alt="Nos services BTC Energies"
              class="w-30 transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <!-- Liste image 2 -->
          <ol class="text-gray-500 text-bolt text-xl space-y-2 px-6">
          <p>Nous destinons notre production de méthane aux entreprises : industriels, fournisseurs de gaz et énergéticiens, stations services et aux collectivités.</p>
          </ol>

</section>

          </div>
        </v-col>

      </v-row>
    </v-main>
  </v-app>
</template>



<script>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Header,
    Sidebar
  }
};
</script>