import { createSlice } from "@redux/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    signin(state) {
      state.value = true;
    },
    logout(stae) {
      state.value = false;
    },
  },
});
export const {signin,logout} = authSlice.actions;
export default authSlice.reducer;
