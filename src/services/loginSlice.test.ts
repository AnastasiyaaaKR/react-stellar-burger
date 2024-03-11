import { setEmail, setPassword, loginSlice } from "./loginSlice";

const initStore = {
   email: "",
   password: "",
};

describe("Тест loginSlice reducer", () => {
  it("Тест setEmail", () => {
    const email = "email@test.ru";
    const action = setEmail(email);
    const resultState = loginSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      email: "email@test.ru",
      password: "",
    });
  });

  it("Тест setPassword", () => {
    const password = '12345';
    const action = setPassword(password);
    const resultState = loginSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      password: '12345', 
      email: '',
    });
  });
})