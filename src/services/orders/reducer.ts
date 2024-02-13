import { Orders, WebsocketStatus } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import { ordersUpdate } from "./ordersUpdate";
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actions";

export type OrdersStore = {
  status: WebsocketStatus;
  connectionError: string;
  orders: Orders;
};

const initialState: OrdersStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  orders: [],
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
      state.orders = ordersUpdate(state.orders, action.payload);
    });
});
