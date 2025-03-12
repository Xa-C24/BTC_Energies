<template>
  <div id="app" class="flex flex-col font-montserrat">
    <Header />

    <!-- Bandeau bleu fixe -->
    <div class="bandeau_bleu">
      <div class="bandeau_bleu-text-container">
        <h1 class="bandeau_bleu-text font-montserrat text-white">
          Développement, Gestion et Exploitation de projets industriels
        </h1>
      </div>
    </div>

    <!-- Section Nos Services -->
<section class="page-blanche_app">
  <div class="page-blanche_app-wrapper"> <!-- Ajout du cadre blanc -->
    <h2 class="page-blanche_app-title">Nos services</h2>

<br>
<br>

    <!-- 1 -->
    <div class="page-blanche_app-block">
      <div class="page-blanche_app-logo">
        <img src="/logo1app.png" alt="Nos services">
      </div>

      <div class="page-blanche_app-content">
        <h3><strong>Vente d’énergies et de ressources renouvelables.</strong></h3>
        <p>Nous assurons la production et la vente d’énergies et de ressources renouvelables issues de procédés de valorisation de biomasse et de matières d’origine fossile.</p>
      </div>
    </div>
<br>

    <!-- 2 -->
    <div class="page-blanche_app-block">
      <div class="page-blanche_app-logo"> 
        <img src="/logo2app.png" alt="Nos services">
      </div>

      <div class="page-blanche_app-content">
        <h3><strong>Gazéification hydrothermale de déchets et d’ordures ménagères</strong></h3>
        <p>La gazéification hydrothermale permet de transformer efficacement des déchets en gaz de synthèse, une source d'énergie renouvelable et propre, mais également en ressources minérales et en eau.</p>
        <p>Nous pouvons valoriser une grande variété de matières à des tarifs très compétitifs.</p>
      </div>
    </div>
<br>

    <!-- 3 -->
    <div class="page-blanche_app-block">
      <div class="page-blanche_app-logo"> 
        <img src="/logo3app.png" alt="Nos services">
      </div>

      <div class="page-blanche_app-content">
        <h3>Valorisation des effluents de station d'épuration et des eaux usées (STEP/STEU) et du lixiviat</h3>
        <p>Nous pouvons assurer la valorisation des effluents de stations d'épuration et celles de traitement des eaux usées : y compris lorsqu'elles sont souillées (mercure, pathogènes et autres polluants comme des micro-plastiques et une partie des PFAS).</p>
        <p>Nous pouvons utiliser les ressources présentes dans les eaux usées et ainsi contribuer à la préservation de l'environnement.</p>
      </div>
    </div> <!--  Fermeture de page-blanche_app-block -->

    <br>
      <!-- 4 -->
      <div class="page-blanche_app-block">
        <div class="page-blanche_app-logo"> 
        <img src="/logo4app.png" alt="Nos services">
      </div>

      <div class="page-blanche_app-content">
        <h3>Gestion des déchets agricoles</h3>
        <p>Les pratiques de gestion des déchets agricoles sont essentielles pour préserver l'environnement et maintenir la durabilité de l'agriculture. Nous pouvons ainsi valoriser le digestat, en particuliers lorsqu’il ne peut pas être épandu, et traiter l'ensemble des déchets agricoles (produits phyto-sanitaires, production hors-calibre, matière non-méthanisable).</p>
      </div>
    </div>
<br>
      <!-- 5 -->
      <div class="page-blanche_app-block">
      <div class="page-blanche_app-logo"> 
        <img src="/logo5app.png" alt="Nos services">
      </div>

      <div class="page-blanche_app-content">
        <h3>Traitement des effluents industriels</h3>
        <p>Le traitement des effluents industriels est essentiel pour préserver l'environnement et assurer la qualité des ressources en eau. Nous pouvons valoriser une grande variété d'effluents issus de la plupart de ces secteurs.</p>
      </div>
    </div>
<br>
      <!-- 6 -->
      <div class="page-blanche_app-block">
      <div class="page-blanche_app-logo"> 
        <img src="/logo6app.png" alt="Nos services">
      </div>

      <div class="page-blanche_app-content">
        <h3>Opérations de Dépollution</h3>
        <p>Nous pouvons organiser des opérations de réhabilitation massive de terrains pollués (anciennes décharges, sols pollués aux métaux lourds). </p>
      </div>
    </div> <!--  Fermeture de page-blanche_app-block -->
  </div> <!--  Fermeture de page-blanche_app-wrapper -->

</section>

    
<div class="border-t-2 border-gray-400 my-6"></div>



<!-- Section Notre Constat -->
     
<section class="page-blanche_app">
  <div class="page-blanche_app-wrapper"> 
    <h2 class="page-blanche_app-title">Notre Constat</h2>

    <br>

    <!-- Cadre de la vidéo YouTube -->
    <div class="video-app-constat w-full max-w-4xl mx-auto aspect-video">
      <iframe 
        class="w-full h-full"
        src="https://www.youtube.com/embed/hOIWuE_eEsM" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  </div>
</section>

    <div class="content flex">
      <Sidebar />
      <div class="flex-1 p-6">
        <main class="main-content">
          <!-- Contenu principal -->
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import gsap from "gsap";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

import "./assets/styles.css";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
  },
  setup() {
    onMounted(() => {
      const bandeauBleuText = document.querySelector(".bandeau_bleu-text");

      if (!bandeauBleuText) return;

      //  Effet "Fade + Slide" sur le texte du bandeau bleu
      gsap.fromTo(
        bandeauBleuText,
        { opacity: 0, y: -40 },
        { 
          opacity: 1,
          y: 0,
          duration: 3.1,
          ease: "power2.out",
        }
      );

      //  Effet sur les cadres blancs Nos Services
      gsap.fromTo(
        ".page-blanche_app-wrapper",
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, // L'élément devient visible progressivement
          scale: 1, // Il retrouve sa taille normale
          duration: 3, // Animation qui dure 3 secondes
          delay: 1, // L'animation commence après 1 seconde
          ease: "power2.out", // Effet fluide pour une transition naturelle
        }
      );
    });

    onMounted(() => {
  const blocks = document.querySelectorAll(".page-blanche_app-block");

  blocks.forEach((block) => {
        block.addEventListener("mouseenter", () => {
          gsap.to(block, {
            scale: window.innerWidth > 768 ? 1.1 : 1.05,
            duration: 0.9,
            ease: "power2.out",
            boxShadow: window.innerWidth > 768 ? "0px 10px 20px rgba(0, 0, 0, 0.3)" : "0px 5px 10px rgba(0, 0, 0, 0.2)",
            // Ajoute une ombre portée pour donner un effet de relief au survol
          boxShadow: window.innerWidth > 768 
          ? "0px 10px 20px rgba(0, 0, 0, 0.3)" // Ombre plus marquée sur desktop
          : "0px 5px 10px rgba(0, 0, 0, 0.2)", // Ombre plus légère sur mobile 
          });                                         // Ombre plus légère sur mobile  // Ombre plus marquée sur desktop
        });

        block.addEventListener("mouseleave", () => {
          gsap.to(block, {
            scale: 1,
            duration: 1.9, // Animation plus lente pour un retour plus doux
            ease: "elastic.out(1, 1.5)",  // Effet de rebond subtil pour un retour naturel
            boxShadow: "none", // Supprime l'ombre pour revenir à l'état initial
          });
        });
      });
});

    return {};
  }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
@import "./assets/styles.css";


</style>
