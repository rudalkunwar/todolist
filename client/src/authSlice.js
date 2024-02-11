import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("Login", true);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.setItem("Login", false);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
