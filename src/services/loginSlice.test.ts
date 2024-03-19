import { setEmail, setPassword, loginSlice, initialState } from "./loginSlice";
import { testEmail, testPassword } from "../utils/constants";

describe("Тест loginSlice reducer", () => {
  it("Тест setEmail", () => {
    const email = testEmail;
    const action = setEmail(email);
    const resultState = loginSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      email: testEmail,
      password: "",
    });
  });

  it("Тест setPassword", () => {
    const password = testPassword;
    const action = setPassword(password);
    const resultState = loginSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      password: testPassword, 
      email: '',
    });
  });
})