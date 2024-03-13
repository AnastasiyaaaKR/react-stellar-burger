import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder as createOrderApi } from "../api";
import { RootState } from "./storage";
import { IOrder } from "../../types";

type TinitialState = {
  value: number;
  order: IOrder | null;
};

export const initialState = {
  value: 0,
  order: null,
} as TinitialState;

export const orderNumberSlice = createSlice({
  name: "orderNumber",
  initialState,
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
  (ingredients: string[]) => {
    return createOrderApi(ingredients).then((res) => {
      return res.order.number;
    });
  }
);

export const selectOrderNumber = (state: RootState) => state.orderNumber.value;

export const selectOrder = (state: RootState) => state.orderNumber.order;

export const { setOrderNumber } = orderNumberSlice.actions;

export default orderNumberSlice.reducer;
