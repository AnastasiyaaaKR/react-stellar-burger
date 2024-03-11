import {
  setEmail,
  setPassword,
  setName,
  registrationSlice,
} from "./registrationSlice";

const initStore = {
  email: "",
  password: "",
  name: "",
};

describe("Тест registrationSlice reducer", () => {
  it("Тест setEmail", () => {
    const email = "email@test.ru";
    const action = setEmail(email);
    const resultState = registrationSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      email: "email@test.ru",
      password: "",
      name: "",
    });
  });

  it("Тест setPassword", () => {
    const password = "112233";
    const action = setPassword(password);
    const resultState = registrationSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      email: "",
      password: "112233",
      name: "",
    });
  });

  it("Тест setName", () => {
    const name = "Nastya";
    const action = setName(name);
    const resultState = registrationSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      email: "",
      password: "",
      name: "Nastya",
    });
  });
});
