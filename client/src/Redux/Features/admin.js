import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {},
  isAuth: false,
};
export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const { setAdmin, setAuth } = adminSlice.actions;

export default adminSlice.reducer;
