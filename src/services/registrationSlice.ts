import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registration } from "../api";
import { IUser } from "../../types";
import { RootState } from "./storage";

export const initialState = {
  email: "",
  password: "",
  name: "",
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const registerUser = createAsyncThunk(
  "registration/registerUser",
  ({ email, password, name }: Required<IUser>) => {
    return registration(email, password, name);
  }
);

export const selectEmail = (state: RootState) => state.registration.email;

export const selectPassword = (state: RootState) => state.registration.password;

export const selectName = (state: RootState) => state.registration.name;

export const { setEmail, setPassword, setName } = registrationSlice.actions;

export default registrationSlice.reducer;
