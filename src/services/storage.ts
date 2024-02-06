import { configureStore } from '@reduxjs/toolkit'
import ingredientsReducer from './IngredientsSlice'
import modalIngridientReducer from "./modalIngridientSlice"
import orderNumberReducer from "./orderNumberSlice";
import constructorIngridientsReducer from "./constructorIngridientSlice";
import forgotPasswordReducer from "./forgotPasswordSlice";
import resetPasswordReducer from "./resetPasswordSlice";
import registrationReducer from "./registrationSlice";
import loginReducer from "./loginSlice";
import userReducer from './userSlice';
import ordersReducer from "./ordersFeedSlice";


export default configureStore({
  reducer: {
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
  }
})
