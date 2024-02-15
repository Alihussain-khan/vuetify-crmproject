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
        <v-list-item prepend-icon="mdi-domain" title="Companies"> </v-list-item>
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

<style scoped></style>
