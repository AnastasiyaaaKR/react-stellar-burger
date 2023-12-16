import { configureStore } from '@reduxjs/toolkit'
import ingridientsReducer from './IngridientsSlice'
import modalIngridientReducer from "./modalIngridientSlice"
import orderNumberReducer from "./orderNumberSlice";
import constructorIngridientsReducer from "./constructorIngridientSlice";


export default configureStore({
  reducer: {
    ingridients: ingridientsReducer,
    modalIngridient: modalIngridientReducer,
    orderNumber: orderNumberReducer,
    constructorIngridients: constructorIngridientsReducer, 
  }
})