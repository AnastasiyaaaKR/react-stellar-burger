import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrders } from "../api";
import { IOrder, RootState } from "../../types";


type TinitialState = {
  orders: IOrder[];
}

export const ordersFeedSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  } as TinitialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      // state.orders = action.payload;
    });
}});

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  () => {
    return getOrders().then((res) => {
      return res;
    });
  }
)

export const selectOrders = (state: RootState) => state.orders.orders;
export default ordersFeedSlice.reducer;

