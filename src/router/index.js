/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Dashboard from "@/pages/Dashboard.vue";
// import { setupLayouts } from "virtual:generated-layouts";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", name: "Login", component: Login },
    { path: "/dashboard", name: "Dashboard", component: Dashboard },
  ],
  // extendRoutes: setupLayouts,
});

export default router;
