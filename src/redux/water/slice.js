import { createSlice } from "@reduxjs/toolkit";

import { addWater, fetchFullDay, updateWater } from "./operations";

const waterSlice = createSlice({
  name: "water",
  initialState: {
    addWaterValue: [],
    fullDay: [],
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
      .addCase(addWater.rejected, (state, action) => {})
      .addCase(fetchFullDay.pending, () => {})
      .addCase(fetchFullDay.fulfilled, () => {})
      .addCase(fetchFullDay.rejected, () => {});
  },
});

export const waterReducer = waterSlice.reducer;
