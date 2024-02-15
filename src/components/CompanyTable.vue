<template>
  <v-container>
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-left bg-white">Count</th>
          <th class="text-left bg-white">Company Name</th>
          <th class="text-left bg-white">User</th>
          <th class="text-left bg-white">Email</th>
          <th class="text-left bg-white"></th>
          <th class="text-left bg-white"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in currentcompanies" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.companyname }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.useremail }}</td>
          <td>
            <v-chip
              variant="elevated"
              class="bg-red-lighten-1"
              @click="del(index)"
              >X</v-chip
            >
          </td>
          <td>
            <UpdateCompany :arrindex="index" :item="item" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
  <v-snackbar
    v-model="snackbar"
    color="red-lighten-1"
    rounded="pill"
    :timeout="2000"
  >
    <span class="text-white">Deleted!!</span>

    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import UpdateCompany from "@/components/UpdateCompany.vue";
export default {
  data() {
    return {
      snackbar: false,
      currentcompanies: null,
    };
  },

  mounted() {
    this.currentcompanies = JSON.parse(localStorage.getItem("companydata"));

    console.log(this.currentcompanies);
  },
  methods: {
    del(e) {
      // this.currentcompanies =
      this.currentcompanies.splice(e, 1);
      localStorage.setItem(
        "companydata",
        JSON.stringify(this.currentcompanies)
      );

      this.snackbar = true;
    },
    // updatetable(e) {
    //   this.currentcompanies = JSON.parse(localStorage.getItem("companydata"));
    //   console.log(e);
    // },
  },
};
</script>

<style scoped></style>
