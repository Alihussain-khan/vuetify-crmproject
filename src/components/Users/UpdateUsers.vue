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
          <span class="text-h5">Update User</span>
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
  emits: ["update-event"],
  data() {
    return {
      user: {
        companyname: this.item.companyname,
        username: this.item.username,
        useremail: this.item.useremail,
        password: this.item.password,
        department: this.item.department,
        role: this.item.role,
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
    printcompany() {
      if (this.$refs.form.validate() && this.valid) {
        console.log(this.user);
        const currentusers = JSON.parse(localStorage.getItem("userdata")) || [];
        currentusers[this.arrindex] = this.user;
        // Store the object into storage
        localStorage.setItem("userdata", JSON.stringify(currentusers));
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
