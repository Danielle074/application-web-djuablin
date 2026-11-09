<template>
  <div class="min-h-screen bg-[#f8f7fe] text-slate-800 font-sans">
    <!-- Hero -->
    <section class="py-14 md:py-20 bg-gradient-to-b from-white to-[#f8f7fe] border-b border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7 space-y-5">
          <span class="inline-block bg-[#117647]/10 text-[#117647] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Territoire
          </span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#117647] leading-tight">
            La Région de l'Indénié-Djuablin
          </h1>
          <p class="text-base sm:text-lg text-[#f1ba46] font-medium leading-relaxed">
            Terre d'histoire, de culture et d'avenir, au cœur de l'Est de la Côte d'Ivoire.
          </p>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Située à l'est du pays, la région de l'Indénié-Djuablin regroupe plusieurs départements et
            communes. Elle est connue pour sa richesse agricole, son dynamisme commercial et la
            diversité de ses cultures. Abengourou, son chef-lieu, en est la capitale administrative
            et économique.
          </p>
        </div>

        <div class="lg:col-span-5">
          <Card class="bg-slate-100 rounded-2xl p-4 shadow-sm border border-[#d1d1d1]/50 w-full">
            <img
              :src="carteRegion"
              alt="Carte de la région Indénié-Djuablin"
              class="w-full h-auto rounded-xl object-contain max-h-[380px]"
            />
            <div class="mt-4 p-4 bg-white/90 backdrop-blur rounded-xl border border-[#d1d1d1]/40">
              <p class="text-xs sm:text-sm text-slate-600 italic">
                « Une région fière de son patrimoine, tournée vers le progrès. »
              </p>
              <span class="block mt-2 text-xs font-bold text-[#117647] tracking-wider uppercase">
                Indénié-Djuablin
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Chiffres clés de la région -->
    <section class="py-10 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="space-y-1">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#f1ba46]">1</h2>
          <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Région</p>
        </div>
        <div class="space-y-1">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#f1ba46]">6+</h2>
          <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Départements</p>
        </div>
        <div class="space-y-1">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#f1ba46]">1M+</h2>
          <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Habitants</p>
        </div>
        <div class="space-y-1">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#f1ba46]">Abengourou</h2>
          <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Chef-lieu</p>
        </div>
      </div>
    </section>

    <!-- Présentation géographique -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Une région au carrefour de l'Est ivoirien
        </h2>
        <Card class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#d1d1d1]/40 shadow-sm">
          <div class="lg:col-span-5 overflow-hidden rounded-xl">
            <img
              :src="paysageRegion"
              alt="Paysage de la région Indénié-Djuablin"
              class="w-full h-auto object-cover rounded-xl shadow"
            />
          </div>
          <div class="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              La région de l'Indénié-Djuablin est située dans le district de la Comoé, à l'est de la
              Côte d'Ivoire. Elle est frontalière du Ghana au sud-est et occupe une position
              stratégique sur les axes de communication vers le centre et le nord du pays.
            </p>
            <p>
              Son relief est majoritairement composé de plaines et de bas-plateaux, avec un climat
              tropical humide favorable à l'agriculture. La région est traversée par plusieurs cours
              d'eau et bénéficie de terres fertiles propices aux cultures de rente et vivrières.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="bg-[#f8f7fe] border border-[#d1d1d1]/40 rounded-xl p-4">
                <p class="text-xs uppercase text-slate-500 font-semibold mb-1">Superficie</p>
                <p class="text-lg font-bold text-[#117647]">≈ 6 900 km²</p>
              </div>
              <div class="bg-[#f8f7fe] border border-[#d1d1d1]/40 rounded-xl p-4">
                <p class="text-xs uppercase text-slate-500 font-semibold mb-1">Climat</p>
                <p class="text-lg font-bold text-[#117647]">Tropical humide</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <!-- Départements -->
    <section class="py-16 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Les Départements
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card class="bg-[#f8f7fe] rounded-2xl p-6 border border-[#d1d1d1]/40 shadow-sm">
            <div class="bg-[#117647] text-white p-3 rounded-lg w-fit mb-4">
              <MapPin class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Abengourou</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Chef-lieu de la région, important centre commercial et administratif de l'Est ivoirien.
            </p>
          </Card>

          <Card class="bg-[#f8f7fe] rounded-2xl p-6 border border-[#d1d1d1]/40 shadow-sm">
            <div class="bg-[#117647] text-white p-3 rounded-lg w-fit mb-4">
              <MapPin class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Aboisso-Comoé</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Zone forestière et agricole, réputée pour ses plantations et sa production de cacao.
            </p>
          </Card>

          <Card class="bg-[#f8f7fe] rounded-2xl p-6 border border-[#d1d1d1]/40 shadow-sm">
            <div class="bg-[#117647] text-white p-3 rounded-lg w-fit mb-4">
              <MapPin class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Betté</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Département frontalier du Ghana, avec un fort potentiel agricole et commercial.
            </p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Culture & Patrimoine -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Culture & Patrimoine
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="relative group rounded-2xl overflow-hidden shadow-md border border-[#d1d1d1]/30 h-72">
            <img
              :src="cultureRegion"
              alt="Culture de la région"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end">
              <span class="text-white font-bold text-lg bg-[#117647]/90 px-4 py-1.5 rounded-lg backdrop-blur">
                Traditions & Danses
              </span>
            </div>
          </div>

          <div class="relative group rounded-2xl overflow-hidden shadow-md border border-[#d1d1d1]/30 h-72">
            <img
              :src="marcheRegion"
              alt="Marché de la région"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end">
              <span class="text-white font-bold text-lg bg-[#117647]/90 px-4 py-1.5 rounded-lg backdrop-blur">
                Marchés & Savoir-faire
              </span>
            </div>
          </div>

          <div class="relative group rounded-2xl overflow-hidden shadow-md border border-[#d1d1d1]/30 h-72">
            <img
              :src="artisanatRegion"
              alt="Artisanat de la région"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end">
              <span class="text-white font-bold text-lg bg-[#117647]/90 px-4 py-1.5 rounded-lg backdrop-blur">
                Artisanat
              </span>
            </div>
          </div>

          <div class="relative group rounded-2xl overflow-hidden shadow-md border border-[#d1d1d1]/30 h-72">
            <img
              :src="gastronomieRegion"
              alt="Gastronomie de la région"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end">
              <span class="text-white font-bold text-lg bg-[#117647]/90 px-4 py-1.5 rounded-lg backdrop-blur">
                Gastronomie
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Potentialités économiques -->
    <section class="py-16 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Potentialités Économiques
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <Sprout class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Agriculture</h3>
              <p class="text-xs text-emerald-100 line-clamp-3">
                Cacao, café, hévéa, anacarde, vivriers : une agriculture diversifiée et dynamique.
              </p>
            </div>
          </div>

          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <Store class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Commerce</h3>
              <p class="text-xs text-emerald-100 line-clamp-3">
                Position stratégique aux portes du Ghana, marchés actifs et échanges transfrontaliers.
              </p>
            </div>
          </div>

          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <Factory class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Industrie</h3>
              <p class="text-xs text-emerald-100 line-clamp-3">
                Transformation des produits agricoles, agro-industrie et petites unités de production.
              </p>
            </div>
          </div>

          <div class="bg-[#117647] text-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56">
            <div class="bg-white/20 p-2.5 rounded-lg w-fit">
              <Mountain class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Tourisme</h3>
              <p class="text-xs text-emerald-100 line-clamp-3">
                Sites naturels, traditions vivantes et patrimoine culturel à valoriser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-[#117647]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 class="text-2xl sm:text-3xl font-bold text-white">
          Découvrez nos actions sur le territoire
        </h2>
        <p class="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto">
          Le Conseil Régional agit chaque jour pour valoriser les atouts de l'Indénié-Djuablin
          et améliorer le cadre de vie de ses populations.
        </p>
        <div class="flex flex-wrap justify-center gap-4 pt-2">
          <RouterLink
            to="/projets"
            class="inline-flex items-center gap-2 bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 font-semibold px-8 py-3 rounded-lg shadow transition-all"
          >
            Voir nos projets
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
          <RouterLink
            to="/conseil-regional"
            class="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition-all"
          >
            Le Conseil Régional
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
  MapPin,
  Sprout,
  Store,
  Factory,
  Mountain,
} from 'lucide-vue-next'

// Composant Shadcn Vue
import { Card } from '@/components/ui/card'

// Importation des images (à placer dans src/assets/images/)
import carteRegion from '@/assets/images/hero-home.png' // réutilisée, remplacez par une vraie carte
import paysageRegion from '@/assets/images/paysage.jpg'
import cultureRegion from '@/assets/images/culture.jpg'
import marcheRegion from '@/assets/images/marche.jpg'
import artisanatRegion from '@/assets/images/artisanat.jpg'
import gastronomieRegion from '@/assets/images/gastronomie.jpg'
</script>