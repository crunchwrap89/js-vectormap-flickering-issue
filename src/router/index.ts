import { createRouter, createWebHistory } from 'vue-router'
import MapView from "../views/MapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MapView",
      component: MapView,
    },
  ]
})

export default router
