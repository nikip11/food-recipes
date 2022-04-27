import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/food",
    name: "Alimentos",
    component: () => import("@/views/FoodView.vue"),
  },
  {
    path: "/recipes",
    name: "Recetas",
    component: () => import("@/views/RecipeView.vue")
  },
  {
    path: "/recipe/form",
    name: "Formulario de Receta",
    component: () => import("@/views/RecipeFormView.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFoundView.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router