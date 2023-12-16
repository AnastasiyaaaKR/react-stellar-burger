import { createSlice } from '@reduxjs/toolkit'

export const modalIngridientSlice = createSlice({
  name: 'modalIngridient',
  initialState: {
    value: {}
  },
  reducers: {
    setModalIngredient: (state, action) => {
      state.value = action.payload
    }
  }
})

export const selectModalIngridient = state => state.modalIngridient.value

export const { setModalIngredient } = modalIngridientSlice.actions

export default modalIngridientSlice.reducer