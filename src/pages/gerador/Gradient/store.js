import { configureStore } from "@reduxjs/toolkit";
import gradient from "./features/gradient";

const store = configureStore({
  reducer: {
    gradient
  }
});

export default store;
