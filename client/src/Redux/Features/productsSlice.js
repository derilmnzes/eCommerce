import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
  sortProduct: "",
  priceRange: [0, 500],
};
export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setSortProduct:(state,action)=> {
        state.sortProduct = action.payload
    },
    setPriceRange: (state,action)=> {
        state.priceRange = action.payload
    }
  },
});

export const { setProducts, setProduct,setPriceRange,setSortProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
