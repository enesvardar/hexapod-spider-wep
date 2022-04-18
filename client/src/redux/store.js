// file: store.ts
import { configureStore } from "@reduxjs/toolkit";
import bodySlice from "./body/bodySlice";
import legsSlice from "./legs/legsSlice";
import tracesSlice from "./traces/tracesSlice";

export const store = configureStore({
  reducer: {
    body: bodySlice,
    legs: legsSlice,
    traces: tracesSlice,
  },
});
