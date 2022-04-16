import { createSlice } from "@reduxjs/toolkit";

export const legsSlice = createSlice({
  name: "legs",
  
  initialState: {
    info: [],
  },

  reducers: {

    setLegs: (state, action) => {
      state.info = action.payload;
    },
  },

});

export const { setLegs } = legsSlice.actions;
export default legsSlice.reducer;
