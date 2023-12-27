import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registration } from "../api";

export const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    email: '',
    password: '',
    name: '',
  },
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
  }
})

export const registerUser = createAsyncThunk(
  "registration/registerUser",
  ({email, password, name}) => {
    return registration(email, password, name);
  }
);

export const selectEmail = (state) => state.registration.email;

export const selectPassword = (state) => state.registration.password;

export const selectName = (state) => state.registration.name;

export const { setEmail, setPassword, setName} = registrationSlice.actions;

export default registrationSlice.reducer;
