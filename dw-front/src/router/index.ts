import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import ProfileView from '@/views/ProfileView.vue'
import FaqView from '@/views/FaqView.vue'

const routes = [
  { 
    path: '', 
    component: MainView,
    name: 'main'
  },

  { 
    path: '/profiles/:username', 
    component: ProfileView,
    name: 'profile',
    props: true
   },
   
  { 
    path: '/faq/:element', 
    component: FaqView,
    name: 'faq',
    props: true
   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
