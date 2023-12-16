import { createSlice } from '@reduxjs/toolkit'

export const constructorIngridientSlice = createSlice({
  name: 'constructorIngridients',
  initialState: {
    value: []
  },
  reducers: {
    setConstructorIngridients: (state, action) => {
      state.value = action.payload
    }
  }
})

export const selectConstructorIngridients = state => state.constructorIngridients.value

export const { setConstructorIngridients } = constructorIngridientSlice.actions

export default constructorIngridientSlice.reducer

