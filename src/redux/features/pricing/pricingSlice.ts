import { createSlice } from "@reduxjs/toolkit";

export type InitialStateType = {
  primary: number;
  pro: number;
  advanced: number;
  photoPrice: number;
};
const initialState: InitialStateType = {
  primary: 15,
  pro: 35,
  advanced: 200,
  photoPrice: 0.75,
};
const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    setPrimary: (state, action) => {
      state.primary = action.payload;
    },
    setPro: (state, action) => {
      state.pro = action.payload;
    },
    setAdvanced: (state, action) => {
      state.advanced = action.payload;
    },
  },
});

export const { setPrimary, setPro, setAdvanced } = pricingSlice.actions;

export default pricingSlice.reducer;
