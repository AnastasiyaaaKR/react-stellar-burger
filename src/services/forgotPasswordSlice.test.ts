import { setEmail, forgotPasswordSlice, initialState } from "./forgotPasswordSlice";
import { testEmail } from "../utils/constants";

describe("Тест forgotPasswordSlice reducer", () => {
  it("Тест setEmail", () => {
    const value = testEmail;
    const action = setEmail(value);
    const resultState = forgotPasswordSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      value: testEmail,
    });
  });
})