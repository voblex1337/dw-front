import { createRouter, createWebHistory } from 'vue-router'
import FeedbackView from '../views/FeedbackView.vue'
import AboutView from '../views/AboutView.vue'
import PricingView from '../views/PricingView.vue'
import FaqView from '../views/FaqView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'about',
      component: AboutView
    },

    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackView
    },

    {
      path: '/buy',
      name: 'pricing',
      component: PricingView
    },

    {
      path: '/faq',
      name: 'faq',
      component: FaqView
    },

  ]
})

export default router
