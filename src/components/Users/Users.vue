<template>
  <v-container class="mt-10">
    <v-row>
      <v-layout class="flex-row align-center">
        <h1 class="ms-2">Users</h1>
        <v-spacer></v-spacer>
        <RegisterUsers />
      </v-layout>
    </v-row>
    <v-row>
      <Usertable />
    </v-row>
  </v-container>
</template>

<script>
import RegisterUsers from "@/components/Users/RegisterUsers.vue";
import Usertable from "@/components/Users/Usertable.vue";
export default { components: { RegisterUsers, Usertable } };
</script>

<style scoped></style>
