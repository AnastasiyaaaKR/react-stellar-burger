import {
  setToken,
  setPassword,
  resetPasswordSlice,
} from "./resetPasswordSlice";

const initStore = {
  token: "",
  password: "",
};

describe("Тест resetPasswordSlice reducer", () => {
  it("Тест setToken", () => {
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGM3MzI3ODc4OTljMDAxYjgyNWQ1MSIsImlhdCI6MTcxMDAwMTE2MiwiZXhwIjoxNzEwMDAyMzYyfQ.Mkt5rYMBRQ9EWS7_zn-v_Z4XwxI5Idda-c_TTd446oE";
    const action = setToken(token);
    const resultState = resetPasswordSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGM3MzI3ODc4OTljMDAxYjgyNWQ1MSIsImlhdCI6MTcxMDAwMTE2MiwiZXhwIjoxNzEwMDAyMzYyfQ.Mkt5rYMBRQ9EWS7_zn-v_Z4XwxI5Idda-c_TTd446oE",
      password: "",
    });
  });

  it("Тест setPassword", () => {
    const password = '112233'
    const action = setPassword(password);
    const resultState = resetPasswordSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      token: "",
      password: "112233",
    });
  });
});
