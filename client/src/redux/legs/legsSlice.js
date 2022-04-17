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

    setLeg: (state, action) => {
      if(action.payload.angle == "alpha"){
        state.info[action.payload.index].alpha = action.payload.value;
      }
      else if(action.payload.beta == "beta"){
        state.info[action.payload.index].beta = action.payload.value;
      }
      else if(action.payload.angle == "gama"){
        state.info[action.payload.index].gama = action.payload.value;
      }

    },
  },
});

export const { setLegs, setLeg } = legsSlice.actions;
export default legsSlice.reducer;
