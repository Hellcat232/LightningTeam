import { createSlice } from "@reduxjs/toolkit";

import { addWater } from "./operations";

const waterSlice = createSlice({
  name: "water",
  initialState: {
    addWaterValue: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(addWater.pending, (state, action) => {
        state.addWaterValue = [];
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.addWaterValue = action.payload;
        console.log();
      })
      .addCase(addWater.rejected, (state, action) => {});
  },
});

export const waterReducer = waterSlice.reducer;
