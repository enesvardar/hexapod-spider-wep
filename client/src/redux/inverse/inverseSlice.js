import { createSlice } from "@reduxjs/toolkit";

export const inverseSlice = createSlice({
  name: "inverse",
  initialState: {
    tX: 0,
    tY: 0,
    tZ: 0,
    rX: 0,
    rY: 0,
    rZ: 0,

    buftX: 0,
    buftY: 0,
    buftZ: 0,
    bufrX: 0,
    bufrY: 0,
    bufrZ: 0,

    chngtX: 0,
    chngtY: 0,
    chngtZ: 0,
    chngrX: 0,
    chngrY: 0,
    chngrZ: 0,

  },
  reducers: {
    setTx: (state, action) => {
      state.buftX = state.tX;
      state.tX = action.payload;
      state.chngtX = 80*(state.tX - state.buftX)/100;
    },

    setTy: (state, action) => {
      state.buftY = state.tY;
      state.tY = action.payload;
      state.chngtY = 80*(state.tY - state.buftY)/100;
    },

    setTz: (state, action) => {
      state.buftZ = state.tZ;
      state.tZ = action.payload;
      state.chngtZ = 80*(state.tZ - state.buftZ)/100;
    },

    setRx: (state, action) => {
      state.bufrX = state.rX;
      state.rX = action.payload;
      state.chngrX = 80*(state.rX - state.bufrX)/100;
    },

    setRy: (state, action) => {
      state.bufrY = state.rY;
      state.rY = action.payload;
      state.chngrY = 80*(state.rY - state.bufrY)/100;
    },

    setRz: (state, action) => {
      state.bufrZ = state.rZ;
      state.rZ = action.payload;
      state.chngrZ = 80*(state.rZ - state.bufrZ)/100;
    },
  },
});

export const { setTx, setTy, setTz, setRx, setRy, setRz} = inverseSlice.actions;
export default inverseSlice.reducer;
