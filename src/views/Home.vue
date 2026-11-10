<template>
  <div class="min-h-screen bg-[#f8f7fe] text-slate-800 font-sans">
    <!-- Section Hero -->
    <section class="py-12 md:py-16 bg-gradient-to-b from-white to-[#f8f7fe]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Texte Hero (Gauche) -->
        <div class="lg:col-span-6 space-y-6">
          <img :src="logoDjuablin" alt="Logo Indénié-Djuablin" class="h-16 w-auto mb-2 lg:hidden" />
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#117647] leading-tight">
            Ensemble, bâtissons le développement de notre région.
          </h1>
          <p class="text-base sm:text-lg text-[#f1ba46] font-medium leading-relaxed">
            Une vision, des actions concrètes et un engagement au service des populations.
          </p>
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <RouterLink 
              to="/realisations" 
              class="bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 font-semibold px-6 py-3 rounded-lg shadow transition-all inline-block text-center"
            >
              Nos réalisations
            </RouterLink>

            <RouterLink 
              to="/conseil-regional" 
              class="border border-[#d1d1d1] text-slate-700 hover:border-[#117647] hover:text-[#117647] font-medium px-6 py-3 rounded-lg flex items-center gap-2 bg-white transition-all"
            >
              <span>En savoir plus</span>
              <ArrowRight class="w-4 h-4" />
            </RouterLink>
          </div>
        </div>

        <!-- Carte & Citation Hero (Droite) -->
        <div class="lg:col-span-6 flex flex-col items-center">
          <Card class="bg-slate-100 rounded-2xl p-4 shadow-sm border border-[#d1d1d1]/50 w-full max-w-md">
            <img :src="heroHome" alt="Carte Région Indénié-Djuablin" class="w-full h-auto rounded-xl object-contain max-h-[420px]" />
            <div class="mt-4 p-4 bg-white/90 backdrop-blur rounded-xl border border-[#d1d1d1]/40">
              <Quote class="w-6 h-6 text-[#117647] mb-2" />
              <p class="text-xs sm:text-sm text-slate-600 italic">
                La Réussite appartient à tout le monde. C'est au travail d'équipe qu'revient le mérite...
              </p>
              <span class="block mt-2 text-xs font-bold text-[#117647] tracking-wider uppercase">
                WOUADJA ESSAY
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Section Statistiques / Chiffres Clés -->
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

    <!-- Section Mot du Président -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Mot du Président
        </h2>
        <Card class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#d1d1d1]/40 shadow-sm">
          <div class="lg:col-span-6 overflow-hidden rounded-xl">
            <img :src="presidentDjuablin" alt="Président Wouadja Essay" class="w-full h-auto object-cover rounded-xl shadow" />
          </div>
          <div class="lg:col-span-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Chères populations de l'Indénié-Djuablin, c'est avec un profond engagement que le Conseil Régional
              poursuit sa mission au service du développement de notre territoire. Chaque projet que nous portons
              traduit notre volonté de bâtir une région plus juste, plus prospère et plus solidaire.
            </p>
            <p>
              Nous travaillons main dans la main avec les communes, les partenaires techniques et financiers et
              l'ensemble des acteurs locaux pour répondre aux besoins prioritaires de nos concitoyens.
            </p>
            <p class="italic text-slate-700 font-medium">
              « La Réussite appartient à tout le monde. C'est au travail d'équipe qu'revient le mérite... »
            </p>
            <div class="pt-4 border-t border-[#d1d1d1]/30">
              <h3 class="font-bold text-slate-900 text-lg">Wouadja Essay</h3>
              <p class="text-xs text-slate-500">Président du Conseil Régional de l'Indénié-Djuablin</p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <!-- Section Nos Domaines D'action -->
    <section class="py-16 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Nos Domaines D'action
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <GraduationCap class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Éducation</h3>
              <p class="text-xs text-emerald-100 line-clamp-2">
                Construction d'écoles, équipements et appui à la scolarisation des enfants.
              </p>
            </div>
          </div>

          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <HeartPulse class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Santé</h3>
              <p class="text-xs text-emerald-100 line-clamp-2">
                Appui aux centres de santé, équipements médicaux et sensibilisation.
              </p>
            </div>
          </div>

          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <Building2 class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Infrastructures</h3>
              <p class="text-xs text-emerald-100 line-clamp-2">
                Aménagement des voies, marchés et équipements collectifs structurants.
              </p>
            </div>
          </div>

          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <Sprout class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Agriculture</h3>
              <p class="text-xs text-emerald-100 line-clamp-2">
                Appui aux producteurs, valorisation des filières et sécurité alimentaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Projets et Réalisations -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Projets et Réalisations
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="relative group rounded-2xl overflow-hidden shadow-md border border-[#d1d1d1]/30 h-64">
            <img :src="projet1" alt="Projet Santé" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end">
              <span class="text-white font-bold text-lg bg-[#117647]/90 px-4 py-1.5 rounded-lg backdrop-blur">
                Santé
              </span>
            </div>
          </div>

          <div class="relative group rounded-2xl overflow-hidden shadow-md border border-[#d1d1d1]/30 h-64">
            <img :src="projet2" alt="Projet Infrastructure" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end">
              <span class="text-white font-bold text-lg bg-[#117647]/90 px-4 py-1.5 rounded-lg backdrop-blur">
                Infrastructure
              </span>
            </div>
          </div>

          <div class="relative group rounded-2xl overflow-hidden shadow-md border border-[#d1d1d1]/30 h-64">
            <img :src="projet3" alt="Projet Éducation" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end">
              <span class="text-white font-bold text-lg bg-[#117647]/90 px-4 py-1.5 rounded-lg backdrop-blur">
                Éducation
              </span>
            </div>
          </div>

          <div class="relative group rounded-2xl overflow-hidden shadow-md border border-[#d1d1d1]/30 h-64">
            <img :src="presidentDjuablin" alt="Projet Administration" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end">
              <span class="text-white font-bold text-lg bg-[#117647]/90 px-4 py-1.5 rounded-lg backdrop-blur">
                Administration
              </span>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink 
            to="/realisations" 
            class="bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 font-semibold px-8 py-3 rounded-lg shadow transition-all inline-flex items-center gap-2"
          >
            Voir toutes nos réalisations
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Section Documentation -->
    <section class="py-16 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Documentation
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="flex items-center justify-between p-5 bg-[#f8f7fe] border border-[#d1d1d1]/50 rounded-xl hover:border-[#117647] transition-all cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="bg-[#117647] text-white p-3 rounded-lg">
                <FileText class="w-6 h-6" />
              </div>
              <span class="font-semibold text-slate-800 text-sm sm:text-base">
                Rapport d'activités
              </span>
            </div>
            <Download class="w-5 h-5 text-slate-400 hover:text-[#117647]" />
          </div>

          <div class="flex items-center justify-between p-5 bg-[#f8f7fe] border border-[#d1d1d1]/50 rounded-xl hover:border-[#117647] transition-all cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="bg-[#117647] text-white p-3 rounded-lg">
                <FileSpreadsheet class="w-6 h-6" />
              </div>
              <span class="font-semibold text-slate-800 text-sm sm:text-base">
                Plan de développement régional
              </span>
            </div>
            <Download class="w-5 h-5 text-slate-400 hover:text-[#117647]" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section Actualités -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Actualités
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card class="bg-white rounded-2xl overflow-hidden border border-[#d1d1d1]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div class="relative h-48 overflow-hidden">
                <img :src="actualite1" alt="Actualité 1" class="w-full h-full object-cover" />
                <span class="absolute top-4 left-4 bg-[#f1ba46] text-slate-900 text-xs font-bold px-3 py-1 rounded-md">
                  Éducation
                </span>
              </div>
              <div class="p-6">
                <p class="text-xs text-slate-500 mb-2">Conseil Régional • 2026</p>
                <h3 class="font-bold text-slate-900 text-base line-clamp-2">
                  Visite de terrain et évaluation des chantiers dans la région
                </h3>
              </div>
            </div>
          </Card>

          <Card class="bg-white rounded-2xl overflow-hidden border border-[#d1d1d1]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div class="relative h-48 overflow-hidden">
                <img :src="actualite2" alt="Actualité 2" class="w-full h-full object-cover" />
                <span class="absolute top-4 left-4 bg-[#f1ba46] text-slate-900 text-xs font-bold px-3 py-1 rounded-md">
                  Éducation
                </span>
              </div>
              <div class="p-6">
                <p class="text-xs text-slate-500 mb-2">Préfecture d'Abengourou • 2026</p>
                <h3 class="font-bold text-slate-900 text-base line-clamp-2">
                  Réunion de travail à la préfecture d'Abengourou
                </h3>
              </div>
            </div>
          </Card>

          <Card class="bg-white rounded-2xl overflow-hidden border border-[#d1d1d1]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div class="relative h-48 overflow-hidden">
                <img :src="actualite3" alt="Actualité 3" class="w-full h-full object-cover" />
                <span class="absolute top-4 left-4 bg-[#f1ba46] text-slate-900 text-xs font-bold px-3 py-1 rounded-md">
                  Éducation
                </span>
              </div>
              <div class="p-6">
                <p class="text-xs text-slate-500 mb-2">Cérémonie • 2026</p>
                <h3 class="font-bold text-slate-900 text-base line-clamp-2">
                  Cérémonie de remise de prix et de reconnaissance
                </h3>
              </div>
            </div>
          </Card>
        </div>

        <div class="text-center mt-12">
          <RouterLink 
            to="/actualites" 
            class="bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 font-semibold px-8 py-3 rounded-lg shadow transition-all inline-flex items-center gap-2"
          >
            Voir plus
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { 
  ArrowRight, 
  Quote, 
  GraduationCap, 
  HeartPulse, 
  Building2, 
  Sprout, 
  FileText, 
  FileSpreadsheet, 
  Download 
} from 'lucide-vue-next'

// Composants Shadcn Vue
import { Card } from '@/components/ui/card'

// Importation des images
import actualite1 from '@/assets/images/actualite-1.png'
import actualite2 from '@/assets/images/actualite-2.png'
import actualite3 from '@/assets/images/actualite-3.png'
import heroHome from '@/assets/images/hero-home.png'
import logoDjuablin from '@/assets/images/logo-djuablin.png'
import presidentDjuablin from '@/assets/images/president-djuablin.png'
import projet1 from '@/assets/images/projet-1.png'
import projet2 from '@/assets/images/projet-2.png'
import projet3 from '@/assets/images/projet-3.png'
</script>