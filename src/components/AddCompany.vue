<template>
  <v-dialog width="500" transition="dialog-top-transition">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Add Company" variant="flat" class="bg-green">
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="mt-2">
          <span class="text-h5">Add Company</span>
        </v-card-title>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-text-field
                class="mb-2"
                v-model="company.companyname"
                :rules="companyrules"
                clearable
                label="Company Name"
                required
              ></v-text-field>

              <v-text-field
                class="mb-2"
                label="User name"
                v-model="company.username"
                :rules="userrules"
                clearable
              ></v-text-field>

              <v-text-field
                class="mb-2"
                label="Email"
                v-model="company.useremail"
                :rules="emailrules"
                clearable
                required
              ></v-text-field>

              <v-text-field
                class="mb-2"
                type="password"
                v-model="company.password"
                :rules="passwordrules"
                clearable
                label="Password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                v-if="!valid && 'disable'"
                color="blue-darken-1"
                variant="text"
                @click="printcompany"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      company: {
        companyname: null,
        username: null,
        useremail: null,
        password: null,
      },
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
    };
  },
  methods: {
    async printcompany() {
      if (this.$refs.form.validate() && this.valid) {
        console.log(this.company);
        alert("added");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
