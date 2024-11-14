import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    refreshAuthState: (state) => {
      const token = localStorage.getItem("token");
      state.isAuthenticated = !!token;
    },
  },
});

export const { login, logout, refreshAuthState } = authSlice.actions;
export default authSlice.reducer;
