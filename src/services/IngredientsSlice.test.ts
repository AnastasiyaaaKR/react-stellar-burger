import {
  TinitialState,
  incrementCount,
  incrementCountBun,
  decrementCount,
  setCurrentType,
  ingredientsSlice,
} from "./IngredientsSlice";
import { IIngredient } from "../../types";

const initStore: TinitialState = {
  value: [],
  currentType: "",
};

describe("Тест ingredientsSlice reducer", () => {

it("Тест setCurrentType", () => {
  const currentType = "bun";
  const action = setCurrentType(currentType);
  const resultState = ingredientsSlice.reducer(initStore, action);
  expect(resultState).toEqual({
    currentType: "bun",
    value: [],
  });
})
});
