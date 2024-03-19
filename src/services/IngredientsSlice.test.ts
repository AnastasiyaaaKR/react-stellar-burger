import {
  initialState,
  incrementCount,
  incrementCountBun,
  decrementCount,
  setCurrentType,
  ingredientsSlice,
} from "./IngredientsSlice";

describe("Тест ingredientsSlice reducer", () => {

it("Тест setCurrentType", () => {
  const currentType = "bun";
  const action = setCurrentType(currentType);
  const resultState = ingredientsSlice.reducer(initialState, action);
  expect(resultState).toEqual({
    currentType: "bun",
    value: [],
  });
})
});
