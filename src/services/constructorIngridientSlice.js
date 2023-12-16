import { createSlice } from '@reduxjs/toolkit'

export const constructorIngridientSlice = createSlice({
  name: 'constructorIngridients',
  initialState: {
    bun:null,
    ingridients: []
  },
  reducers: {
    setConstructorIngridients: (state, action) => {
      state.ingridients = action.payload
    }, 
    addNewIngridient: (state, action) => {
      state.ingridients.push(action.payload)
    },
    setBun: (state, action) => {
      state.bun = action.payload
    },
    changeIngridients: (state, action) => {
      const{indexFrom, indexTo, ingridient} = action.payload;
      state.ingridients.splice(indexFrom, 1);
      state.ingridients.splice(indexTo, 0, ingridient);
    }
  }
})

export const selectConstructorIngridients = state => state.constructorIngridients.ingridients;
export const selectConstructorBun = state => state.constructorIngridients.bun;
export const { setConstructorIngridients, addNewIngridient, setBun, changeIngridients } = constructorIngridientSlice.actions;
export default constructorIngridientSlice.reducer;

