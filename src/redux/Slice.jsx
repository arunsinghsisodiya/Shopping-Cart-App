import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "productShop",
  initialState: {
    value: [],
  },
  reducers: {
    addproductDetails: (state, action) => {
      const p_data = action.payload;
      state.value.push({
        product: p_data,
        qty: 1,
      });
    },
    removeProductDetails: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((obj) => obj.product.id !== id);
    },
    incrementProductQty: (state, action) => {
      const id = action.payload;
      state.value = state.value.map((obj) =>
        obj.product.id === id ? { ...obj, qty: obj.qty + 1 } : obj
      );
    },
    decrementProductQty: (state, action) => {
      const id = action.payload;
      state.value = state.value.map((obj) =>
        obj.product.id === id ? { ...obj, qty: obj.qty - 1 } : obj
      );
    },
  },
});

export const {
  addproductDetails,
  removeProductDetails,
  incrementProductQty,
  decrementProductQty,
} = slice.actions;

export default slice.reducer;
