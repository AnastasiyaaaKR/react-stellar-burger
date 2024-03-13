import {
  setEmail,
  setPassword,
  setName,
  registrationSlice,
  initialState,
} from "./registrationSlice";
import { testEmail, testPassword, testName } from "../utils/constants";

describe("Тест registrationSlice reducer", () => {
  it("Тест setEmail", () => {
    const email = testEmail;
    const action = setEmail(email);
    const resultState = registrationSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      email: testEmail,
      password: "",
      name: "",
    });
  });

  it("Тест setPassword", () => {
    const password = testPassword;
    const action = setPassword(password);
    const resultState = registrationSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      email: "",
      password: testPassword,
      name: "",
    });
  });

  it("Тест setName", () => {
    const name = testName;
    const action = setName(name);
    const resultState = registrationSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      email: "",
      password: "",
      name: testName,
    });
  });
});
