import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser as apiGetUser, updateUser as apiUpdateUser, refreshAccessToken } from "../api"

export const userProfileSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    password: "",
    initialName: "", 
    initialEmail: "",
    initialPassword: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    resetData: (state, action) => {
      state.name = state.initialName;
      state.password = state.initialPassword;
      state.email = state.initialEmail;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.initialEmail = action.payload.email;
      state.initialName = action.payload.name;
      state.initialPassword = "";
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.initialEmail = action.payload.user.email;
      state.initialName = action.payload.user.name;
      state.initialPassword = "";
    });
  }
})

export const getUser = createAsyncThunk(
  "user/getUser",
  () => {
    return apiGetUser()
    .then((res) => res.user)
    .catch((err) => {
      const refreshToken = localStorage.getItem('refreshToken')
      if(refreshToken) {
        return refreshAccessToken(refreshToken)
        .then((res) => {
          localStorage.setItem('refreshToken', res.refreshToken)
          localStorage.setItem('accessToken', res.accessToken)
          return apiGetUser()
        })
        .then((res) => res.user)
      } else {
        throw err;
      }
    })
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  ({name, email, password}) => {
    return apiUpdateUser(name, email, password)
  }
);

export const selectName = (state) => state.user.name;

export const selectEmail = (state) => state.user.email;

export const selectPassword = (state) => state.user.password;

export const { setName,setEmail, setPassword, resetData } = userProfileSlice.actions;

export default userProfileSlice.reducer;
