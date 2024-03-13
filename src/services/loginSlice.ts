import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./storage";

export const initialState = {
  email: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const selectPassword = (state: RootState) => state.login.password;

export const selectEmail = (state: RootState) => state.login.email;

export const { setEmail, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
