import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InitRecipesView from '@/views/recipes/InitRecipesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      params: {
        header: true
      }
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: InitRecipesView,
      params: {
        header: true
      }
    },
    
  ]
})

export default router
