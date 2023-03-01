import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: {
    open: false,
    message: "",
    severity: "success",
  },
};
export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setsnackbar: (state, action) => {


      state.snackbar = action.payload;
    },
  },
});

export const { setsnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
