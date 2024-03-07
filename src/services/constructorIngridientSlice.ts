import { createSlice } from "@reduxjs/toolkit";
import { IIngredient } from "../../types";
import { RootState } from "./storage";

type TinitialState = {
  bun: IIngredient | null,
  ingridients: IIngredient[],
}

export const constructorIngridientSlice = createSlice({
  name: "constructorIngridients",
  initialState: {
    bun: null,
    ingridients: [],
  } as TinitialState,
  reducers: {
    setConstructorIngridients: (state, action) => {
      state.ingridients = action.payload;
    },
    addNewIngridient: (state, action) => {
      state.ingridients.push(action.payload);
    },
    setBun: (state, action) => {
      state.bun = action.payload;
    },
    changeIngridients: (state, action) => {
      const { indexFrom, indexTo, ingridient } = action.payload;
      state.ingridients.splice(indexFrom, 1);
      state.ingridients.splice(indexTo, 0, ingridient);
    },
    removeIngridient: (state, action) => {
      const index = state.ingridients.findIndex(
        (ingridient) => ingridient._constId === action.payload._constId
      );
      state.ingridients.splice(index, 1);
    },
    cleanBurgerIngridients: (state) => {
      state.ingridients = [];
      state.bun = null;
    }, 
  },
});

export const selectConstructorIngridients = (state: RootState) =>
  state.constructorIngridients.ingridients;
export const selectConstructorBun = (state: RootState) => state.constructorIngridients.bun;
export const {
  setConstructorIngridients,
  addNewIngridient,
  setBun,
  changeIngridients,
  removeIngridient,
  cleanBurgerIngridients,
} = constructorIngridientSlice.actions;
export default constructorIngridientSlice.reducer;
