import {createRouter, createWebHistory} from 'vue-router';

import ClientView from '@/views/ClientView.vue';
import DashboardView from '@/views/DashboardView.vue';
import Gallery from '@/components/Gallery.vue';
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
          component: Gallery
        },
        {
          path:'images/:id',
          name:'wallpaper-details',
          component: WallpaperDetails
        }
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