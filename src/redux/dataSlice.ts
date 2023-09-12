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
    sortDataFunc: (state, action: PayloadAction<any>) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
            ? b.price - a.price
            : b.price - a.price
        ),
      ];
    },
    deleteDataFunc: (state, action: PayloadAction<any>) => {
      state.data = [...state.data.filter((item) => item.id !== action.payload)];
    },
    updateDataFunc: (state, action: PayloadAction<any>) => {
      state.data = [
        ...state.data.map((item) =>
          item.id == action.payload.id ? { ...item, ...action.payload } : item
        ),
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { createDataFunc, deleteDataFunc, updateDataFunc, sortDataFunc } =
  dataSlice.actions;

export default dataSlice.reducer;
