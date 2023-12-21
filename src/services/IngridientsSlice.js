import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getIngridients } from "../api";

export const ingridientsSlice = createSlice({
  name: "ingridients",
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
      for (const ingridient of state.value) {
        if (ingridient.type === "bun") {
          ingridient.__v = 0;
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
  "ingridients/fetchIngridients",
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
} = ingridientsSlice.actions;
export const selectIngridients = (state) => state.ingridients.value;
export const selectCurrentType = (state) => state.ingridients.currentType;
export default ingridientsSlice.reducer;
