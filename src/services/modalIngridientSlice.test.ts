import {
  setModalIngredient,
  deleteModalIngridient,
  modalIngridientSlice,
  initialState
} from "./modalIngridientSlice";
import { testIngredient } from "../utils/constants";

describe("Тест modalIngridientSlice reducer", () => {
  it("Тест setModalIngredient", () => {
    const value = testIngredient;
    const action = setModalIngredient(value);
    const resultState = modalIngridientSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      value : testIngredient
    });
  });

  it("Тест deleteModalIngridient", () => {
    const value = testIngredient;
    const action = deleteModalIngridient();
    const resultState = modalIngridientSlice.reducer(initialState, action);
    expect(resultState).toEqual({
      value: null,
    });
  });
});
