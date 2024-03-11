import {
  setOrderNumber,
  orderNumberSlice,
  TinitialState,
} from "./orderNumberSlice";

const initStore: TinitialState = {
  value: 0,
  order: null,
};

describe("Тест orderNumberSlice reducer", () => {
  it("Тест setOrderNumber", () => {
    const value = 67875;
    const action = setOrderNumber(value);
    const resultState = orderNumberSlice.reducer(initStore, action);
    expect(resultState).toEqual({
      value : 67875, 
      order: null,
    })
  });
});