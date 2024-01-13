import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});


export const selectPassword = (state) => state.login.password;

export const selectEmail = (state) => state.login.email;

export const { setEmail, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
