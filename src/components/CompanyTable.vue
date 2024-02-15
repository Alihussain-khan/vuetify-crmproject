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
            <v-chip variant="elevated" class="bg-red" @click="del(index)"
              >X</v-chip
            >
          </td>
          <td>
            <v-chip variant="elevated" class="bg-error" @click="up(index)"
              >update</v-chip
            >
          </td>
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
  methods: {
    del(e) {
      // this.currentcompanies =
      this.currentcompanies.splice(e, 1);
      localStorage.setItem(
        "companydata",
        JSON.stringify(this.currentcompanies)
      );
      console.log(e);
    },
  },
};
</script>

<style scoped></style>
