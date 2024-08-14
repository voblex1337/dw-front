import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import ProfileView from '@/views/ProfileView.vue'

const routes = [
  { 
    path: '', 
    component: MainView,
    name: 'main'
  },
  { 
    path: '/profiles/', 
    component: ProfileView,
    name: 'profile'
   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
