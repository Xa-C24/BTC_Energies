<template>
  <v-app>
    <v-main>
      <v-container fluid class="font-montserrat pa-0">
  <v-row no-gutters>
    <!-- Sidebar -->
    <v-col cols="12" md="2" class="pa-0">
            <div class="sidebar">
              <Sidebar />
            </div>
          </v-col>

    <!-- Contenu principal -->
    <v-col cols="12" md="10" class="pa-0">
      <div class="main-content">
      <Header />

      <!-- Vidéo de présentation -->
      <v-row justify="center">
  <v-col cols="12" md="10" class="flex justify-center">
    <div class="w-full max-w-6xl aspect-video">
      <video
        class="w-full h-full object-cover rounded-lg shadow-lg"
        autoplay
        loop
        muted
        playsinline
      >
        <source src="/videos/videoplayback.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  </v-col>
</v-row>


            <!-- Section Notre Constat -->
            <section class="page-blanche_app">
              <div class="page-blanche_app-wrapper">
                <h2 class="page-blanche_app-title">Notre Constat</h2>
                <br />
                <br />
                <div class="text-[#475C79] font-bold">
                  <p>
                    Le monde continue d'évoluer à un rythme accéléré et de nouvelles opportunités se présentent chaque jour. 
                    Dans cette ère de transformation, il est essentiel d'explorer les solutions qui façonneront notre avenir.
                  </p>
                  <br />
                  <p>
                    Ces solutions sont vastes et variées, mais elles ont toutes pour objectif commun de répondre aux défis de notre époque en utilisant l'innovation, 
                    la créativité et la collaboration. Il est passionnant d'imaginer comment ces solutions émergentes façonneront notre avenir et ouvriront la voie à un monde meilleur. 
                    Restons ouverts aux opportunités et prêts à embrasser le changement pour un avenir prometteur.
                  </p>
                </div>

                <br />
                <br />
                <!-- Vidéo YouTube responsive -->
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <div class="aspect-video">
                      <iframe
                        class="w-full h-full"
                        src="https://www.youtube.com/embed/hOIWuE_eEsM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </v-col>
                </v-row>

                  <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <br />

                <!-- Grid x2 -->
                <v-row class="py-12 px-6 md:px-20 text-[#475C79]">
                  <v-col cols="12" md="6">
                    <h3 class="text-green-600 text-2xl font-semibold mb-4 relative">
                      Technologie
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p>
                      Les avancées technologiques ne cessent de transformer notre façon de vivre, de travailler et de communiquer.
                      Des domaines tels que l'intelligence artificielle, l'Internet des objets, la réalité virtuelle et augmentée ou la blockchain offrent des opportunités fascinantes pour résoudre des problèmes complexes. 
                      Les progrès dans ces domaines pourraient non seulement améliorer notre qualité de vie, mais aussi révolutionner certains secteurs comme la santé, l'éducation, l'énergie et bien d'autres.
                    </p>
                  </v-col>
                    <br>

                  <v-col cols="12" md="6">
                    <h3 class="text-green-600 text-2xl font-semibold mb-4 relative">
                      Durabilité environnementale
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    
                    <p>
                      Face aux défis climatiques auxquels notre planète est confrontée, les solutions de demain doivent se concentrer sur la durabilité environnementale. 
                      Les énergies renouvelables, l'efficacité énergétique, la gestion des déchets et la préservation des ressources naturelles sont autant de domaines où des mesures novatrices peuvent être prises pour réduire notre empreinte écologique. 
                      Un avenir durable dépend de notre capacité à repenser notre façon de consommer et de produire.
                    </p>
                  </v-col>
                </v-row>

                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <br />

                <!-- Image + légendes -->
                <v-row justify="center" class="my-6">
                  <v-col cols="12" md="8" class="text-center">
                    <img src="/Q_C_C.png" alt="Nos services BTC Energies" class="w-full max-w-3xl mx-auto" />
                    <div class="flex justify-center items-center gap-4 text-sm mt-2 text-gray-600">
                      <p>UM : Unité de Méthanisation</p>
                      <p>UGH : Unité de Gazéification Hydrothermale</p>
                    </div>
                  </v-col>
                </v-row>

                <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>

                <br>
                
                <!-- Grid x3 -->
                <v-row class="py-12 px-6 md:px-20 text-[#475C79]">
                  <v-col cols="12" md="4">
                    <h3 class="text-green-600 text-2xl font-semibold mb-4 relative">
                      Environnement
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p>
                      Nous nous sommes engagés à agir de manière plus responsable dans nos pratiques. Cela se traduit par la réduction de notre empreinte carbone, 
                      la préservation des ressources naturelles et la protection de la biodiversité. 
                      Nous mettons nos compétences aux services de lendemains plus vertueux.
                    </p>
                  </v-col>
                      <br>
                  <v-col cols="12" md="4">
                    <h3 class="text-green-600 text-2xl font-semibold mb-4 relative">
                      Economie circulaire
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p>
                      Nous croyons en la transition vers une économie circulaire, qui vise à recycler, réutiliser et valoriser les produits et les matériaux plutôt que de les jeter.
                      Nous encourageons la consommation responsable, le partage, la réparation et le recyclage pour réduire le gaspillage et participer à l’avènement d’une industrie sans déchet ultime. 
                    </p>
                    <br>
                  </v-col>

                  <v-col cols="12" md="4">
                    <h3 class="text-green-600 text-2xl font-semibold mb-4 relative">
                      Innovation durable
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 border-b-2 border-green-350"></span>
                    </h3>
                    <p>
                      Nous soutenons et encourageons l'innovation dans les domaines de l'énergie renouvelable, de la gestion des déchets, du transport durable et de nombreuses autres initiatives écologiques. 
                      En investissant dans des solutions plus durables, nous souhaitons participer à la création d’un avenir meilleur.
                    </p>
                  </v-col>
                </v-row>

                <br>
                <br>
                <!-- Texte final -->
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <p class="text-[#475C79] font-bold">
                      En tant qu'entreprise motivée par ces valeurs, nous nous efforçons de faire une différence positive, à la fois dans notre fonctionnement interne et notre impact sociétal. 
                      En adoptant des pratiques plus durables et en soutenant des initiatives respectueuses de l'environnement, nous contribuons à la construction d'un avenir plus écologique et équitable pour tous.
                    </p>
                    <br />
                    <p class="text-[#475C79] font-bold">
                      Notre industrie 5.0 est celle de la dépollution, de la décarbonation et de la pluri-sectorialité. 
                    </p>
                  </v-col>
                </v-row>

                <!-- Ligne de sépartion verte-->
                <div class="border-t-2 border-[#8BC367] w-16 mx-auto mt-6"></div>
              </div>

              

              <!-- Bandeau bas -->
              <div class="bandeau_bleu mt-6">
                <div class="bandeau_bleu-text-container">
                  <div class="flex flex-col items-center justify-center text-center bg-gradient-to-r">
                    <img
                      src="/logo_sidebar.png"
                      alt="BTC Énergies Logo"
                      class="w-40 h-auto"
                      style="max-height: 8rem"
                    />
                  </div>
                </div>
                <br />
                <div class="text-center">
                  <h2 class="page-blanche_app-title font-semibold mt-4 text-white" style="font-size: 40px">
                    Nous contacter
                  </h2>
                  <br />
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
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

export default {
  name: 'Constat',
  components: {
    Sidebar,
    Header,
  },
}
</script>


<style scoped>

</style>
