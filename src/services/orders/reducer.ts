import { WebsocketStatus } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actions";
import { IOrder } from "../../../types";
import { RootState } from "../storage";

export type OrdersStore = {
  status: WebsocketStatus;
  connectionError: string;
  orders: IOrder[];
  total: number;
  totalToday: number;
};

const initialState: OrdersStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  orders: [],
  total: 0,
  totalToday: 0,
};

export const ordersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsOpen, (state) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = "";
    })
    .addCase(wsClose, (state) => {
      state.status = WebsocketStatus.OFFLINE;
    })
    .addCase(wsError, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessage, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    });
});

export const selectOrders = (state: RootState) => state.orders.orders;

export const selectTotal = (state: RootState) => state.orders.total;

export const selectTotalToday = (state: RootState) => state.orders.totalToday;
