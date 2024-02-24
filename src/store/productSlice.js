import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 0
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    incQty(state, action) {
      state.qty += 1;
    },

    decQty(state, action) {
      if (state.qty > 1) {
        state.qty -= 1;
      }
    },

    onAdd(state, action) {
      const { quantity, details } = action.payload;
      const existingItem = state.cartItems.find(item => item._id === details._id);

      if (existingItem) {
        // If the item already exists in the cart, update its quantity and total price
        existingItem.quantity += quantity;
        state.totalPrice += details.price * quantity;
        state.totalQuantities += quantity;
      } else {
        // If the item is not in the cart, add it
        state.cartItems.push({ ...details, quantity });
        state.totalPrice += details.price * quantity;
        state.totalQuantities += quantity;
      }

      toast.success(`${quantity} ${details.name} added to the cart.`);
    },

    showCartFtn(state, action){
      state.showCart = action.payload
    },

    removeItem(state, action) {
      const updatedItem = state.cartItems.find(
        (item) => item._id === action.payload
      );

      state.totalQuantities -= updatedItem.quantity;
      state.totalPrice -= updatedItem.price * updatedItem.quantity;

      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    }
  }
});

export const { incQty, decQty, onAdd, showCartFtn, removeItem } = productSlice.actions;

export default productSlice.reducer;
