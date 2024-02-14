/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const customDarkTheme = {
  dark: true,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#FF9843",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "customDarkTheme",
    themes: {
      customDarkTheme,
    },
  },
  //
});
