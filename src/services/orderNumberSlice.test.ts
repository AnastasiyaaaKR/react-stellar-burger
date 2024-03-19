import {
  setOrderNumber,
  orderNumberSlice,
  initialState,
} from "./orderNumberSlice";


describe("Тест orderNumberSlice reducer", () => {
  it("Тест setOrderNumber", () => {
    const value = 67875;
    const action = setOrderNumber(value);
    const resultState = orderNumberSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      value : 67875, 
      order: null,
    })
  });
});