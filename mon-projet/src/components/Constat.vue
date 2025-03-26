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
            <p style="color: #475C79; font-weight: bold;">
              Le monde continue d'évoluer à un rythme accéléré et de nouvelles
              opportunités se présentent chaque jour. Dans cette ère de
              transformation, il est essentiel d'explorer les solutions qui
              façonneront notre avenir.
            </p>
            <br>
            <p style="color: #475C78; font-weight: bold;">
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

         <!-- Conteneur parent en grille x2 -->
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

                <!-- Ligne de séparation -->
              <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>



          <!-- Conteneur parent en grille x3 -->

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-12 text-[#475C79] font-montserrat">

          <!-- Bloc Environnement -->

          <div>
            <h3 class="text-green-600 text-2xl font-semibold relative mb-4">
              Environnement
            <span class="font-bold absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
          </h3>

            <p>
              Nous nous sommes engagés à agir de manière plus responsable dans nos pratiques. Cela se traduit par la réduction de notre empreinte carbone, 
              la préservation des ressources naturelles et la protection de la biodiversité. Nous mettons nos compétences aux services de lendemains plus vertueux. 
            </p>
          </div>

          <!-- Bloc Economie circulaire-->
          <div>
            <h3 class="text-green-600 text-2xl font-semibold relative mb-4">   
              Economie circulaire
              <span class="font-bold absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>

            </h3>
            <p>
              Nous croyons en la transition vers une économie circulaire, qui vise à recycler, réutiliser et valoriser les produits et les matériaux plutôt que de les jeter. 
              Nous encourageons la consommation responsable, le partage, la réparation et le recyclage pour réduire le gaspillage et participer à l’avènement d’une industrie sans déchet ultime. 
            </p>
          </div>

            <!-- Innovation durable-->

          <div>
            <h3 class="text-green-600 text-2xl font-semibold relative mb-4">
              Innovation durable
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
          </h3>

            <p>
              Nous soutenons et encourageons l'innovation dans les domaines de l'énergie renouvelable, de la gestion des déchets, du transport durable et de nombreuses autres initiatives écologiques. 
              En investissant dans des solutions plus durables, nous souhaitons participer à la création d’un avenir meilleur. 
            </p>
          </div>
        </div>
<br>
          <div>
            <p style="color: #475C79; font-weight: bold;">
              En tant qu'entreprise motivée par ces valeurs, nous nous efforçons de faire une différence positive, à la fois dans notre fonctionnement interne et notre impact sociétal. 
              En adoptant des pratiques plus durables et en soutenant des initiatives respectueuses de l'environnement, nous contribuons à la construction d'un avenir plus écologique et équitable pour tous.
            </p>

            <br>

            <p style="color: #475C79; font-weight: bold;">
              Notre industrie 5.0 est celle de la dépollution, de la décarbonation et de la pluri-sectorialité. 
            </p>
          </div>
        </div> <!-- Fin de la page blanche -->

        <!-- Bandeau bleu fixe bas de page -->

      <div class="bandeau_bleu mt-6">
        <div class="bandeau_bleu-text-container">
          <div class="flex flex-col items-center justify-center text-center bg-gradient-to-r">
            <img src="/logo_sidebar.png" alt="BTC Énergies Logo" class="w-40 h-auto" style="max-height: 8rem;" />
          </div>
        </div>
          <br>
          <div>
            <h2 class="page-blanche_app-title font-semibold mt-4 text-white" style="font-size: 40px;">
              Nous contacter
            </h2>
            <br>
              <!-- Bouton  Nos Coordonnées-->
              <a
                href="/contact"
                class="cursor-pointer bg-white text-[#061832] font-semibold px-6 py-3 rounded-2xl shadow-md"
                     
              >
              Nos Coordonnées
            </a>

              
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