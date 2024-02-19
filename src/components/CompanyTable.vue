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
          <th class="text-left bg-white">
            <v-chip @click="upd"
              ><v-tooltip activator="parent" location="right"
                >refresh table</v-tooltip
              ><v-icon>mdi-refresh</v-icon></v-chip
            >
          </th>
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
            <UpdateCompany @update-event="upd" :arrindex="index" :item="item" />
          </td>
          <td>
            <CompanyDepartments :arrindex="index" :item="item" />
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
  <v-snackbar
    v-model="refreshsnackbar"
    color="indigo-lighten-1"
    rounded="pill"
    :timeout="2000"
  >
    <span class="text-white">Table refreshed!!</span>

    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="refreshsnackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import UpdateCompany from "@/components/UpdateCompany.vue";
import CompanyDepartments from "@/components/CompanyDepartments.vue";

export default {
  emits: ["update-event"],
  data() {
    return {
      snackbar: false,
      refreshsnackbar: false,
      currentcompanies: "",
      username: "",
    };
  },
  mounted() {
    this.currentcompanies = JSON.parse(localStorage.getItem("companydata"));

    // console.log(this.currentcompanies);
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
    upd() {
      this.currentcompanies = JSON.parse(localStorage.getItem("companydata"));
      this.refreshsnackbar = true;
    },
  },
  components: {},
};
</script>

<style scoped></style>
