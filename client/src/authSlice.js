import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
    user: null, // Add a field to store the user information
  },
  reducers: {
    isAuth(state) {
      state.value = true;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.accessToken = null;
      state.value = false;
      state.user = null; // Reset the user information when logging out
    },
  },
});

export const { isAuth, setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
