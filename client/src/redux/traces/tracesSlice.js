import { createSlice } from "@reduxjs/toolkit";


export const tracesSlice = createSlice({
  name: "traces",

  initialState: {
    value: [],
  },

  reducers: {
    setTraces: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTraces } = tracesSlice.actions;
export default tracesSlice.reducer;
