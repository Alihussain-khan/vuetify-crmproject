<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list>
      <v-list-item prepend-icon="mdi-menu">
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
      <!-- <RouterLink
        to="/dashboard"
        class="text-decoration-none text-white"
        v-slot:default="{ isHovering, props }"
      >
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard">
        </v-list-item>
      </RouterLink> -->

      <RouterLink
        to="/dashboard/company"
        class="text-decoration-none text-white"
      >
        <v-tooltip activator="parent" location="right">Comapnies</v-tooltip>
        <v-list-item
          prepend-icon="mdi-domain"
          title="Companies"
          class="customclass"
        >
        </v-list-item>
      </RouterLink>

      <RouterLink
        to="/dashboard/department"
        class="text-decoration-none text-white"
      >
        <v-tooltip activator="parent" location="right">Departments</v-tooltip>
        <v-list-item
          prepend-icon="mdi-apps"
          title="Departments"
          class="customclass"
        >
        </v-list-item>
      </RouterLink>
      <RouterLink to="/dashboard/user" class="text-decoration-none text-white">
        <v-tooltip activator="parent" location="right">Users</v-tooltip>
        <v-list-item
          prepend-icon="mdi-account"
          title="Users"
          class="customclass"
        >
        </v-list-item>
      </RouterLink>
    </v-list>
    <template v-slot:append>
      <RouterLink to="/" class="text-decoration-none text-white">
        <v-tooltip activator="parent" location="right">Logout</v-tooltip>
        <v-list-item
          prepend-icon="mdi-logout"
          title="Logout"
          class="customclass"
        >
        </v-list-item>
      </RouterLink>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { RouterLink } from "vue-router";
import Dashboard from "./Dashboard.vue";
import router from "@/router";
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
  components: { Dashboard },
  methods: {
    logout() {
      router.push("/");
    },
  },
};
</script>

<style scoped>
.customclass:hover {
  background-color: #948e99;
}
</style>
