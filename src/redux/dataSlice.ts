import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  value: any[];
}

const initialState: DataState = {
  value: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {} = dataSlice.actions;

export default dataSlice.reducer;
