<template>
  <v-container>
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-left bg-white">Company Name</th>
          <th class="text-left bg-white">User</th>
          <th class="text-left bg-white">Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in currentcompanies" :key="item.name">
          <td>{{ item.companyname }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.useremail }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentcompanies: null,
    };
  },

  mounted() {
    this.currentcompanies = JSON.parse(localStorage.getItem("companydata"));

    console.log(this.currentcompanies);
  },
};
</script>

<style scoped></style>
