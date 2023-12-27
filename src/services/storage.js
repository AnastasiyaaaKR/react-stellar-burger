import { configureStore } from '@reduxjs/toolkit'
import ingridientsReducer from './IngridientsSlice'
import modalIngridientReducer from "./modalIngridientSlice"
import orderNumberReducer from "./orderNumberSlice";
import constructorIngridientsReducer from "./constructorIngridientSlice";
import forgotPasswordReducer from "./forgotPasswordSlice";
import resetPasswordReducer from "./resetPasswordSlice";
import registrationReducer from "./registrationSlice";


export default configureStore({
  reducer: {
    ingridients: ingridientsReducer,
    modalIngridient: modalIngridientReducer,
    orderNumber: orderNumberReducer,
    constructorIngridients: constructorIngridientsReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    registration: registrationReducer,
  }
})