<template>
  <v-dialog width="500" transition="dialog-top-transition">
    <template v-slot:activator="{ props }">
      <v-chip
        v-bind="props"
        text="Update"
        variant="flat"
        class="bg-orange-lighten-1 text-white"
      >
      </v-chip>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="mt-2">
          <span class="text-h5">Update Department</span>
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
    color="orange-lighten-1"
    rounded="pill"
    :timeout="2000"
  >
    <span class="text-white">Updated!!</span>

    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ["arrindex", "item"],
  data() {
    return {
      department: {
        dcompanyname: this.item.dcompanyname,
        department: this.item.department,
        employess: this.item.employess,
      },
      snackbar: false,
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
        // (value) => {
        //   let companies = JSON.parse(
        //     window.localStorage.getItem("companydata")
        //   );
        //   let validatecompany = companies.filter((element) => {
        //     return value === element.companyname;
        //   });
        //   console.log(validatecompany);
        //   if (validatecompany.length != 0) {
        //     return true;
        //   } else {
        //     return "* Company Not Found";
        //   }
        // },
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
    printcompany() {
      if (this.$refs.form.validate() && this.valid) {
        console.log(this.department);
        const currentdepartments =
          JSON.parse(localStorage.getItem("departmentdata")) || [];
        currentdepartments[this.arrindex] = this.department;
        // Store the object into storage
        localStorage.setItem(
          "departmentdata",
          JSON.stringify(currentdepartments)
        );
        this.$emit("update-event");

        this.snackbar = true;
      }
    },
    savepropdata() {
      //   console.log(props.item);
    },
  },

  mounted() {
    this.savepropdata();
  },
};
</script>

<style lang="scss" scoped></style>
