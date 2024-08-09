import { createRouter, createWebHistory } from 'vue-router'
import FeedbackView from '../views/FeedbackView.vue'
import MainView from '../views/MainView.vue'
import PricingView from '../views/PricingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'about',
      component: MainView
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

  ]
})

export default router
