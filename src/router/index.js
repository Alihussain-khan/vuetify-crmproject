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
import Users from "@/components/Users/Users.vue";
import store from "@/Store/Auth.js";
// import { setupLayouts } from "virtual:generated-layouts";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      beforeEnter: (to, from) => {
        window.localStorage.removeItem("token");
        // console.log("atleast this part works");
        return true;
      },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: { needsauth: "true" },
      //     beforeEnter: (to, from) => {
      //   window.localStorage.removeItem("token");
      //   // console.log("atleast this part works");
      //   return true;
      // },

      children: [
        {
          path: "company",
          name: "Company",
          component: Company,
        },
        {
          path: "department",
          name: "Department",
          component: Departments,
        },
        {
          path: "user",
          name: "User",
          component: Users,
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

router.beforeEach((to, from, next) => {
  store.state.token = window.localStorage.getItem("token");
  if (store.state.token) {
    store.state.auth = "true";
  } else {
    store.state.auth = "false";
  }
  if (to.meta.needsauth && store.state.auth === "false") {
    next("/");
  } else {
    next();
  }
});

export default router;
