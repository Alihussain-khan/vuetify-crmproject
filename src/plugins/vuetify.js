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
    background: "#2e1437",
    surface: "#51425f",
    primary: "#948e99",
    secondary: "#03dac6",
    error: "#FF9843",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
    addbutton: "#e7eed0",
    chipupdate: "#ac4147",
    chipshow: "#b9d7d9",
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
