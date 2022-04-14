import { createSlice } from "@reduxjs/toolkit";

export const bodySlice = createSlice({
  name: "body",
  initialState: {

    coxia: 53,
    tibia: 70,
    femuar: 92,

    bufSldTx: 0,
    bufSldTy: 0,
    bufSldTz: 0,
    bufSldRx: 0,
    bufSldRy: 0,
    bufSldRz: 0,

    tX: 0,
    tY: 0,
    tZ: 0,
    rX: 0,
    rY: 0,
    rZ: 0,

  },
  reducers: {

    setCoxia: (state, action) => {
      state.coxia = action.payload;
    },

    setTibia: (state, action) => {
      state.tibia = action.payload;
    },

    setFemuar: (state, action) => {
      state.femuar = action.payload;
    },

    setTx: (state, action) => {
      let change = (action.payload - state.bufSldTx);
      state.bufSldTx = action.payload;
      state.tX = state.tX + change;
    },

    setTy: (state, action) => {
      let change = (action.payload - state.bufSldTy);
      state.bufSldTy = action.payload;
      state.tY = state.tY + change;
    },

    setTz: (state, action) => {
      let change = (action.payload - state.bufSldTz);
      state.bufSldTz = action.payload;
      state.tZ = state.tZ + change;
    },

    setRx: (state, action) => {
      let change = (action.payload - state.bufSldRx);
      state.bufSldRx = action.payload;
      state.rX = state.rX + change;
    },

    setRy: (state, action) => {
      let change = (action.payload - state.bufSldRy);
      state.bufSldRy = action.payload;
      state.rY = state.rY + change;
    },

    setRz: (state, action) => {
      let change = (action.payload - state.bufSldRz);
      state.bufSldRz = action.payload;
      state.rZ = state.rZ + change;
    },
  },
});

export const { setTx, setTy, setTz, setRx, setRy, setRz, setCoxia, setTibia, setFemuar } = bodySlice.actions;
export default bodySlice.reducer;
