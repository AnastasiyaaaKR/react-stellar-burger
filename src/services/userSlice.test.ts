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
} from "./userSlice";

const initStore: TinitialState = {
  user: null,
  profileUser: {
    name: "",
    email: "",
    password: "",
  },
  isAuthChecked: false,
};

describe("Тест userSlice reducer", () => {
  it("Тест setUser", () => {
    const user = {
      name: "Nastya",
      email: "test.email@yandex.ru",
      password: "993938",
    };
    const action = setUser(user);
    const resultState = userSlice.reducer(initStore, action);
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
      name: "Anastasiia",
      email: "",
      password: "",
    };
    const action = setProfileName(profileUser.name);
    const resultState = userSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      user: null,
      profileUser: {
        name: "Anastasiia",
        email: "",
        password: "",
      },
      isAuthChecked: false,
    });
  });

  it("Тест setProfileEmail", () => {
    const profileUser = {
      name: "",
      email: "test@yandex.ru",
      password: "",
    };
    const action = setProfileEmail(profileUser.email);
    const resultState = userSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      user: null,
      profileUser: {
        name: "",
        email: "test@yandex.ru",
        password: "",
      },
      isAuthChecked: false,
    });
  });

  it("Тест setProfilePassword", () => {
    const profileUser = {
      name: "",
      email: "",
      password: "112233",
    };
    const action = setProfilePassword(profileUser.password);
    const resultState = userSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      user: null,
      profileUser: {
        name: "",
        email: "",
        password: "112233",
      },
      isAuthChecked: false,
    });
  });

  it("Тест setName если user null", () => {
    const user = null;
    const action = setName(user);
    const resultState = userSlice.reducer(initStore, action);
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
});
