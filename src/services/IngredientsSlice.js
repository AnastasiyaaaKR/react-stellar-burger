import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getIngridients } from "../api";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    value: [],
    currentType: "bun",
  },
  reducers: {
    incrementCount: (state, action) => {
      const el = state.value.find((el) => el._id === action.payload);
      el.__v += 1;
    },
    incrementCountBun: (state, action) => {
      const el = state.value.find((el) => el._id === action.payload);
      for (const ingredient of state.value) {
        if (ingredient.type === "bun") {
          ingredient.__v = 0;
        }
      }
      el.__v = 1;
    },
    decrementCount: (state, action) => {
      const el = state.value.find((el) => el._id === action.payload);
      el.__v -= 1;
    },
    setCurrentType: (state, action) => {
      state.currentType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngridients.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const fetchIngridients = createAsyncThunk(
  "ingredients/fetchIngridients",
  () => {
    return getIngridients().then((res) => {
      return res.data;
    });
  }
);

export const {
  incrementCount,
  incrementCountBun,
  decrementCount,
  setCurrentType,
} = ingredientsSlice.actions;
export const selectIngridients = (state) => state.ingredients.value;
export const selectCurrentType = (state) => state.ingredients.currentType;
export default ingredientsSlice.reducer;
