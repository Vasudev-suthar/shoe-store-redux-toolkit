// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const shoe = action.payload;
      const itemInCart = state.cartItems.find(item => item.id === shoe.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cartItems.push({ ...shoe, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      } else {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
