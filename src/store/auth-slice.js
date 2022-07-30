import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { isAuthenticated: false, count: 0 };

const authSlice = createSlice({
  name: "authx",
  initialState: authInitialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    increment: (state) => {
      state.count++;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
