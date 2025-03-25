<template>
  <div class="font-montserrat bg-white text-[#475C79]">
    <!-- Sidebar + contenu -->
    <div class="flex">
      <Sidebar />

      <!-- Contenu principal -->
      <div class="flex-1">
        <Header />

        <!-- Section Notre Constat -->
        <section class="py-12 px-4 md:px-12">
          <div class="max-w-5xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-[#2E4567] mb-4">Notre Constat</h2>
            <div class="w-16 h-1 bg-green-400 mx-auto mb-6"></div>

            <p class="mb-4">
              Le monde continue d'évoluer à un rythme accéléré et de nouvelles opportunités se présentent chaque jour. 
              Dans cette ère de transformation, il est essentiel d'explorer les solutions qui façonneront notre avenir.
            </p>
            <p>
              Ces solutions sont vastes et variées, mais elles ont toutes pour objectif commun de répondre aux défis de 
              notre époque en utilisant l'innovation, la créativité et la collaboration. Il est passionnant d'imaginer 
              comment ces solutions émergentes façonneront notre avenir et ouvriront la voie à un monde meilleur.
            </p>
          </div>
        </section>

        <!-- Section Techno + Durabilité -->
        <section class="py-12 px-4 md:px-12">
          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Technologie -->
            <div>
              <h3 class="text-green-600 text-2xl font-bold border-b-2 border-green-400 inline-block mb-4">Technologie</h3>
              <p>
                Les avancées technologiques ne cessent de transformer notre façon de vivre, de travailler et de communiquer.
                Des domaines tels que l'intelligence artificielle, l'Internet des objets, la réalité virtuelle et augmentée 
                ou la blockchain offrent des opportunités fascinantes pour résoudre des problèmes complexes.
              </p>
            </div>

            <!-- Durabilité -->
            <div>
              <h3 class="text-green-600 text-2xl font-bold border-b-2 border-green-400 inline-block mb-4">Durabilité environnementale</h3>
              <p>
                Face aux défis climatiques auxquels notre planète est confrontée, les solutions de demain doivent se concentrer 
                sur la durabilité environnementale. Les énergies renouvelables, l'efficacité énergétique et la gestion des déchets 
                sont des leviers majeurs pour un avenir durable.
              </p>
            </div>
          </div>
        </section>

        <!-- Vidéo YouTube -->
        <section class="py-12">
          <div class="max-w-4xl mx-auto px-4">
            <div class="aspect-video">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/hOIWuE_eEsM"
                title="Vidéo Constat BTC"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';

export default {
  name: 'Constat',
  components: {
    Sidebar,
    Header
  }
};
</script>
