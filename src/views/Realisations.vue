<template>
  <div class="min-h-screen bg-[#f8f7fe] text-slate-800 font-sans">
    <!-- Hero -->
    <section class="py-14 md:py-20 bg-gradient-to-b from-white to-[#f8f7fe] border-b border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <span class="inline-block bg-[#117647]/10 text-[#117647] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Réalisations
        </span>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#117647] leading-tight">
          Nos Réalisations sur le Terrain
        </h1>
        <p class="text-base sm:text-lg text-[#f1ba46] font-medium max-w-3xl mx-auto leading-relaxed">
          Des actions concrètes, mesurables et au service des populations de l'Indénié-Djuablin.
        </p>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Découvrez les projets réalisés par le Conseil Régional dans les domaines de l'éducation,
          de la santé, des infrastructures et de l'agriculture.
        </p>
      </div>
    </section>

    <!-- Chiffres clés des réalisations -->
    <section class="py-10 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="space-y-1">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#f1ba46]">+120</h2>
          <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Projets réalisés</p>
        </div>
        <div class="space-y-1">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#f1ba46]">+45</h2>
          <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Écoles réhabilitées</p>
        </div>
        <div class="space-y-1">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#f1ba46]">+30</h2>
          <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Centres de santé appuyés</p>
        </div>
        <div class="space-y-1">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#f1ba46]">+200 km</h2>
          <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Voies aménagées</p>
        </div>
      </div>
    </section>

    <!-- Filtres -->
    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-5 py-2 rounded-lg text-sm font-semibold transition-all border',
            activeCategory === cat
              ? 'bg-[#117647] text-white border-[#117647]'
              : 'bg-white text-slate-700 border-[#d1d1d1]/60 hover:border-[#117647] hover:text-[#117647]'
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Grille des réalisations -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="projet in projetsFiltres"
            :key="projet.titre"
            class="bg-white rounded-2xl overflow-hidden border border-[#d1d1d1]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div class="relative h-52 overflow-hidden">
              <img
                :src="projet.image"
                :alt="projet.titre"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <span class="absolute top-4 left-4 bg-[#f1ba46] text-slate-900 text-xs font-bold px-3 py-1 rounded-md">
                {{ projet.categorie }}
              </span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p class="text-xs text-slate-500 mb-2">{{ projet.lieu }} • {{ projet.annee }}</p>
                <h3 class="font-bold text-slate-900 text-base mb-2 line-clamp-2">
                  {{ projet.titre }}
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {{ projet.description }}
                </p>
              </div>
              <div class="pt-4 mt-4 border-t border-[#d1d1d1]/30 flex items-center justify-between">
                <span class="text-xs font-semibold text-[#117647] uppercase tracking-wider">
                  {{ projet.statut }}
                </span>
                <ArrowRight class="w-4 h-4 text-[#117647]" />
              </div>
            </div>
          </Card>
        </div>

        <!-- Message si aucun projet -->
        <div v-if="projetsFiltres.length === 0" class="text-center py-16 text-slate-500">
          Aucune réalisation dans cette catégorie pour le moment.
        </div>
      </div>
    </section>

    <!-- Réalisation phare -->
    <section class="py-16 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Réalisation Phare
        </h2>
        <Card class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#d1d1d1]/40 shadow-sm">
          <div class="lg:col-span-6 overflow-hidden rounded-xl">
            <img
              :src="projet2"
              alt="Réalisation phare"
              class="w-full h-auto object-cover rounded-xl shadow"
            />
          </div>
          <div class="lg:col-span-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <span class="inline-block bg-[#117647]/10 text-[#117647] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Infrastructures
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900">
              Aménagement de la voirie urbaine d'Abengourou
            </h3>
            <p>
              Dans le cadre de son programme de désenclavement, le Conseil Régional a engagé
              l'aménagement de plusieurs axes routiers structurants de la ville d'Abengourou,
              facilitant la mobilité des populations et le transport des productions agricoles.
            </p>
            <p>
              Ce projet s'inscrit dans une dynamique globale de modernisation des infrastructures
              régionales, avec un accent particulier sur l'accès aux services publics de base.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="bg-[#f8f7fe] border border-[#d1d1d1]/40 rounded-xl p-4">
                <p class="text-xs uppercase text-slate-500 font-semibold mb-1">Statut</p>
                <p class="text-sm font-bold text-[#117647]">En cours</p>
              </div>
              <div class="bg-[#f8f7fe] border border-[#d1d1d1]/40 rounded-xl p-4">
                <p class="text-xs uppercase text-slate-500 font-semibold mb-1">Année</p>
                <p class="text-sm font-bold text-[#117647]">2025 - 2026</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <!-- Témoignage / Impact -->
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          L'impact sur nos populations
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card class="bg-[#f8f7fe] rounded-2xl p-6 border border-[#d1d1d1]/40 shadow-sm text-center">
            <div class="bg-[#117647] text-white p-3 rounded-lg w-fit mx-auto mb-4">
              <Users class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Des milliers de bénéficiaires</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Les projets touchent directement les populations en matière d'accès aux services
              de base, d'emploi et de formation.
            </p>
          </Card>

          <Card class="bg-[#f8f7fe] rounded-2xl p-6 border border-[#d1d1d1]/40 shadow-sm text-center">
            <div class="bg-[#117647] text-white p-3 rounded-lg w-fit mx-auto mb-4">
              <TrendingUp class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Un développement durable</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Chaque réalisation est pensée pour s'inscrire dans la durée et soutenir la
              croissance économique locale.
            </p>
          </Card>

          <Card class="bg-[#f8f7fe] rounded-2xl p-6 border border-[#d1d1d1]/40 shadow-sm text-center">
            <div class="bg-[#117647] text-white p-3 rounded-lg w-fit mx-auto mb-4">
              <Handshake class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Un partenariat actif</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Le Conseil travaille avec l'État, les communes et les partenaires techniques
              et financiers.
            </p>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-[#117647]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 class="text-2xl sm:text-3xl font-bold text-white">
          Vous souhaitez en savoir plus sur nos réalisations ?
        </h2>
        <p class="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto">
          Consultez nos rapports d'activités ou contactez nos services pour toute information
          complémentaire.
        </p>
        <div class="flex flex-wrap justify-center gap-4 pt-2">
          <RouterLink
            to="/documentation"
            class="inline-flex items-center gap-2 bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 font-semibold px-8 py-3 rounded-lg shadow transition-all"
          >
            Voir la documentation
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition-all"
          >
            Nous contacter
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ArrowRight,
  Users,
  TrendingUp,
  Handshake,
} from 'lucide-vue-next'

// Composant Shadcn Vue
import { Card } from '@/components/ui/card'

// Images existantes
import projet1 from '@/assets/images/projet-1.png'
import projet2 from '@/assets/images/projet-2.png'
import projet3 from '@/assets/images/projet-3.png'
import presidentDjuablin from '@/assets/images/president-djuablin.png'
import actualite1 from '@/assets/images/actualite-1.png'
import actualite2 from '@/assets/images/actualite-2.png'
import actualite3 from '@/assets/images/actualite-3.png'

// Nouvelles images à créer dans src/assets/images/
import realisationEcole from '@/assets/images/ecole.jpg'
import realisationSante from '@/assets/images/hopital.jpg'
import realisationRoute from '@/assets/images/route.jpg'
import realisationAgriculture from '@/assets/images/agriculutre.jpg'
import realisationMarche from '@/assets/images/marche.jpg'

// Filtres
const categories = ['Toutes', 'Éducation', 'Santé', 'Infrastructures', 'Agriculture']
const activeCategory = ref('Toutes')

// Liste des réalisations
const realisations = [
  {
    titre: "Réhabilitation de l'école primaire de Niangon",
    categorie: 'Éducation',
    lieu: 'Niangon',
    annee: '2025',
    statut: 'Achevé',
    description: "Rénovation complète des bâtiments scolaires, construction de latrines et équipement en mobilier pour améliorer les conditions d'apprentissage.",
    image: realisationEcole,
  },
  {
    titre: "Appui au centre de santé d'Abengourou",
    categorie: 'Santé',
    lieu: 'Abengourou',
    annee: '2025',
    statut: 'Achevé',
    description: "Dotation en équipements médicaux, réhabilitation des locaux et appui à la formation du personnel soignant.",
    image: realisationSante,
  },
  {
    titre: "Aménagement de la voirie urbaine",
    categorie: 'Infrastructures',
    lieu: 'Abengourou',
    annee: '2025-2026',
    statut: 'En cours',
    description: "Bitumage et aménagement de plusieurs axes structurants de la ville pour faciliter la mobilité et le commerce.",
    image: realisationRoute,
  },
  {
    titre: "Programme d'appui aux producteurs agricoles",
    categorie: 'Agriculture',
    lieu: 'Betté',
    annee: '2024',
    statut: 'Achevé',
    description: "Distribution de semences améliorées, formation aux bonnes pratiques agricoles et appui à la commercialisation.",
    image: realisationAgriculture,
  },
  {
    titre: "Construction du marché moderne de Betté",
    categorie: 'Infrastructures',
    lieu: 'Betté',
    annee: '2024',
    statut: 'Achevé',
    description: "Un marché moderne équipé pour soutenir les activités commerciales et améliorer les conditions de travail des commerçants.",
    image: realisationMarche,
  },
  {
    titre: "Équipement de salles de classe à Aboisso-Comoé",
    categorie: 'Éducation',
    lieu: 'Aboisso-Comoé',
    annee: '2024',
    statut: 'Achevé',
    description: "Dotation en tables-bancs, tableaux et matériels pédagogiques pour plusieurs établissements de la région.",
    image: projet1,
  },
  {
    titre: "Campagne de sensibilisation sanitaire",
    categorie: 'Santé',
    lieu: 'Région',
    annee: '2024',
    statut: 'Achevé',
    description: "Campagnes de sensibilisation sur l'hygiène, la prévention et l'accès aux soins dans les communautés rurales.",
    image: actualite1,
  },
  {
    titre: "Appui à la filière cacao",
    categorie: 'Agriculture',
    lieu: 'Région',
    annee: '2023-2024',
    statut: 'Achevé',
    description: "Accompagnement des coopératives, formation à la transformation et appui à l'accès aux marchés.",
    image: projet3,            // ← projet3 utilisé ici
  },
  {
    titre: "Réunion de coordination avec les partenaires",
    categorie: 'Infrastructures',
    lieu: 'Abengourou',
    annee: '2024',
    statut: 'Achevé',
    description: "Rencontres de travail avec les partenaires techniques et financiers pour la planification des projets structurants.",
    image: presidentDjuablin,  // ← presidentDjuablin utilisé ici
  },
  {
    titre: "Cérémonie de remise de prix et de reconnaissance",
    categorie: 'Éducation',
    lieu: 'Région',
    annee: '2024',
    statut: 'Achevé',
    description: "Cérémonie de distinction des meilleurs élèves et enseignants de la région, en présence des autorités.",
    image: actualite2,         // ← actualite2 utilisé
  },
  {
    titre: "Lancement du programme agricole régional",
    categorie: 'Agriculture',
    lieu: 'Région',
    annee: '2025',
    statut: 'En cours',
    description: "Nouveau programme d'appui aux jeunes agriculteurs avec financement et accompagnement technique.",
    image: actualite3,         // ← actualite3 utilisé
  },
]

// Filtrage
const projetsFiltres = computed(() => {
  if (activeCategory.value === 'Toutes') return realisations
  return realisations.filter((p) => p.categorie === activeCategory.value)
})
</script>