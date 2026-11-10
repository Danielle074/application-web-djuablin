<template>
  <div class="min-h-screen flex flex-col bg-[#f8f7fe] font-sans antialiased">
    <!-- ================= NAVBAR / HEADER ================= -->
    <header class="w-full bg-white border-b border-[#d1d1d1]/40 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3">
          <img :src="logoDjuablin" alt="Logo Indénié-Djuablin" class="h-14 w-auto object-contain" />
        </RouterLink>

        <!-- Navigation Ordinateur (Desktop) -->
        <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <RouterLink 
            to="/" 
            class="hover:text-[#117647] transition-colors"
            active-class="text-[#117647] font-bold"
          >
            Accueil
          </RouterLink>
          <RouterLink 
            to="/conseil-regional" 
            class="hover:text-[#117647] transition-colors"
            active-class="text-[#117647] font-bold"
          >
            Le Conseil régional
          </RouterLink>
          <RouterLink 
            to="/notre-region" 
            class="hover:text-[#117647] transition-colors"
            active-class="text-[#117647] font-bold"
          >
            Notre région
          </RouterLink>
          <RouterLink 
            to="/realisations" 
            class="hover:text-[#117647] transition-colors"
            active-class="text-[#117647] font-bold"
          >
            Nos Réalisations
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="hover:text-[#117647] transition-colors"
            active-class="text-[#117647] font-bold"
          >
            Contacts
          </RouterLink>
        </nav>

        <!-- Bouton Connexion (Desktop) -->
        <div class="hidden lg:flex items-center">
          <RouterLink 
            to="/login"
            class="bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 font-semibold px-7 py-2.5 rounded-full text-sm transition-all shadow-sm"
          >
            Connexion
          </RouterLink>
        </div>

        <!-- Bouton Menu Burger (Mobile & Tablette) -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          type="button"
          class="lg:hidden p-2 rounded-lg text-slate-600 hover:text-[#117647] hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <Menu v-if="!isMenuOpen" class="w-7 h-7" />
          <X v-else class="w-7 h-7" />
        </button>
      </div>

      <!-- Menu Deroulant Mobile / Tablette -->
      <transition 
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div v-if="isMenuOpen" class="lg:hidden bg-white border-t border-[#d1d1d1]/30 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <RouterLink 
            to="/" 
            @click="isMenuOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#117647]"
            active-class="bg-emerald-50 text-[#117647] font-bold"
          >
            Accueil
          </RouterLink>
          <RouterLink 
            to="/conseil-regional" 
            @click="isMenuOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#117647]"
            active-class="bg-emerald-50 text-[#117647] font-bold"
          >
            Le Conseil régional
          </RouterLink>
          <RouterLink 
            to="/notre-region" 
            @click="isMenuOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#117647]"
            active-class="bg-emerald-50 text-[#117647] font-bold"
          >
            Notre région
          </RouterLink>
          <RouterLink 
            to="/realisations" 
            @click="isMenuOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#117647]"
            active-class="bg-emerald-50 text-[#117647] font-bold"
          >
            Nos Réalisations
          </RouterLink>
          <RouterLink 
            to="/contact" 
            @click="isMenuOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#117647]"
            active-class="bg-emerald-50 text-[#117647] font-bold"
          >
            Contacts
          </RouterLink>
          
          <div class="pt-2">
            <RouterLink 
              to="/login" 
              @click="isMenuOpen = false"
              class="block w-full text-center bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 font-semibold px-6 py-2.5 rounded-full text-sm transition-all"
            >
              Connexion
            </RouterLink>
          </div>
        </div>
      </transition>
    </header>

    <!-- ================= CONTENU PRINCIPAL (ROUTER VIEW) ================= -->
    <main class="flex-grow">
      <RouterView />
    </main>

    <!-- ================= FOOTER ================= -->
    <footer class="bg-[#117647] text-white py-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        <!-- Colonne 1: Logo, Newsletter & Socials -->
        <div class="lg:col-span-5 space-y-6">
          <img :src="logoDjuablin" alt="Logo Indénié-Djuablin" class="h-16 w-auto bg-white rounded-full p-1" />
          
          <div class="space-y-3">
            <h3 class="font-bold text-lg text-white">Restez informé</h3>
            <p class="text-xs sm:text-sm text-emerald-100">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités
              du Conseil Régional de l'Indénié-Djuablin.
            </p>
            
            <!-- Newsletter Input -->
            <form @submit.prevent class="relative max-w-sm flex items-center">
              <input 
                type="email" 
                placeholder="Entrez votre email" 
                class="w-full pl-4 pr-14 py-3 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f1ba46]"
              />
              <button 
                type="submit" 
                class="absolute right-1.5 bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 p-2.5 rounded-xl transition-all"
                aria-label="S'abonner"
              >
                <ArrowUpRight class="w-4 h-4" />
              </button>
            </form>
            
            <p class="text-[11px] text-emerald-200/80">
              En vous abonnant, vous acceptez notre politique de confidentialité.
            </p>
          </div>

          <!-- Reseaux Sociaux -->
          <div class="flex items-center gap-3 pt-2">
            <a href="#" class="w-8 h-8 rounded-full bg-white text-[#117647] flex items-center justify-between p-1.5 hover:bg-[#f1ba46] transition-colors" aria-label="Facebook">
              <Facebook class="w-full h-full fill-current stroke-none" />
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white text-[#117647] flex items-center justify-between p-1.5 hover:bg-[#f1ba46] transition-colors" aria-label="Twitter">
              <Twitter class="w-full h-full fill-current stroke-none" />
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white text-[#117647] flex items-center justify-between p-1.5 hover:bg-[#f1ba46] transition-colors" aria-label="LinkedIn">
              <Linkedin class="w-full h-full fill-current stroke-none" />
            </a>
          </div>
        </div>

        <!-- Colonne 2: Liens Utiles -->
        <div class="lg:col-span-3 space-y-4">
          <h3 class="font-bold text-lg text-white">Liens Utiles</h3>
          <ul class="space-y-2.5 text-sm text-emerald-100">
            <li>
              <RouterLink to="/conseil-regional" class="hover:underline hover:text-white transition-colors">
                Le conseil régional
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/notre-region" class="hover:underline hover:text-white transition-colors">
                Notre région
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/realisations" class="hover:underline hover:text-white transition-colors">
                Nos réalisations
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/actualites" class="hover:underline hover:text-white transition-colors">
                Actualités
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="hover:underline hover:text-white transition-colors">
                Contacts
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Colonne 3: Contact -->
        <div class="lg:col-span-4 space-y-4">
          <h3 class="font-bold text-lg text-white">Nous contacter</h3>
          <div class="space-y-3 text-sm text-emerald-100">
            <p>
              Siège du Conseil Régional de l'Indénié-Djuablin<br />
              Abengourou, Côte d'Ivoire
            </p>
            <p class="flex items-center gap-2 text-emerald-200">
              <Mail class="w-4 h-4" />
              <span>contact@conseil-djuablin.ci</span>
            </p>
            <p class="font-semibold text-white">+225 00 00 00 00</p>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin 
} from 'lucide-vue-next'

// Importation de l'image du logo depuis assets
import logoDjuablin from '@/assets/images/logo-djuablin.png'

const isMenuOpen = ref(false)
</script>