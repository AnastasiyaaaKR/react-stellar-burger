import {
  setToken,
  setPassword,
  resetPasswordSlice,
  initialState,
} from "./resetPasswordSlice";
import { testPassword, testToken } from "../utils/constants";

describe("Тест resetPasswordSlice reducer", () => {
  it("Тест setToken", () => {
    const token = testToken;
    const action = setToken(token);
    const resultState = resetPasswordSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      token: testToken,
      password: "",
    });
  });

  it("Тест setPassword", () => {
    const password = testPassword;
    const action = setPassword(password);
    const resultState = resetPasswordSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      token: "",
      password: testPassword,
    });
  });
});
