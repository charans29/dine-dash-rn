import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [] 
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.value -= 1
    }
  }
})

export const { addToBasket, removeFromBasket  } = basketSlice.actions;

export const selectbasketItems = (state) => state.basket.items;

export default basketSlice.reducer;