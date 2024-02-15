<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        ><RouterLink to="/company"
          ><v-icon icon="mdi-camera"></v-icon
        ></RouterLink>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { RouterLink } from "vue-router";
export default {};
</script>

<style scoped></style>
