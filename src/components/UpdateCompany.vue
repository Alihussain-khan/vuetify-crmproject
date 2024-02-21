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
          <span class="text-h5">Update Company</span>
        </v-card-title>
        <v-container>
          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-text-field
                class="mb-2"
                v-model="company.companyname"
                :rules="companyrules"
                clearable
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
  emits: ["update-event"],
  props: ["arrindex", "item"],
  data() {
    return {
      company: {
        companyname: this.item.companyname,
        description: this.item.description,
        address: this.item.address,
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
    };
  },
  methods: {
    printcompany() {
      if (this.$refs.form.validate() && this.valid) {
        // console.log(this.company);
        const currentcompanies =
          JSON.parse(localStorage.getItem("companydata")) || [];
        currentcompanies[this.arrindex] = this.company;
        // Store the object into storage
        localStorage.setItem("companydata", JSON.stringify(currentcompanies));
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
