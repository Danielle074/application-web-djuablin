<template>
  <div class="min-h-screen flex">
    <!-- Colonne gauche : formulaire -->
    <div class="w-full lg:w-1/2 flex items-center justify-center bg-[#f8f7fe] px-6 py-12">
      <div class="w-full max-w-md space-y-8">
        <!-- Logo / En-tête -->
        <div class="text-center space-y-4">
          <!-- Logo bien grand, centré -->
          <RouterLink to="/" class="inline-block">
            <img
              :src="logoDjuablin"
              alt="Logo Conseil Régional de l'Indénié-Djuablin"
              class="h-24 sm:h-28 w-auto mx-auto object-contain"
            />
          </RouterLink>

          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Bienvenue
          </h1>
          <p class="text-sm text-slate-600">
            Connectez-vous à votre espace pour accéder à vos services.
          </p>
        </div>

        <!-- Formulaire -->
        <Card class="bg-white rounded-2xl p-6 sm:p-8 border border-[#d1d1d1]/40 shadow-sm">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                Email <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#d1d1d1] bg-[#f8f7fe] text-sm text-slate-800 focus:outline-none focus:border-[#117647] focus:ring-2 focus:ring-[#117647]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="block text-sm font-semibold text-slate-700">
                  Mot de passe <span class="text-red-500">*</span>
                </label>
                <a href="#" class="text-xs font-semibold text-[#117647] hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
              <div class="relative">
                <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  placeholder="••••••••"
                  class="w-full pl-10 pr-12 py-3 rounded-lg border border-[#d1d1d1] bg-[#f8f7fe] text-sm text-slate-800 focus:outline-none focus:border-[#117647] focus:ring-2 focus:ring-[#117647]/20 transition-all"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#117647] transition-colors"
                  :aria-label="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'"
                >
                  <EyeOff v-if="showPassword" class="w-4 h-4" />
                  <Eye v-else class="w-4 h-4" />
                </button>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <input
                id="remember"
                v-model="form.remember"
                type="checkbox"
                class="w-4 h-4 rounded border-[#d1d1d1] text-[#117647] focus:ring-[#117647]/30"
              />
              <label for="remember" class="text-sm text-slate-600">
                Se souvenir de moi
              </label>
            </div>

            <!-- Message d'erreur -->
            <div
              v-if="erreur"
              class="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg flex items-center gap-2"
            >
              <AlertCircle class="w-5 h-5 shrink-0" />
              {{ erreur }}
            </div>

            <button
              type="submit"
              :disabled="envoiEnCours"
              class="inline-flex items-center justify-center gap-2 w-full bg-[#f1ba46] hover:bg-[#e0a935] disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-semibold px-6 py-3 rounded-lg shadow transition-all"
            >
              <span>{{ envoiEnCours ? 'Connexion...' : 'Se connecter' }}</span>
              <LogIn v-if="!envoiEnCours" class="w-4 h-4" />
            </button>
          </form>

          <div class="mt-6 pt-6 border-t border-[#d1d1d1]/40 text-center">
            <p class="text-sm text-slate-600">
              Vous n'avez pas de compte ?
              <RouterLink to="/contact" class="font-semibold text-[#117647] hover:underline">
                Contactez-nous
              </RouterLink>
            </p>
          </div>
        </Card>

        <!-- Retour accueil -->
        <div class="text-center">
          <RouterLink to="/" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#117647] transition-colors">
            <ArrowLeft class="w-4 h-4" />
            Retour à l'accueil
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Colonne droite : image -->
    <div class="hidden lg:flex lg:w-1/2 relative bg-[#117647]">
      <img
        :src="loginImage"
        alt="Conseil Régional de l'Indénié-Djuablin"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- Overlay dégradé pour lisibilité -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#117647]/95 via-[#117647]/60 to-[#117647]/30"></div>

      <!-- Contenu superposé -->
      <div class="relative z-10 flex flex-col justify-end p-12 text-white space-y-4">
        <Quote class="w-8 h-8 text-[#f1ba46]" />
        <p class="text-xl sm:text-2xl font-bold leading-snug max-w-md">
          « La Réussite appartient à tout le monde. C'est au travail d'équipe qu'revient le mérite... »
        </p>
        <div class="pt-2">
          <p class="font-bold text-[#f1ba46]">WOUADJA ESSAY</p>
          <p class="text-xs text-emerald-100 uppercase tracking-wider">
            Président du Conseil Régional
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  ArrowLeft,
  Quote,
  AlertCircle,
} from 'lucide-vue-next'

// Composant Shadcn Vue
import { Card } from '@/components/ui/card'

// Images (à placer dans src/assets/images/)
import logoDjuablin from '@/assets/images/logo-djuablin.png'
import loginImage from '@/assets/images/hero-home.png' // remplacez par login-image.jpg

// Router
const router = useRouter()

// Formulaire
const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const showPassword = ref(false)
const envoiEnCours = ref(false)
const erreur = ref('')

const handleSubmit = () => {
  erreur.value = ''
  envoiEnCours.value = true

  setTimeout(() => {
    envoiEnCours.value = false

    if (form.email && form.password) {
      router.push('/')
    } else {
      erreur.value = 'Veuillez remplir tous les champs obligatoires.'
    }
  }, 1000)
}
</script>