import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPassword } from "../api";
import { RootState } from "./storage";

export const initialState = {
  value: "",
};

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const fetchEmail = createAsyncThunk(
  "forgotPassword/forgotPassword",
  (email: string) => {
    return forgotPassword(email);
  }
);

export const selectEmail = (state: RootState) => state.forgotPassword.value;

export const { setEmail } = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
