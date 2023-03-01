import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { adminSlice } from "./Features/admin";
import { ProductSlice } from "./Features/productsSlice";
import  { snackbarSlice } from "./Features/snackbar";
import { composeWithDevTools } from "redux-devtools-extension";
export const rootReducer = combineReducers({
  products: ProductSlice.reducer,
  admin: adminSlice.reducer,
  snackbar:snackbarSlice.reducer
});

export const store = createStore(rootReducer,composeWithDevTools());




