<template>
  <div class="min-h-screen bg-[#f8f7fe] text-slate-800 font-sans">
    <!-- Hero -->
    <section class="py-14 md:py-20 bg-gradient-to-b from-white to-[#f8f7fe] border-b border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <span class="inline-block bg-[#117647]/10 text-[#117647] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Contact
        </span>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#117647] leading-tight">
          Contactez le Conseil Régional
        </h1>
        <p class="text-base sm:text-lg text-[#f1ba46] font-medium max-w-3xl mx-auto leading-relaxed">
          Une question, une demande d'information ou un projet ? Notre équipe est à votre écoute.
        </p>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Remplissez le formulaire ci-dessous ou contactez-nous directement par téléphone, email
          ou en vous rendant à notre siège.
        </p>
      </div>
    </section>

    <!-- Coordonnées + Formulaire -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- Colonne coordonnées -->
        <div class="lg:col-span-5 space-y-6">
          <Card class="bg-white rounded-2xl p-6 sm:p-8 border border-[#d1d1d1]/40 shadow-sm space-y-6">
            <h2 class="text-xl font-bold text-slate-900">Nos coordonnées</h2>

            <div class="flex items-start gap-4">
              <div class="bg-[#117647] text-white p-3 rounded-lg shrink-0">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <p class="font-semibold text-slate-900 text-sm">Adresse</p>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Siège du Conseil Régional de l'Indénié-Djuablin<br />
                  Abengourou, Côte d'Ivoire
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-[#117647] text-white p-3 rounded-lg shrink-0">
                <Phone class="w-5 h-5" />
              </div>
              <div>
                <p class="font-semibold text-slate-900 text-sm">Téléphone</p>
                <p class="text-sm text-slate-600 leading-relaxed">
                  +225 00 00 00 00<br />
                  +225 00 00 00 01
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-[#117647] text-white p-3 rounded-lg shrink-0">
                <Mail class="w-5 h-5" />
              </div>
              <div>
                <p class="font-semibold text-slate-900 text-sm">Email</p>
                <p class="text-sm text-slate-600 leading-relaxed">
                  contact@conseil-djuablin.ci<br />
                  info@conseil-djuablin.ci
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-[#117647] text-white p-3 rounded-lg shrink-0">
                <Clock class="w-5 h-5" />
              </div>
              <div>
                <p class="font-semibold text-slate-900 text-sm">Horaires</p>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Lundi - Vendredi : 7h30 - 16h30<br />
                  Samedi : 8h00 - 12h00
                </p>
              </div>
            </div>
          </Card>

          <!-- Réseaux sociaux -->
          <Card class="bg-[#117647] rounded-2xl p-6 sm:p-8 border border-[#117647] shadow-sm text-white space-y-4">
            <h3 class="text-lg font-bold">Suivez-nous</h3>
            <p class="text-sm text-emerald-100 leading-relaxed">
              Restez informé de nos actualités et de nos actions sur le terrain.
            </p>
            <div class="flex gap-3 pt-2">
              <a
                href="#"
                class="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook class="w-5 h-5" />
              </a>
              <a
                href="#"
                class="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all"
                aria-label="Twitter / X"
              >
                <Twitter class="w-5 h-5" />
              </a>
              <a
                href="#"
                class="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin class="w-5 h-5" />
              </a>
              <a
                href="#"
                class="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all"
                aria-label="YouTube"
              >
                <Youtube class="w-5 h-5" />
              </a>
            </div>
          </Card>
        </div>

        <!-- Colonne formulaire -->
        <div class="lg:col-span-7">
          <Card class="bg-white rounded-2xl p-6 sm:p-8 border border-[#d1d1d1]/40 shadow-sm">
            <h2 class="text-xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">
                    Nom complet <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.nom"
                    type="text"
                    required
                    placeholder="Votre nom"
                    class="w-full px-4 py-3 rounded-lg border border-[#d1d1d1] bg-[#f8f7fe] text-sm text-slate-800 focus:outline-none focus:border-[#117647] focus:ring-2 focus:ring-[#117647]/20 transition-all"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">
                    Email <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    class="w-full px-4 py-3 rounded-lg border border-[#d1d1d1] bg-[#f8f7fe] text-sm text-slate-800 focus:outline-none focus:border-[#117647] focus:ring-2 focus:ring-[#117647]/20 transition-all"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    v-model="form.telephone"
                    type="tel"
                    placeholder="+225 ..."
                    class="w-full px-4 py-3 rounded-lg border border-[#d1d1d1] bg-[#f8f7fe] text-sm text-slate-800 focus:outline-none focus:border-[#117647] focus:ring-2 focus:ring-[#117647]/20 transition-all"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">
                    Sujet <span class="text-red-500">*</span>
                  </label>
                  <select
                    v-model="form.sujet"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-[#d1d1d1] bg-[#f8f7fe] text-sm text-slate-800 focus:outline-none focus:border-[#117647] focus:ring-2 focus:ring-[#117647]/20 transition-all"
                  >
                    <option value="" disabled>Sélectionnez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="projet">Projet / Partenariat</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="presse">Presse / Communication</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Message <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="form.message"
                  required
                  rows="6"
                  placeholder="Décrivez votre demande..."
                  class="w-full px-4 py-3 rounded-lg border border-[#d1d1d1] bg-[#f8f7fe] text-sm text-slate-800 focus:outline-none focus:border-[#117647] focus:ring-2 focus:ring-[#117647]/20 transition-all resize-none"
                ></textarea>
              </div>

              <!-- Message de succès -->
              <div
                v-if="envoye"
                class="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-4 py-3 rounded-lg flex items-center gap-2"
              >
                <CheckCircle class="w-5 h-5 shrink-0" />
                Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
              </div>

              <button
                type="submit"
                :disabled="envoiEnCours"
                class="inline-flex items-center justify-center gap-2 w-full bg-[#f1ba46] hover:bg-[#e0a935] disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-semibold px-6 py-3 rounded-lg shadow transition-all"
              >
                <span>{{ envoiEnCours ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                <Send v-if="!envoiEnCours" class="w-4 h-4" />
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>

    <!-- Localisation / Google Maps -->
    <section class="py-16 bg-white border-y border-[#d1d1d1]/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-4">
          Nous trouver
        </h2>
        <p class="text-center text-sm sm:text-base text-slate-600 mb-10 max-w-2xl mx-auto">
          Le siège du Conseil Régional se trouve à Abengourou, au cœur de l'Indénié-Djuablin.
        </p>

        <Card class="bg-slate-100 rounded-2xl p-4 shadow-sm border border-[#d1d1d1]/50 w-full overflow-hidden">
          <!-- Carte Google Maps intégrée -->
          <div class="w-full rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Abengourou,+C%C3%B4te+d%27Ivoire&output=embed"
              width="100%"
              height="420"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localisation du Conseil Régional de l'Indénié-Djuablin"
              class="w-full"
            ></iframe>
          </div>

          <div class="mt-4 p-4 bg-white/90 backdrop-blur rounded-xl border border-[#d1d1d1]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <MapPin class="w-5 h-5 text-[#117647] shrink-0" />
              <p class="text-sm text-slate-600">
                <span class="font-semibold text-slate-900">Siège du Conseil Régional</span> —
                Abengourou, Région de l'Indénié-Djuablin, Côte d'Ivoire
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Abengourou,+C%C3%B4te+d%27Ivoire"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs font-semibold text-[#117647] hover:underline shrink-0"
            >
              Ouvrir dans Google Maps
              <ExternalLink class="w-3.5 h-3.5" />
            </a>
          </div>
        </Card>
      </div>
    </section>

    <!-- FAQ rapide -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
          Questions fréquentes
        </h2>
        <div class="space-y-4">
          <Card
            v-for="(faq, i) in faqs"
            :key="i"
            class="bg-white rounded-2xl border border-[#d1d1d1]/40 shadow-sm overflow-hidden"
          >
            <button
              @click="toggleFaq(i)"
              class="w-full flex items-center justify-between p-5 text-left hover:bg-[#f8f7fe] transition-all"
            >
              <span class="font-semibold text-slate-900 text-sm sm:text-base">{{ faq.question }}</span>
              <ChevronDown
                :class="[
                  'w-5 h-5 text-[#117647] transition-transform shrink-0',
                  faqOuverte === i ? 'rotate-180' : ''
                ]"
              />
            </button>
            <div v-if="faqOuverte === i" class="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
              {{ faq.reponse }}
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-[#117647]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 class="text-2xl sm:text-3xl font-bold text-white">
          Vous préférez nous rencontrer ?
        </h2>
        <p class="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto">
          Nos services vous accueillent du lundi au vendredi. N'hésitez pas à prendre rendez-vous
          pour un accompagnement personnalisé.
        </p>
        <div class="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="tel:+22500000000"
            class="inline-flex items-center gap-2 bg-[#f1ba46] hover:bg-[#e0a935] text-slate-900 font-semibold px-8 py-3 rounded-lg shadow transition-all"
          >
            <Phone class="w-4 h-4" />
            Appeler maintenant
          </a>
          <a
            href="mailto:contact@conseil-djuablin.ci"
            class="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition-all"
          >
            <Mail class="w-4 h-4" />
            Envoyer un email
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ExternalLink,
} from 'lucide-vue-next'

// Composant Shadcn Vue
import { Card } from '@/components/ui/card'

// Formulaire
const form = reactive({
  nom: '',
  email: '',
  telephone: '',
  sujet: '',
  message: '',
})

const envoye = ref(false)
const envoiEnCours = ref(false)

const handleSubmit = () => {
  envoiEnCours.value = true
  // Simule un envoi — remplacez par un appel API réel
  setTimeout(() => {
    envoye.value = true
    envoiEnCours.value = false
    form.nom = ''
    form.email = ''
    form.telephone = ''
    form.sujet = ''
    form.message = ''
    setTimeout(() => { envoye.value = false }, 5000)
  }, 1000)
}

// FAQ
const faqs = [
  {
    question: "Quels sont les horaires d'ouverture du Conseil Régional ?",
    reponse: "Nos bureaux sont ouverts du lundi au vendredi de 7h30 à 16h30, et le samedi de 8h00 à 12h00. Nous vous recommandons de prendre rendez-vous pour un accueil personnalisé.",
  },
  {
    question: "Comment soumettre une demande de partenariat ou de subvention ?",
    reponse: "Vous pouvez adresser votre demande par écrit au Président du Conseil Régional, en précisant l'objet, le montant sollicité et les pièces justificatives. Un accusé de réception vous sera délivré.",
  },
  {
    question: "Comment signaler un problème sur un chantier ou un équipement ?",
    reponse: "Utilisez le formulaire de contact en sélectionnant le sujet « Réclamation », ou rendez-vous directement au service technique du Conseil Régional avec les éléments descriptifs du problème.",
  },
  {
    question: "Puis-je obtenir un document officiel ou une attestation ?",
    reponse: "Oui, adressez votre demande écrite au service concerné en précisant le type de document souhaité. Un délai de traitement vous sera communiqué.",
  },
]

const faqOuverte = ref<number | null>(null)
const toggleFaq = (i: number) => {
  faqOuverte.value = faqOuverte.value === i ? null : i
}
</script>