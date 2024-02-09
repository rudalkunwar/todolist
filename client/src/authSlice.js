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
    setUser(state, action) { // Define a new reducer to set the user information
      state.user = action.payload;
    },
    logout(state) {
      state.value = false;
      state.user = null; // Reset the user information when logging out
      localStorage.removeItem("accessToken");
    },
  },
});

export const { isAuth, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
