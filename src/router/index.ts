import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/Layout.vue'
import HomeView from '@/views/Home.vue'
import ConseilRegional from '@/views/ConseilRegional.vue'
import NotreRegion from '@/views/NotreRegion.vue'
import Realisations from '@/views/Realisations.vue'
import Contact from '@/views/Contact.vue'
import LoginView from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'conseil-regional',
          name: 'conseil-regional',
          component: ConseilRegional,
        },
        {
          path: 'notre-region',
          name: 'notre-region',
          component: NotreRegion,
        },
        {
          path: 'realisations',
          name: 'realisations',
          component: Realisations,
        },
        {
          path: 'contact',
          name: 'contact',
          component: Contact,
        },
      ],
    },

    // Page sans Layout (login)
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

export default router