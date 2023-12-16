import { createSlice } from '@reduxjs/toolkit'

export const orderNumberSlice = createSlice({
  name: 'orderNumber',
  initialState: {
    value: 0
  },
  reducers: {
    setOrderNumber: (state, action) => {
      state.value = action.payload
    }
  }
})

export const selectOrderNumber = state => state.orderNumber.value

export const { setOrderNumber } = orderNumberSlice.actions

export default orderNumberSlice.reducer