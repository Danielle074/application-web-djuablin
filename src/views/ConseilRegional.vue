<template>
  <div class="min-h-screen bg-[#f8f7fe] text-slate-800 font-sans">
    <!-- Hero de la page -->
    <section class="py-14 md:py-20 bg-gradient-to-b from-white to-[#f8f7fe] border-b border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7 space-y-5">
          <span class="inline-block bg-[#117647]/10 text-[#117647] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Institution
          </span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#117647] leading-tight">
            Le Conseil Régional de l'Indénié-Djuablin
          </h1>
          <p class="text-base sm:text-lg text-[#f1ba46] font-medium leading-relaxed">
            Une institution au service du développement local, de la solidarité et de la prospérité de nos territoires.
          </p>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Le Conseil Régional de l'Indénié-Djuablin est l'organe délibérant de la région. Il impulse, coordonne et
            accompagne les projets structurants en matière d'éducation, de santé, d'infrastructures et d'agriculture
            au bénéfice des populations.
          </p>
        </div>

        <div class="lg:col-span-5">
          <Card class="bg-slate-100 rounded-2xl p-4 shadow-sm border border-[#d1d1d1]/50 w-full">
            <img
              :src="conseilSiege"
              alt="Siège du Conseil Régional de l'Indénié-Djuablin"
              class="w-full h-auto rounded-xl object-cover max-h-[380px]"
            />
            <div class="mt-4 p-4 bg-white/90 backdrop-blur rounded-xl border border-[#d1d1d1]/40">
              <p class="text-xs sm:text-sm text-slate-600 italic">
                « Le développement de notre région est l'affaire de tous. Ensemble, nous bâtissons l'avenir. »
              </p>
              <span class="block mt-2 text-xs font-bold text-[#117647] tracking-wider uppercase">
                WOUADJA ESSAY — Président
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Mission / Vision / Valeurs -->
    <section class="py-16 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Notre Mission, Notre Vision
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card class="bg-[#f8f7fe] rounded-2xl p-6 border border-[#d1d1d1]/40 shadow-sm">
            <div class="bg-[#117647] text-white p-3 rounded-lg w-fit mb-4">
              <Target class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Mission</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Promouvoir le développement économique, social et culturel de la région en concertation avec l'État
              et les collectivités.
            </p>
          </Card>

          <Card class="bg-[#f8f7fe] rounded-2xl p-6 border border-[#d1d1d1]/40 shadow-sm">
            <div class="bg-[#117647] text-white p-3 rounded-lg w-fit mb-4">
              <Eye class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Vision</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Faire de l'Indénié-Djuablin une région modèle, attractive et solidaire, où chaque citoyen
              bénéficie des fruits du progrès.
            </p>
          </Card>

          <Card class="bg-[#f8f7fe] rounded-2xl p-6 border border-[#d1d1d1]/40 shadow-sm">
            <div class="bg-[#117647] text-white p-3 rounded-lg w-fit mb-4">
              <Heart class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Valeurs</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Engagement, transparence, solidarité et travail d'équipe au service de l'intérêt général.
            </p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Mot du Président -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Le Mot du Président
        </h2>
        <Card class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#d1d1d1]/40 shadow-sm">
          <div class="lg:col-span-5 overflow-hidden rounded-xl">
            <img
              :src="presidentDjuablin"
              alt="Président Wouadja Essay"
              class="w-full h-auto object-cover rounded-xl shadow"
            />
          </div>
          <div class="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
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

    <!-- Composition du Conseil -->
    <section class="py-16 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Composition du Conseil
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card class="bg-white rounded-2xl overflow-hidden border border-[#d1d1d1]/40 shadow-sm">
            <img :src="membresConseil" alt="Membres du Conseil" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-slate-900 text-base mb-1">Les Conseillers Régionaux</h3>
              <p class="text-sm text-slate-600">
                Élus pour représenter les populations et voter les orientations budgétaires et stratégiques.
              </p>
            </div>
          </Card>

          <Card class="bg-white rounded-2xl overflow-hidden border border-[#d1d1d1]/40 shadow-sm">
            <img :src="reunionConseil" alt="Réunion du bureau" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-slate-900 text-base mb-1">Le Bureau Exécutif</h3>
              <p class="text-sm text-slate-600">
                Assure la mise en œuvre des délibérations et la coordination des activités de la région.
              </p>
            </div>
          </Card>

          <Card class="bg-white rounded-2xl overflow-hidden border border-[#d1d1d1]/40 shadow-sm">
            <img :src="administrationConseil" alt="Administration" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="font-bold text-slate-900 text-base mb-1">L'Administration</h3>
              <p class="text-sm text-slate-600">
                Appuie techniquement le Conseil dans la préparation, l'exécution et le suivi des projets.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Domaines de compétence -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Nos Domaines de Compétence
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <GraduationCap class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Éducation</h3>
              <p class="text-xs text-emerald-100 line-clamp-3">
                Construction et réhabilitation d'écoles, appui à la scolarisation et à la formation.
              </p>
            </div>
          </div>

          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <HeartPulse class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Santé</h3>
              <p class="text-xs text-emerald-100 line-clamp-3">
                Appui aux centres de santé, équipements et sensibilisation des populations.
              </p>
            </div>
          </div>

          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <Building2 class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Infrastructures</h3>
              <p class="text-xs text-emerald-100 line-clamp-3">
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
              <p class="text-xs text-emerald-100 line-clamp-3">
                Appui aux producteurs, valorisation des filières et sécurité alimentaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Contact -->
    <section class="py-16 bg-[#117647]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 class="text-2xl sm:text-3xl font-bold text-white">
          Une question, un projet, une demande ?
        </h2>
        <p class="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto">
          Le Conseil Régional est à votre écoute. Contactez-nous pour toute information sur nos actions,
          nos programmes ou nos services.
        </p>
        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 font-semibold px-8 py-3 rounded-lg shadow transition-all"
        >
          Nous contacter
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  GraduationCap,
  HeartPulse,
  Building2,
  Sprout,
} from 'lucide-vue-next'

// Composant Shadcn Vue
import { Card } from '@/components/ui/card'

// Importation des images (à placer dans src/assets/images/)
import presidentDjuablin from '@/assets/images/president-djuablin.png'
import conseilSiege from '@/assets/images/ville.jpg'
import membresConseil from '@/assets/images/membre.jpg'
import reunionConseil from '@/assets/images/reunion.jpg'
import administrationConseil from '@/assets/images/projet-2.png'
</script>