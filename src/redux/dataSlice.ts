import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  data: any[];
}

const initialState: DataState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action: PayloadAction<any>) => {
      state.data = [...state.data, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { createDataFunc } = dataSlice.actions;

export default dataSlice.reducer;
