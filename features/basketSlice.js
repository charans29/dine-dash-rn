import { createSelector, createSlice } from '@reduxjs/toolkit'

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
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      let newBasket = [...state.items];

      if(index >= 0){
        newBasket.splice(index,1)
      }

      state.items = newBasket;
    }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectbasketItems = (state) => state.basket.items;

export const putItem = createSelector(
  [selectbasketItems, (_, id) => id],
  (items, id) => items.filter((item) => item.id === id)
);

export const Basket = (state) => 
  state.basket.items.reduce((total, item) => (total += item.price), 0)

export default basketSlice.reducer;