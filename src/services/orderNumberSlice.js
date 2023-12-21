import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder as createOrderApi } from "../api";

export const orderNumberSlice = createSlice({
  name: "orderNumber",
  initialState: {
    value: 0,
  },
  reducers: {
    setOrderNumber: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const createOrder = createAsyncThunk(
  "orderNumber/createOrder",
  (ingredients) => {
    return createOrderApi(ingredients).then((res) => {
      return res.order.number;
    });
  }
);

export const selectOrderNumber = (state) => state.orderNumber.value;

export const { setOrderNumber } = orderNumberSlice.actions;

export default orderNumberSlice.reducer;
