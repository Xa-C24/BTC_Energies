<template>
  <div class="flex font-montserrat">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Contenu principal -->
    <div class="flex-1">
      <Header />

      <!-- Vidéo -->
      <div>
        <video
          class="video-container-appGIF"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="/videos/videoplayback.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>

      <!-- Section Notre Constat -->
      <section class="page-blanche_app">
        <div class="page-blanche_app-wrapper">
          <h2 class="page-blanche_app-title">Notre Constat</h2>
          <br>

          <div>
            <p style="color: #475C79;">
              Le monde continue d'évoluer à un rythme accéléré et de nouvelles
              opportunités se présentent chaque jour. Dans cette ère de
              transformation, il est essentiel d'explorer les solutions qui
              façonneront notre avenir.
            </p>
            <br>
            <p style="color: #475C78;">
              Ces solutions sont vastes et variées, mais elles ont toutes pour
              objectif commun de répondre aux défis de notre époque en utilisant
              l'innovation, la créativité et la collaboration. Il est passionnant
              d'imaginer comment ces solutions émergentes façonneront notre
              avenir et ouvriront la voie à un monde meilleur. Restons ouverts
              aux opportunités et prêts à embrasser le changement pour un avenir
              prometteur.
            </p>
          </div>

          <br>

          <!-- Vidéo YouTube -->
          <div class="video-app-constat w-full max-w-4xl mx-auto aspect-video">
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/hOIWuE_eEsM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <!-- Ligne de séparation -->
          <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

         <!-- Conteneur parent en grille -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-12 text-[#475C79] font-montserrat">

<!-- Bloc Technologie -->
<div>
  <h3 class="text-green-600 text-2xl font-semibold relative mb-4">
  Technologie
  <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
</h3>

  <p>
    Les avancées technologiques ne cessent de transformer notre façon
    de vivre, de travailler et de communiquer. Des domaines tels que
    l'intelligence artificielle, l'Internet des objets, la réalité
    virtuelle et augmentée ou la blockchain offrent des opportunités
    fascinantes pour résoudre des problèmes complexes. Les progrès
    dans ces domaines pourraient non seulement améliorer notre
    qualité de vie, mais aussi révolutionner certains secteurs comme
    la santé, l'éducation, l’énergie et bien d’autres.
  </p>
</div>

<!-- Bloc Durabilité -->
<div>
  <h3 class="text-green-600 text-2xl font-semibold relative mb-4">   
     Durabilité environnementale
     <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>

  </h3>
  <p>
    Face aux défis climatiques auxquels notre planète est
    confrontée, les solutions de demain doivent se concentrer sur la
    durabilité environnementale. Les énergies renouvelables,
    l'efficacité énergétique, la gestion des déchets et la
    préservation des ressources naturelles sont autant de domaines où
    des mesures novatrices peuvent être prises pour réduire notre
    empreinte écologique. Un avenir durable dépend de notre capacité
    à repenser notre façon de consommer et de produire.
  </p>
</div>

</div>


          <!-- Ligne -->
          <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

          <!-- Image -->
          <div class="flex justify-center my-6">
            <img src="/Q_C_C.png" alt="Nos services BTC Energies" class="w-[700px]" />
          </div>

          <!-- UM + UGH côte à côte -->
          <div style="color: #475C79;" class="flex justify-center items-center gap-4 text-sm">
            <p>UM : Unité de Méthanisation</p>
            
            <p>UGH : Unité de Gazéification Hydrothermale</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";

export default {
  name: "Constat",
  components: {
    Sidebar,
    Header,
  },
};
</script>