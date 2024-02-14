import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  login,
  getUser as apiGetUser,
  updateUser as apiUpdateUser,
  refreshAccessToken,
  logout as logoutApi,
} from "../api";
import { ILoginUser, IUser } from "../../types";
import { RootState } from "./storage";

type TinitialState = {
  user: IUser | null;
  profileUser: {
    name: string;
    email: string;
    password: string;
  };
  isAuthChecked: boolean;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    profileUser: {
      name: "",
      email: "",
      password: "",
    },
    isAuthChecked: false,
  } as TinitialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setName: (state, action) => {
      if (state.user) {
        state.user.name = action.payload;
      }
    },
    setEmail: (state, action) => {
      if (state.user) {
        state.user.email = action.payload;
      }
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
      if (state.user) {
        state.profileUser.name = state.user.name;
        state.profileUser.password = "";
        state.profileUser.email = state.user.email;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.profileUser.email = action.payload.email;
      state.profileUser.name = action.payload.name;
      state.user = action.payload;
      state.isAuthChecked = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isAuthChecked = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.profileUser.email = "";
      state.profileUser.name = "";
      state.user = null;
    });
  },
});

export const loginUser = createAsyncThunk(
  "login/loginUser",
  ({ email, password }: ILoginUser) => {
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
  ({ name, email, password }: IUser) => {
    return apiUpdateUser(name, email, password);
  }
);

export const logout = createAsyncThunk(
  "userProfile/logout",
  (token: string) => {
    return logoutApi(token).then(() => {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    });
  }
);

export const selectName = (state: RootState) => state.user.user?.name;

export const selectEmail = (state: RootState) => state.user.user?.email;

export const selectUser = (state: RootState) => state.user.user;

export const {
  setName,
  setEmail,
  setUser,
  setProfileName,
  setProfileEmail,
  setProfilePassword,
  resetData,
} = userSlice.actions;

export const selectprofileUserName = (state: RootState) =>
  state.user.profileUser.name;

export const selectprofileUserEmail = (state: RootState) =>
  state.user.profileUser.email;

export const selectprofileUserPassword = (state: RootState) =>
  state.user.profileUser.password;

export const selectChanged = (state: RootState) =>
  state.user.user?.name !== state.user.profileUser.name ||
  state.user.user.email !== state.user.profileUser.email ||
  state.user.profileUser.password;

export default userSlice.reducer;
