/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Company from "@/components/Company.vue";
import Departments from "@/components/Departments.vue";
// import { setupLayouts } from "virtual:generated-layouts";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", name: "Login", component: Login },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      children: [
        {
          path: "/company",
          name: "Company",
          component: Company,
        },
        {
          path: "/department",
          name: "Department",
          component: Departments,
        },
      ],
    },
    // {
    //   path: "/department",
    //   name: "Department",
    //   component: Departments,
    // },
    // { path: "/dashboard/company", name: "Company", component: Company },
  ],
  // extendRoutes: setupLayouts,
});

export default router;
