<template>
  <v-container>
    <div class="text-center mt-13 text-h4 mb-5">login form</div>

    <v-row>
      <v-col></v-col>
      <v-col cols="4">
        <v-form ref="loginform">
          <v-text-field
            class="mb-2"
            label="email"
            v-model="useremail"
            :rules="emailrules"
            clearable
          ></v-text-field>
          <v-text-field
            class="mb-2"
            type="password"
            label="passowrd"
            v-model="password"
            :rules="inputrules"
            clearable
          ></v-text-field>

          <v-btn
            block
            class="mb-4 text-blue"
            variant="outlined"
            @click="startwebcam"
            >Open Camera</v-btn
          >
          <!-- The overlay covers the screen-->
          <v-overlay
            v-model="overlay"
            class="flex-row align-center justify-center"
          >
            <v-layout>
              <!-- the sheet has all the camera controls -->
              <v-sheet
                class="mt-10"
                :elevation="24"
                :height="400"
                :width="400"
                :rounded="500"
              >
                <!-- this shows the video -->
                <video ref="video" width="100%" height="auto"></video>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-btn
                        class="text-white ma-1"
                        variant="tonal"
                        @click="capture"
                        >capture</v-btn
                      >
                    </v-col>
                    <v-col>
                      <v-btn
                        class="text-white ma-1"
                        variant="tonal"
                        @click="this.video.play()"
                        ><v-tooltip activator="parent" location="bottom"
                          >take another image</v-tooltip
                        >Reset</v-btn
                      >
                    </v-col>
                    <v-col>
                      <v-btn
                        class="bg-blue ma-1"
                        variant="elevated"
                        @click="saveimage"
                      >
                        submit</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-sheet>
            </v-layout>
          </v-overlay>
          <!-- submit button -->
          <v-btn
            variant="outlined"
            block
            class="text-green"
            @click="submit"
            @keyudown.enter="submit"
            :disabled="disable"
            >Submit</v-btn
          >
        </v-form>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      password: null,
      useremail: null,
      userimage: null,
      finaldata: {},
      disable: true,
      overlay: false,
      stream: null,
      video: null,
      hidden: false,
      // Input validation rules
      inputrules: [
        (value) => {
          if (value) return true;

          return "* Field Cannot Be Empty.";
        },
        (value) => {
          if (value.length >= 8) return true;

          return "* Password Cannot be less than 8";
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

          return "* not valid";
        },
      ],
    };
  },
  watch: {
    // this is checking the validation on each input tap
    //activates the button when everything is good
    useremail() {
      this.validate();
    },
    password() {
      this.validate();
    },
    userimage() {
      this.validate();
    },
    overlay() {
      // when the overlay is closed the camera is closed
      if (this.overlay === false) {
        if (this.stream) {
          const tracks = this.stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    },
  },
  methods: {
    submit() {
      //checking the validation again
      if (this.validate()) {
        //assigning the data to method before moving to next page
        this.finaldata = {
          password: this.password,
          useremail: this.useremail,
          userimage: this.userimage,
        };
        console.log(this.finaldata);
        router.push("/dashboard");
      } else {
        console.log("empty");
      }
    },
    async saveimage() {
      //saving the image
      const bitmap = await createImageBitmap(this.video);
      // console.log(bitmap);
      //using canvas to convert bitmap to dataURL
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      context.drawImage(bitmap, 0, 0);
      //canvas to dataURL
      const base64Image = canvas.toDataURL();
      this.userimage = base64Image;

      //closing overlay
      this.overlay = !this.overlay;
    },
    capture() {
      //capture pauses the video
      this.video.pause();
    },
    //data validation if validation is good, it will activate the submit button
    validate() {
      if (
        this.useremail &&
        this.password.length >= 8 &&
        this.password &&
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.useremail) &&
        this.userimage
      ) {
        this.disable = false;
        return true;
      } else {
        this.disable = true;
        return false;
      }
    },
    //starting webcam
    async startwebcam() {
      //opening overlay
      this.overlay = !this.overlay;
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        this.video = this.$refs.video;
        this.video.srcObject = this.stream;
        this.video.play();
      } catch (error) {
        console.error("Error starting video stream:", error);
        alert(
          "Failed to access the webcam. Please allow camera access and try again."
        );
      }
    },
  },
};
</script>

<style scoped></style>
