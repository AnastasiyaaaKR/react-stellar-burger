import {
  setName,
  setEmail,
  setUser,
  setProfileName,
  setProfileEmail,
  setProfilePassword,
  resetData,
  userSlice,
  TinitialState,
  initialState,
} from "./userSlice";
import { testPassword, testName, testEmail } from "../utils/constants";

describe("Тест userSlice reducer", () => {
  it("Тест setUser", () => {
    const user = {
      name: "Nastya",
      email: "test.email@yandex.ru",
      password: "993938",
    };
    const action = setUser(user);
    const resultState = userSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      user: {
        name: "Nastya",
        email: "test.email@yandex.ru",
        password: "993938",
      },
      profileUser: {
        name: "",
        email: "",
        password: "",
      },
      isAuthChecked: false,
    });
  });

  it("Тест setProfileName", () => {
    const profileUser = {
      name: testName,
      email: "",
      password: "",
    };
    const action = setProfileName(profileUser.name);
    const resultState = userSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      user: null,
      profileUser: {
        name: testName,
        email: "",
        password: "",
      },
      isAuthChecked: false,
    });
  });

  it("Тест setProfileEmail", () => {
    const profileUser = {
      name: "",
      email: testEmail,
      password: "",
    };
    const action = setProfileEmail(profileUser.email);
    const resultState = userSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      user: null,
      profileUser: {
        name: "",
        email: testEmail,
        password: "",
      },
      isAuthChecked: false,
    });
  });

  it("Тест setProfilePassword", () => {
    const profileUser = {
      name: "",
      email: "",
      password: testPassword,
    };
    const action = setProfilePassword(profileUser.password);
    const resultState = userSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      user: null,
      profileUser: {
        name: "",
        email: "",
        password: testPassword,
      },
      isAuthChecked: false,
    });
  });

  it("Тест setName если user null", () => {
    const user = null;
    const action = setName(user);
    const resultState = userSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      user: null,
      profileUser: {
        name: "",
        email: "",
        password: "",
      },
      isAuthChecked: false,
    });
  });

  it("Тест setName если user не null", () => {
    const initState : TinitialState = {
  user: {
    name: "",
    email: "",
  },
  profileUser: {
    name: "",
    email: "",
    password: "",
  },
  isAuthChecked: false,
}
    const user = {
      name: testName,
      email: "",
    };
    const action = setName(user.name);
    const resultState = userSlice.reducer(initState, action);
    expect(resultState).toEqual({
      user: {
        name: testName,
        email: "",
      },
      profileUser: {
        name: "",
        email: "",
        password: "",
      },
      isAuthChecked: false,
    });
  });

  it("Тест setEmail если user null", () => {
    const user = null;
    const action = setEmail(user);
    const resultState = userSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      user: null,
      profileUser: {
        name: "",
        email: "",
        password: "",
      },
      isAuthChecked: false,
    });
  });

  it("Тест setEmail если user не null", () => {
    const initState : TinitialState = {
  user: {
    name: "",
    email: "",
  },
  profileUser: {
    name: "",
    email: "",
    password: "",
  },
  isAuthChecked: false,
}
    const user = {
      name: "",
      email: testEmail,
    };
    const action = setEmail(user.email);
    const resultState = userSlice.reducer(initState, action);
    expect(resultState).toEqual({
      user: {
        name: "",
        email: testEmail,
      },
      profileUser: {
        name: "",
        email: "",
        password: "",
      },
      isAuthChecked: false,
    });
  });
});
