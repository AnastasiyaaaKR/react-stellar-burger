import { createSlice } from "@reduxjs/toolkit";
import { IIngredient } from "../../types";
import { RootState } from "./storage";

type TinitialState = {
   value: IIngredient | null,
}

export const modalIngridientSlice = createSlice({
  name: "modalIngridient",
  initialState: {
    value: null,
  } as TinitialState,
  reducers: {
    setModalIngredient: (state, action) => {
      state.value = action.payload;
    },
    deleteModalIngridient: (state) => {
      state.value = null;
    },
  },
});

export const selectModalIngridient = (state: RootState) => state.modalIngridient.value;
export const { setModalIngredient, deleteModalIngridient } =
  modalIngridientSlice.actions;
export default modalIngridientSlice.reducer;
