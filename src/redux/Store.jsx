import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productSlice from "./productSlice";
const rootReducer = {
  cart: cartReducer,
  products: productSlice,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
