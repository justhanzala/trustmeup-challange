import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
  name: "product",
  initialState: {
    productsData: [],
    cartData: [],
  },
  reducers: {
    setProductsData: (state, action) => {
      state.productsData = action.payload;
    },
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
  },
});

export default product;
