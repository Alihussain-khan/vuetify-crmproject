<template>
  <v-container class="mt-10">
    <v-row>
      <v-layout class="flex-row align-center">
        <h1 class="ms-2">Departments</h1>
        <v-spacer></v-spacer>
        <Adddepartment />
      </v-layout>
    </v-row>
    <v-row>
      <Departmenttable @update-event="upd" />
    </v-row>
  </v-container>
</template>

<script>
import Adddepartment from "@/components/Deparmtents/Adddepartment.vue";
import Departmenttable from "@/components/Deparmtents/Departmenttable.vue";
export default { components: { Adddepartment, Departmenttable } };
</script>

<style scoped></style>
