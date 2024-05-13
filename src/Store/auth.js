import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialAuthState = {
  admin: Cookies.get("admin") || null,
  msAuth: Cookies.get("ms-auth") || null,
  teacher: Cookies.get("teacher") || null,
  student: Cookies.get("student") || null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {

    msLogin(state) {
      state.msAuth = Cookies.get("ms-auth");
    },
    logout(state) {
      state.msAuth = false;
      state.admin = false;
      state.teacher = false;
      state.student = false;
    },
    adminLogin(state) {
      state.admin = Cookies.get("admin");
    },
    teacherLogin(state) {
      state.teacher = Cookies.get("teacher");
    },
    studentLogin(state) {
      state.student = Cookies.get("student");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;