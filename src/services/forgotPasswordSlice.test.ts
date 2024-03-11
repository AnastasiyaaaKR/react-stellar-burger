import { setEmail, forgotPasswordSlice } from "./forgotPasswordSlice";

const initStore = {
  value: '',
};

describe("Тест forgotPasswordSlice reducer", () => {
  it("Тест setEmail", () => {
    const value = 'email@test.ru';
    const action = setEmail(value);
    const resultState = forgotPasswordSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      value: 'email@test.ru',
    });
  });
})