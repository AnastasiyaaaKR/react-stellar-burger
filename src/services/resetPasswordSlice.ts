import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { resetPassword } from "../api";
import { RootState } from "./storage";

export const initialState = {
  token: "",
  password: "",
};
export const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const changePassword = createAsyncThunk(
  "resetPassword/changePassword",
  ({ token, password }: { token: string; password: string }) => {
    return resetPassword(token, password);
  }
);

export const selectPassword = (state: RootState) =>
  state.resetPassword.password;

export const selectToken = (state: RootState) => state.resetPassword.token;

export const { setToken, setPassword } = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
