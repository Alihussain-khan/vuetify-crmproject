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

      <RouterLink to="/company" class="text-decoration-none text-white">
        <v-tooltip activator="parent" location="right">Comapnies</v-tooltip>
        <v-list-item
          prepend-icon="mdi-domain"
          title="Companies"
          class="customclass"
        >
        </v-list-item>
      </RouterLink>

      <RouterLink to="/department" class="text-decoration-none text-white">
        <v-tooltip activator="parent" location="right">Departments</v-tooltip>
        <v-list-item
          prepend-icon="mdi-apps"
          title="Departments"
          class="customclass"
        >
        </v-list-item>
      </RouterLink>
      <RouterLink to="/user" class="text-decoration-none text-white">
        <v-tooltip activator="parent" location="right">Users</v-tooltip>
        <v-list-item
          prepend-icon="mdi-account"
          title="Users"
          class="customclass"
        >
        </v-list-item>
      </RouterLink>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { RouterLink } from "vue-router";
import Dashboard from "./Dashboard.vue";
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
  components: { Dashboard },
};
</script>

<style scoped>
.customclass:hover {
  background-color: #948e99;
}
</style>
