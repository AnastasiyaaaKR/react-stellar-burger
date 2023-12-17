import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getIngridients } from "../api";

export const ingridientsSlice = createSlice({
  name: "ingridients",
  initialState: {
    value: [],
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

export const { incrementCount, incrementCountBun, decrementCount } = ingridientsSlice.actions;
export const selectIngridients = (state) => state.ingridients.value;
export default ingridientsSlice.reducer;
