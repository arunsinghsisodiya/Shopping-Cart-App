import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice.jsx";

const store = configureStore({
  reducer: {
    mycartDetails: productSlice,
  },
});

export default store;
