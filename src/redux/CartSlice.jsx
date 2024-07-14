import { createSlice } from "@reduxjs/toolkit";

const storeInLocalStorge = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  //create cart slice
  name: "cart",
  initialState: {
    data: [],
    totalItems: 0,
    totalAmounts: 0,
    deliveryCharge: 50,
  },
  reducers: {
    addToCart(state, action) {
      //add to cart
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const tempCart = state.data.map((item) => {
          if (item.id === action.payload.id) {
            let newQty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQty * item.Price;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.data = tempCart;
        storeInLocalStorge(state.data);
      } else {
        state.data.push(action.payload);
        storeInLocalStorge(state.data);
      }
    },
    updateQuantity: (state, action) => {
      //update quantity
      const { id, quantity } = action.payload;
      const itemToUpdate = state.data.find((item) => item.id === id);

      if (itemToUpdate) {
        const validQuantity = Math.max(quantity || 1, 1);
        itemToUpdate.quantity = validQuantity;
        itemToUpdate.totalPrice = itemToUpdate.Price * quantity;
      }
    },

    removeItem(state, action) {
      //remove item from cart
      const tempCart = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.data = tempCart;
      storeInLocalStorge(state.data);
    },
    getCartTotal(state) {
      //get cart total price
      state.totalAmounts = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.data.length;
    },
  },
});

export const { addToCart, removeItem, getCartTotal, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
