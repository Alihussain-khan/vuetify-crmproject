<template>
  <v-container class="mt-10">
    <v-row>
      <v-layout class="flex-row align-center">
        <h1 class="ms-2">Company</h1>
        <v-spacer></v-spacer>
        <AddCompany v-if="$store.state.role === '1'" @update-event="upd" />
        <!-- <v-btn variant="flat" class="bg-green">Add Company</v-btn> -->
      </v-layout>
    </v-row>
    <v-row>
      <CompanyTable @update-event="upd" />
    </v-row>
  </v-container>
</template>

<script>
import AddCompany from "./AddCompany.vue";
import CompanyTable from "./CompanyTable.vue";
import store from "@/Store/Auth.js";

export default {
  components: { AddCompany, CompanyTable },
  methods: {
    upd() {
      console.log("getting there");
    },
  },
};
</script>

<style lang="scss" scoped></style>
