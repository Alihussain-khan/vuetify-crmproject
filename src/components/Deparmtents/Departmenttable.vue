<template>
  <v-container>
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-left bg-white">Count</th>
          <th class="text-left bg-white">Company Name</th>
          <th class="text-left bg-white">Department</th>
          <th class="text-left bg-white">Employees</th>
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
        <tr v-for="(item, index) in currentdepartments" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.dcompanyname }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.employess }}</td>
          <td>
            <v-chip
              variant="elevated"
              class="bg-red-lighten-1"
              @click="del(index)"
              >X</v-chip
            >
          </td>
          <td>
            <Updatedepartment
              @update-event="upd"
              :arrindex="index"
              :item="item"
            />
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
import Updatedepartment from "@/components/Deparmtents/Updatedepartment.vue";
export default {
  data() {
    return {
      snackbar: false,
      refreshsnackbar: false,
      currentdepartments: null,
    };
  },
  mounted() {
    this.currentdepartments = JSON.parse(
      localStorage.getItem("departmentdata")
    );
    console.log(this.currentdepartments);
  },
  methods: {
    del(e) {
      // this.currentcompanies =
      this.currentdepartments.splice(e, 1);
      localStorage.setItem(
        "departmentdata",
        JSON.stringify(this.currentdepartments)
      );
      this.snackbar = true;
    },
    upd() {
      this.currentdepartments = JSON.parse(
        localStorage.getItem("departmentdata")
      );
      this.refreshsnackbar = true;
    },
  },
  components: {},
};
</script>

<style scoped></style>
