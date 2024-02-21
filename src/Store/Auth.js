import { createStore } from "vuex";

export default createStore({
  state: {
    auth: null,
    token: null,
    role: null,
    companyname: null,
    department: null,
    password: null,
    useremail: null,
    username: null,
  },
  mutations: {
    setcompanyname(state, payload) {
      state.companyname = payload;
    },
    setrole(state, payload) {
      state.role = payload;
    },
    setdepartment(state, payload) {
      state.department = payload;
    },
  },
});
