import { createSlice } from '@reduxjs/toolkit'

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: {
      id: null,
      imgUrl: null,
      title: null,
      rating: null,
      lat:null,
      lon:null,
      genre: null,
      address: null,
      shortDescription: null,
      dishes: null
    }
  },
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload;
    }
  }
})

export const { setRestaurant } = restaurantSlice.actions;

export const selecRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;