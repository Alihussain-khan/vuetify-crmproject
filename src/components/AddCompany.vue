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
          <v-form>
            <v-card-text>
              <v-text-field
                v-model="company.companyname"
                :rules="companyrules"
                clearable
                label="Company Name"
                required
              ></v-text-field>

              <v-text-field
                label="User name"
                v-model="company.username"
                :rules="userrules"
                clearable
              ></v-text-field>

              <v-text-field
                label="Email"
                v-model="company.useremail"
                :rules="emailrules"
                clearable
                required
              ></v-text-field>

              <v-text-field
                type="password"
                v-model="company.password"
                :rules="password"
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
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
