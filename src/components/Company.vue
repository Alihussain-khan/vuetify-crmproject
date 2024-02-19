<template>
  <v-container class="mt-10">
    <v-row>
      <v-layout class="flex-row align-center">
        <h1>Company</h1>
        <v-spacer></v-spacer>
        <AddCompany @update-event="upd" />
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
