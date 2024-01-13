import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  login,
  getUser as apiGetUser,
  updateUser as apiUpdateUser,
  refreshAccessToken,
  logout as logoutApi,
} from "../api";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "",
      email: "",
    },
    profileUser: {
      name: "",
      email: "",
      password: "",
      initialPassword: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setName: (state, action) => {
      state.user.name = action.payload;
    },
    setEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setProfileName: (state, action) => {
      state.profileUser.name = action.payload;
    },
    setProfileEmail: (state, action) => {
      state.profileUser.email = action.payload;
    },
    setProfilePassword: (state, action) => {
      state.profileUser.password = action.payload;
    },
    resetData: (state) => {
      state.profileUser.name = state.user.name;
      state.profileUser.password = state.initialPassword;
      state.profileUser.email = state.user.email;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.profileUser.email = action.payload.email;
      state.profileUser.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.profileUser.initialPassword = "";
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.name;
      state.profileUser.initialPassword = "";
    });
  },
});

export const loginUser = createAsyncThunk(
  "login/loginUser",
  ({ email, password }) => {
    return login(email, password);
  }
);

export const getUser = createAsyncThunk("user/getUser", () => {
  return apiGetUser()
    .then((res) => res.user)
    .catch((err) => {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        return refreshAccessToken(refreshToken)
          .then((res) => {
            localStorage.setItem("refreshToken", res.refreshToken);
            localStorage.setItem("accessToken", res.accessToken);
            return apiGetUser();
          })
          .then((res) => res.user);
      } else {
        throw err;
      }
    });
});

export const updateUser = createAsyncThunk(
  "userProfile/updateUser",
  ({ name, email, password }) => {
    return apiUpdateUser(name, email, password);
  }
);

export const logout = createAsyncThunk("userProfile/logout", (token) => {
  return logoutApi(token).then(() => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
  });
});

export const selectName = (state) => state.user.user.name;

export const selectEmail = (state) => state.user.user.email;

export const selectUser = (state) => state.user.user;

export const {
  setName,
  setEmail,
  setUser,
  setProfileName,
  setProfileEmail,
  setProfilePassword,
  resetData,
} = userSlice.actions;

export const selectprofileUserName = (state) => state.user.profileUser.name;

export const selectprofileUserEmail = (state) => state.user.profileUser.email;

export const selectprofileUserPassword = (state) => state.user.profileUser.password;

export const selectChanged = (state) =>
  state.user.profileUser.name !== state.user.profileUser.initialName ||
  state.user.profileUser.email !== state.user.profileUser.initialEmail ||
  state.user.profileUser.password !== state.user.profileUser.initialPassword;

export default userSlice.reducer;
