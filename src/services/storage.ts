import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./IngredientsSlice";
import modalIngridientReducer from "./modalIngridientSlice";
import orderNumberReducer from "./orderNumberSlice";
import constructorIngridientsReducer from "./constructorIngridientSlice";
import forgotPasswordReducer from "./forgotPasswordSlice";
import resetPasswordReducer from "./resetPasswordSlice";
import registrationReducer from "./registrationSlice";
import loginReducer from "./loginSlice";
import userReducer from "./userSlice";
import { ordersReducer }from './orders/reducer';
import { socketMiddleware } from "./socketMiddleware";
import { 
  connect as OrdersWsConnect, 
  disconnect as OrdersWsDisconnect,
  wsConnecting as OrdersWsConnecting,
  wsOpen as OrdersWsOpen,
  wsClose as OrdersWsClose,
  wsMessage as OrdersWsNessage,
  wsError as OrdersWsError 
} from "./orders/actions";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  modalIngridient: modalIngridientReducer,
  orderNumber: orderNumberReducer,
  constructorIngridients: constructorIngridientsReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  registration: registrationReducer,
  login: loginReducer,
  user: userReducer,
  orders: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const wsActions = {
  wsConnect: OrdersWsConnect,
  wsDisconnect: OrdersWsDisconnect,
  wsConnecting: OrdersWsConnecting,
  onOpen: OrdersWsOpen,
  onClose: OrdersWsClose,
  onError: OrdersWsError,
  onMessage: OrdersWsNessage,
};

const ordersMiddleware = socketMiddleware(wsActions);

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ordersMiddleware);
  },
});
