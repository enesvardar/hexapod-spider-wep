// file: store.ts
import { configureStore } from "@reduxjs/toolkit";
import bodySlice from "./body/bodySlice";

export const store = configureStore({
  reducer: {
    body: bodySlice,
  },
});
