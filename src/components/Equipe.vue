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

                <div class="w-full max-w-4xl border-t border-white mb-6"></div>
                <p class="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                  Notre équipe est composée de 3 associés présentés ci-dessous et de notre "Chief Happiness Officer" Canin.
                  Nous sommes également soutenus par plus d'une dizaine de personnes apportant leurs compétences sur les différentes parties du projet.
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
                  <!-- bloc 1 -->
                  <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                 

                    <!-- Titre 1 + soulignement -->
                    <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/T_B2.png"
                        alt="Thibault BÉTHENCOURT"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                    <!-- Texte à droite -->
                    <div class="flex-1">
                      <!-- Titre + soulignement -->
                      <div class="text-left mb-4">
                        <h2 class="text-3xl font-bold text-[#555]">Thibault</h2>
                        <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                      </div>

                      <br>

                      <!-- Détails -->
                      <ul class="text-gray-600 text-lg space-y-1">
                        <li><strong>Président</strong></li>
                        <li>Porteur de projet (CEO)</li>
                        <li class="text-[#25A875]">+33 6 29 56 07 56</li>
                      </ul>

                      <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                      <!-- Études -->
                      <div class="mt-4">
                        <p class="italic font-semibold text-gray-700">Études :</p>
                        <p class="text-gray-600 mt-1">
                          Bac+5 : Droit, Économie, Gestion (administration des institutions publiques)<br />
                          Doctorat en préparation (Management stratégique)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

<br> 
<br> 
                 <!-- Bloc 2 -->
                 <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

               <!-- Titre 1 + soulignement -->
                 <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                 <!-- Image à gauche -->
                 <div class="flex-shrink-0">
                   <img
                     src="/Trombi/A_D.png"
                     alt="Alain DEGANS"
                     class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                     />
                 </div>

                 <!-- Texte à droite -->
                 <div class="flex-1">
                   <!-- Titre + soulignement -->
                   <div class="text-left mb-4">
                     <h2 class="text-3xl font-bold text-[#555]">Alain DEGANS</h2>
                     <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                   </div>

                   <br>

                   <!-- Détails -->
                   <ul class="text-gray-600 text-lg space-y-1">
                     <li><strong>Directeur général (COO)</strong></li>
                     
                     <li class="text-[#25A875]">+33 7 88 10 07 46</li>
                   </ul>

                   <!-- Ligne de sépartion verte-->
             <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                   <!-- Études -->
                   <div class="mt-4">
                     <p class="italic font-semibold text-gray-700">Études :</p>
                     <p class="text-gray-600 mt-1">
                      Bac+5 : Management et Développement des Activités Commerciales (en cours)
                     </p>
                   </div>
                 </div>
               </div>
             </div>

<br>            
<br>        
             <!-- Bloc 3 -->
             <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

               <!-- Titre 1 + soulignement -->
                  <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/C_F.png"
                        alt="Camille Faure"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                  <!-- Texte à droite -->
                      <div class="flex-1">
                        <!-- Titre + soulignement -->
                        <div class="text-left mb-4">
                          <h2 class="text-3xl font-bold text-[#555]">Camille FAURE</h2>
                          <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                        </div>

                        <br>

                        <!-- Détails -->
                        <ul class="text-gray-600 text-lg space-y-1">
                          <li><strong>Responsable RH (HR Manager)</strong></li>
                          <li>Chargée de communication</li>
                        </ul>

                        <!-- Ligne de sépartion verte-->
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Études -->
                        <div class="mt-4">
                          <p class="italic font-semibold text-gray-700">Études :</p>
                          <p class="text-gray-600 mt-1">
                            Bac+5 : Management des Ressources Humaines                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
<br>
<br> 
                  <!-- Bloc 4 -->
             <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                  <!-- Titre 1 + soulignement -->
                    <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                      <!-- Image à gauche -->
                      <div class="flex-shrink-0">
                        <img
                          src="/Trombi/R_P.png"
                          alt="Rémi PICHONNEAU"
                          class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                      </div>

                    <!-- Texte à droite -->
                        <div class="flex-1">
                          <!-- Titre + soulignement -->
                          <div class="text-left mb-4">
                            <h2 class="text-3xl font-bold text-[#555]">Rémi PICHONNEAU</h2>
                            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                          </div>

                          <br>

                          <!-- Détails -->
                          <ul class="text-gray-600 text-lg space-y-1">
                            <li><strong>Ingénieur en génie industriel / Responsable technique (CTO))</strong></li>
                            
                          </ul>

                          <!-- Ligne de sépartion verte-->
                        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Diplôme d'Ingénieur en conduite de projets industriels
                            </p>
                            <p class="text-gray-600 mt-1">
                              Master SYSPEC</p>
                          </div>
                        </div>
                      </div>
                    </div>
  
<br>
<br> 
                    <!-- Bloc Adell -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                      <!-- Titre 1 + soulignement -->
                        <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                          <!-- Image à gauche -->
                          
                          <div class="flex-1">
                          <!-- Titre + soulignement -->
                          <div class="text-left mb-4">
                            <h2 class="text-3xl font-bold text-[#555]">ADELL</h2>
                                                      
                            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                            <br>
                            <p class="text-gray-600 mt-1">
                              Direction Administrative et Financière                           
                            </p> 
                          </div>

                        </div>
                      </div>
                    </div>
            
<br>
<br> 
                   <!-- Bloc 5 -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                <!-- Titre 1 + soulignement -->
                  <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/O_C.png"
                        alt="Olivier COT"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                  <!-- Texte à droite -->
                      <div class="flex-1">
                        <!-- Titre + soulignement -->
                        <div class="text-left mb-4">
                          <h2 class="text-3xl font-bold text-[#555]">Olivier COT</h2>
                          <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                        </div>

                        <br>

                        <!-- Détails -->
                        <ul class="text-gray-600 text-lg space-y-1">
                          <li><strong>Responsable Commercial (CBO)</strong></li>
                          
                        </ul>

                        <!-- Ligne de sépartion verte-->
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Études -->
                        <div class="mt-4">
                          <p class="italic font-semibold text-gray-700">Études :</p>
                          <p class="text-gray-600 mt-1">
                            Bac+5   Programme Grande Ecole
                          </p>
                          <p class="text-gray-600 mt-1">
                            (Business Development Management Finance)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
<br>
<br> 

                  <!-- Bloc 6 -->
                  <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                <!-- Titre 1 + soulignement -->
                  <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/P_S.png"
                        alt="Philippe Sutarik"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                  <!-- Texte à droite -->
                      <div class="flex-1">
                        <!-- Titre + soulignement -->
                        <div class="text-left mb-4">
                          <h2 class="text-3xl font-bold text-[#555]">Philippe Sutarik</h2>
                          <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                        </div>
                        <br>

                        <!-- Détails -->
                        <ul class="text-gray-600 text-lg space-y-1">
                          <li><strong>Responsable Qualité, Sécurtié, Environnement (QSE)</strong></li>
                          
                          
                        </ul>

                        <!-- Ligne de sépartion verte-->
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Études -->
                        <div class="mt-4">
                          <p class="italic font-semibold text-gray-700">Études :</p>
                          <p class="text-gray-600 mt-1">
                            Bac+5 Technique et Gestion de l'Environnement des Ponts et Chaussées option Gestion et Economie
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

<br>
<br> 

                    <!-- Bloc 7 -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                <!-- Titre 1 + soulignement -->
                  <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                    <!-- Image à gauche -->
                    <div class="flex-shrink-0">
                      <img
                        src="/Trombi/A_O.png"
                        alt="Anaïs Olive"
                        class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>

                  <!-- Texte à droite -->
                      <div class="flex-1">
                        <!-- Titre + soulignement -->
                        <div class="text-left mb-4">
                          <h2 class="text-3xl font-bold text-[#555]">Anaïs Olive</h2>
                          <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                        </div>

                        <br>

                        <!-- Détails -->
                        <ul class="text-gray-600 text-lg space-y-1">
                          <li><strong>Cheffe de projet Outre Mer</strong></li>
                          
                          
                        </ul>

                        <!-- Ligne de sépartion verte-->
                      <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Études -->
                        <div class="mt-4">
                          <p class="italic font-semibold text-gray-700">Études :</p>
                          <p class="text-gray-600 mt-1">
                            Bac+5 : Audit et management des ressources humaines + formation gestionnaire de paie
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

<br>
<br> 
                    <!-- Bloc 8 -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

            <!-- Titre 1 + soulignement -->
              <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                <!-- Image à gauche -->
                <div class="flex-shrink-0">
                  <img
                    src="/Trombi/C_C.jpg"
                    alt="Cédric Chauvet"
                    class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                </div>

              <!-- Texte à droite -->
                  <div class="flex-1">
                    <!-- Titre + soulignement -->
                    <div class="text-left mb-4">
                      <h2 class="text-3xl font-bold text-[#555]">Cécric Chauvet</h2>
                      <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                    </div>

                    <br>

                    <!-- Détails -->
                    <ul class="text-gray-600 text-lg space-y-1">
                      <li><strong>Développeur IA et Automatisation</strong></li>
                      
                      
                    </ul>

                    <!-- Ligne de sépartion verte-->
                  <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                    <!-- Études -->
                    <div class="mt-4">
                      <p class="italic font-semibold text-gray-700">Études :</p>
                      <p class="text-gray-600 mt-1">
                        Master 2Pro - Pilote et surveillance des procédés industriels
                        Spécialisation Machine Learning - Holberton School
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>

<br>
<br> 
              <!-- Bloc 9 -->
              <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                  <!-- Titre 1 + soulignement -->
                    <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                      <!-- Image à gauche -->
                      <div class="flex-shrink-0">
                        <img
                          src="/Trombi/C_C.jpg"
                          alt="Xavier Piedallu"
                          class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                      </div>

                    <!-- Texte à droite -->
                        <div class="flex-1">
                          <!-- Titre + soulignement -->
                          <div class="text-left mb-4">
                            <h2 class="text-3xl font-bold text-[#555]">Xavier Piedallu</h2>
                            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                          </div>

                          <br>

                          <!-- Détails -->
                          <ul class="text-gray-600 text-lg space-y-1">
                            <li><strong>Architecte Web Full-Stack</strong></li>
                            <li><strong>Conception d'outils numériques</strong></li>
                            
                            
                          </ul>

                          <!-- Ligne de sépartion verte-->
                        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                          <!-- Études -->
                          <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Bac+2 : Développement Web Full-Stack RNCP5 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

<br>

<br>
                    <!-- Bloc Rubie -->
                    <div class="gsap-bloc hover:scale-[1.08] transition-transform duration-300 ease-in-out">

                      <!-- Titre 1 + soulignement -->
                        <div class="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-md p-6 gsap-bloc">
                          <!-- Image à gauche -->
                      <div class="flex-shrink-0">
                        <img
                          src="/Trombi/Rubie.png"
                          alt="Rubie"
                          class="w-48 md:w-60 h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                      </div>
                          
                          <div class="flex-1">
                          <!-- Titre + soulignement -->
                          <div class="text-left mb-4">
                            <h2 class="text-3xl font-bold text-[#555]">Rubie</h2>
                                                      
                            <div class="w-16 h-1 bg-[#8BC367] rounded-full mt-1"></div>
                              <br />
                              <p class="text-gray-600 mt-1">
                                Responsable Bien-être au Travail
                              </p>
                              <p class="text-gray-600 mt-1">
                                Chief Happiness Officer
                              </p>
 
                          </div>

                        
                          <!-- Ligne de sépartion verte-->
                        <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                        <!-- Études -->
                        <div class="mt-4">
                            <p class="italic font-semibold text-gray-700">Études :</p>
                            <p class="text-gray-600 mt-1">
                              Canine Buisness School - Master Canin
                            </p>
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

