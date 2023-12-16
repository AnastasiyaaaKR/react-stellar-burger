import { createSlice } from '@reduxjs/toolkit'

export const ingridientsSlice = createSlice({
  name: 'ingridients',
  initialState: {
    value: []
  },
  reducers: {
    setIngredients: (state, action) => {
      state.value = action.payload
    }
  }
})

export const selectIngridients = state => state.ingridients.value

export const { setIngredients } = ingridientsSlice.actions

export default ingridientsSlice.reducer

