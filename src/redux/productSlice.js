import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const organisationId = import.meta.env.VITE_ORGANISATION_ID;
const appId = import.meta.env.VITE_APP_ID;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/products?organization_id=${organisationId}&reverse_sort=false&page=3&size=10&Appid=${appId}&Apikey=${apiKey}`
      );
      console.log("my response", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    selectedProduct: null,
  },
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    updateProduct(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  setProducts,
  addProduct,
  updateProduct,
  removeProduct,
  setSelectedProduct,
  setStatus,
  setError,
} = productSlice.actions;

export default productSlice.reducer;
