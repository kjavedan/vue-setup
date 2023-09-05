import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LeagueResultsView from '@/views/LeagueResultsView.vue'
import FAQView from '@/views/FAQView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import ContactUsView from '@/views/ContactUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/league-result',
      name: 'result',
      component: LeagueResultsView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQView
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutUsView
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: ContactUsView
    },
  ]
})

export default router
