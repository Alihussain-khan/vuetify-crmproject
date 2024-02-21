<template>
  <v-dialog width="500" transition="dialog-top-transition">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        text="Add Company"
        variant="flat"
        class="bg-addbutton"
      >
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
                label="Company description"
                v-model="company.description"
                :rules="descriptionrules"
                clearable
              ></v-text-field>

              <v-text-field
                class="mb-2"
                label="Company Adress"
                v-model="company.address"
                :rules="adressrules"
                clearable
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
      company: {
        companyname: "",
        description: "",
        address: "",
      },
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
      ],
      descriptionrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (value.length >= 3) return true;

          return "* Description Cannot be less than 3 characters";
        },
      ],
      adressrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (value.length >= 3) return true;

          return "* Address Cannot be less than 3 characters";
        },
      ],
    };
  },
  methods: {
    async printcompany() {
      if (this.$refs.form.validate() && this.valid) {
        console.log(this.company);
        const currentcompanies =
          JSON.parse(localStorage.getItem("companydata")) || [];
        console.log(currentcompanies);
        currentcompanies.push(this.company);
        console.log(currentcompanies);
        // Store the object into storage
        localStorage.setItem("companydata", JSON.stringify(currentcompanies));
        this.$emit("update-event");
        this.snackbar = true;
      } else {
        this.errorsnackbar = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
