<template>
  <v-dialog width="500" transition="dialog-top-transition">
    <template v-slot:activator="{ props }">
      <v-btn
        @update-event="upd"
        v-bind="props"
        text="Add Department"
        variant="flat"
        class="bg-green-lighten-1"
      >
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="mt-2">
          <span class="text-h5">Add Department</span>
        </v-card-title>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-text-field
                class="mb-2"
                v-model="department.dcompanyname"
                :rules="companyrules"
                clearable
                label="Company Name"
                required
              ></v-text-field>

              <v-text-field
                class="mb-2"
                label="Department name"
                v-model="department.department"
                :rules="departmentrules"
                clearable
              ></v-text-field>

              <v-text-field
                class="mb-2"
                label="number of employees"
                v-model="department.employess"
                :rules="employessrules"
                clearable
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="isActive.value = false"
              >
                Close
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="printcompany">
                Save
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
  <v-snackbar
    v-model="snackbar"
    color="green-lighten-1"
    rounded="pill"
    :timeout="2000"
  >
    <span class="text-white">Added!!</span>

    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar
    v-model="errorsnackbar"
    color="red-lighten-1"
    rounded="pill"
    :timeout="2000"
  >
    <span class="text-white">form not valid</span>

    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="errorsnackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      department: {
        dcompanyname: null,
        department: null,
        employess: null,
      },
      currentdepartments: "",
      currentcompanies: "",
      snackbar: false,
      errorsnackbar: false,
      valid: false,
      companyrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (value.length >= 3) return true;

          return "* Company Name Cannot be less than 3 characters";
        },
        (value) => {
          let validatecompany = this.currentcompanies.filter((element) => {
            return value === element.companyname;
          });
          console.log(validatecompany);
          if (validatecompany.length != 0) {
            return true;
          } else {
            return "* Company Not Found";
          }
        },
      ],
      departmentrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (value.length >= 3) return true;

          return "* Department Name Cannot be less than 3 characters";
        },
      ],
      employessrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (!isNaN(value)) {
            return true;
          }

          return "* Enter Valid number";
        },
      ],
    };
  },
  methods: {
    async printcompany() {
      if (this.$refs.form.validate() && this.valid) {
        console.log(this.department);
        this.currentdepartments =
          JSON.parse(localStorage.getItem("departmentdata")) || [];
        console.log(this.currentdepartments);
        this.currentdepartments.push(this.department);
        console.log(this.currentdepartments);
        // Store the object into storage
        localStorage.setItem(
          "departmentdata",
          JSON.stringify(this.currentdepartments)
        );
        this.$emit("update-event");
        this.snackbar = true;
      } else {
        this.errorsnackbar = true;
      }
    },
  },
  mounted() {
    this.currentcompanies =
      JSON.parse(localStorage.getItem("companydata")) || [];
  },
};
</script>

<style lang="scss" scoped></style>
