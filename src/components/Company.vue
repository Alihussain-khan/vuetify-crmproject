<template>
  <v-container class="mt-10">
    <v-row>
      <v-layout class="flex-row align-center">
        <h1>Company</h1>
        <v-spacer></v-spacer>
        <AddCompany />
        <!-- <v-btn variant="flat" class="bg-green">Add Company</v-btn> -->
      </v-layout>
    </v-row>
    <v-row>
      <CompanyTable />
    </v-row>
  </v-container>
</template>

<script>
import AddCompany from "./AddCompany.vue";
import CompanyTable from "./CompanyTable.vue";

export default { components: { AddCompany, CompanyTable } };
</script>

<style lang="scss" scoped></style>
