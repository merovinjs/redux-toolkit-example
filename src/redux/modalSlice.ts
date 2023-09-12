import { createSlice } from "@reduxjs/toolkit";

export interface DataState {
  value: boolean;
}

const initialState: DataState = {
  value: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalFunc: (state: any) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { modalFunc } = modalSlice.actions;

export default modalSlice.reducer;
