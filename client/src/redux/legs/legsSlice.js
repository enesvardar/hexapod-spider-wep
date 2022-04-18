import { createSlice } from "@reduxjs/toolkit";

// örnek olarak aşağıdaki değerleri tutmak için oluşturuldu.
// NAME	      ALPHA	BETA	GAMA
// leftBack	    0	  -40	   32
// leftMiddle	  0	  -40	   32
// leftFront	  0	  -40	   32
// rightFront	  0	  -40	   32
// rightMiddle	0	  -40	   32
// rightBack	  0	  -40	   32

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
      if (action.payload.angle == "alpha") {
        state.info[action.payload.index].alpha = action.payload.value;
      } else if (action.payload.angle == "beta") {
        state.info[action.payload.index].beta = action.payload.value;
      } else if (action.payload.angle == "gama") {
        state.info[action.payload.index].gama = action.payload.value;
      }
    },
  },
});

export const { setLegs, setLeg } = legsSlice.actions;
export default legsSlice.reducer;
