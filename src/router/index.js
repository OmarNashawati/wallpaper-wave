import {createRouter, createWebHistory} from 'vue-router';

import ClientView from '@/views/ClientView.vue';
import DashboardView from '@/views/DashboardView.vue';
import Home from '@/components/Home.vue';
import WallpaperDetails from '@/components/WallpaperDetails.vue';

import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'client-home-view',
      component: ClientView,
      children:[
        { 
          path:'/',
          name:'gallert',
          component: Home
        },
        {
          path:'/collections/:collection',
          name:'view-by-collection',
          component:Home
        },
        {
          path:'/images/:id',
          name:'wallpaper-details',
          component: WallpaperDetails
        },
      ]
    },
    {
      path:'/dashboard',
      name:'dashboard-view',
      component: DashboardView
    },

    {
      path:"/:pathMatch(.*)*",
      name:"Not Found",
      component: NotFoundView
    }
  ]
})

export default router;