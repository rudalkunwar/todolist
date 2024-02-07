import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    isAuth(state) {
      state.value = true;
    },
    logout(state) {
      state.value = false;
      localStorage.removeItem("acessToken");
    },
  },
});
export const { isAuth, logout } = authSlice.actions;
export default authSlice.reducer;
