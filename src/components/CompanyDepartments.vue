<template>
  <v-dialog width="1000" transition="dialog-top-transition">
    <template v-slot:activator="{ props }">
      <v-chip
        v-bind="props"
        text="Show departments"
        variant="flat"
        class="bg-indigo-lighten-1 text-white"
      >
      </v-chip>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="mt-2">
          <span class="text-h5">Current Departments</span>
        </v-card-title>
        <v-card-text v-if="companydepartment.length == 0"
          >No departments at the moment</v-card-text
        >
        <v-container v-if="companydepartment.length != 0">
          <v-table fixed-header>
            <thead>
              <tr>
                <th class="text-left bg-white">Count</th>
                <!-- <th class="text-left bg-white">Company Name</th> -->
                <th class="text-left bg-white">Departments</th>
                <th class="text-left bg-white">Number of employess</th>
                <!-- <th class="text-left bg-white"></th>
              <th class="text-left bg-white"></th> -->
                <!-- <th class="text-left bg-white">
                <v-chip @click="upd"
                  ><v-tooltip activator="parent" location="right"
                    >refresh table</v-tooltip
                  ><v-icon>mdi-refresh</v-icon></v-chip
                >
              </th> -->
              </tr>
            </thead>

            <tbody>
              <tr v-for="(item, index) in companydepartment" :key="index">
                <td>{{ index + 1 }}</td>
                <!-- <td>{{ item.dcompanyname }}</td> -->
                <td>{{ item.department }}</td>
                <td>{{ item.employess }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: ["arrindex", "item"],
  data() {
    return {
      currentdepartments: "",
      companydepartment: "",
    };
  },
  mounted() {
    this.currentdepartments = JSON.parse(
      localStorage.getItem("departmentdata")
    );
    this.companydepartment = this.currentdepartments.filter((element) => {
      return element.dcompanyname === this.item.companyname;
    });
  },
};
</script>

<style scoped></style>
