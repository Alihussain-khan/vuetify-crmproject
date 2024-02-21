<template>
  <v-dialog width="500" transition="dialog-top-transition">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        text="Register User"
        variant="flat"
        class="bg-addbutton"
      >
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="mt-2">
          <span class="text-h5">Register User</span>
        </v-card-title>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-text-field
                class="mb-2"
                v-model="user.companyname"
                :rules="companyrules"
                clearable
                label="Company Name"
                required
              ></v-text-field>
              <v-text-field
                class="mb-2"
                label="User name"
                v-model="user.username"
                :rules="userrules"
                clearable
              ></v-text-field>

              <v-text-field
                class="mb-2"
                label="Email"
                v-model="user.useremail"
                :rules="emailrules"
                clearable
                required
              ></v-text-field>
              <v-text-field
                class="mb-2"
                type="password"
                v-model="user.password"
                :rules="passwordrules"
                clearable
                label="Password"
              ></v-text-field>
              <v-text-field
                class="mb-2"
                type="text"
                v-model="user.department"
                :rules="departmentrules"
                clearable
                label="department"
              ></v-text-field>
              <v-text-field
                class="mb-2"
                type="text"
                v-model="user.role"
                :rules="rolerules"
                clearable
                label="role"
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
  emits: ["update-event"],
  data() {
    return {
      user: {
        companyname: "",
        username: "",
        useremail: "",
        password: "",
        department: "",
        role: "",
      },
      token: "",
      snackbar: false,
      errorsnackbar: false,
      currentcompanies: "",
      currentdepartments: "",
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
        (value) => {
          this.token = JSON.parse(localStorage.getItem("token"));
          console.log(this.token);
          if (this.token == "1") {
            return true;
          } else {
            let arr = JSON.parse(localStorage.getItem("companydata"));
            console.log(arr);
            this.currentcompanies = arr.filter((element) => {
              return element.companyname === this.$store.state.companyname;
            });
            if (value === this.$store.state.companyname) {
              return true;
            } else {
              return "* this is not your company";
            }
          }
        },
      ],
      userrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (value.length >= 3) return true;

          return "* Name Cannot be less than 3 characters";
        },
      ],
      emailrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return true;
          }

          return "* Enter Valid email";
        },
      ],
      passwordrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (value.length >= 8) return true;

          return "* Password Cannot be less than 8";
        },
      ],
      departmentrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (value.length >= 3) return true;

          return "* Department name cannot be less than 3 characters";
        },
        (value) => {
          let validatedepartment = this.currentdepartments.filter((element) => {
            return value === element.department;
          });
          console.log(validatedepartment);
          if (validatedepartment.length != 0) {
            return true;
          } else {
            return "* department Not Found";
          }
        },
        (value) => {
          this.token = JSON.parse(localStorage.getItem("token"));
          console.log(this.token);
          if (this.token == "1") {
            return true;
          } else {
            let arr = JSON.parse(localStorage.getItem("departmentdata"));
            console.log(arr);
            this.currentdepartments = arr.filter((element) => {
              return element.department === this.$store.state.department;
            });
            if (value === this.$store.state.department) {
              return true;
            } else {
              return "* this is not your department";
            }
          }
        },
      ],
      rolerules: [
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
        console.log(this.user);
        const currentusers = JSON.parse(localStorage.getItem("userdata")) || [];
        console.log(currentusers);
        currentusers.push(this.user);
        console.log(currentusers);
        // Store the object into storage
        localStorage.setItem("userdata", JSON.stringify(currentusers));
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
    this.currentdepartments =
      JSON.parse(localStorage.getItem("departmentdata")) || [];
  },
};
</script>

<style lang="scss" scoped></style>
