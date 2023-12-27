import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { resetPassword } from "../api";

export const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState: {
    token: '',
    password: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  }
})

export const changePassword = createAsyncThunk(
  "resetPassword/changePassword",
  ({token, password}) => {
    return resetPassword(token, password)
  }
);

export const selectPassword = (state) => state.resetPassword.password;

export const selectToken = (state) => state.resetPassword.token;

export const { setToken, setPassword } = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;