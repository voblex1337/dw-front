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
    path: '/profiles/:username', 
    component: ProfileView,
    name: 'profile',
    props: true
   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
