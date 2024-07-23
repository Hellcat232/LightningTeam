import { createSlice } from "@reduxjs/toolkit";

import { addWater, fetchFullDay, updateWater, deleteWater } from "./operations";

const waterSlice = createSlice({
  name: "water",
  initialState: {
    addWaterValue: [],
    fullDay: {
      msg: "",
      waterRate: {},
      waterRecord: [],
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addWater.pending, (state, action) => {
        state.addWaterValue = [];
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.addWaterValue.push(action.payload);
        const newRecord = action.payload.waterRecord;
        if (state.fullDay.waterRecord) {
          state.fullDay.waterRecord.push(newRecord);
        } else {
          state.fullDay.waterRecord = [newRecord];
        }
      })
      .addCase(addWater.rejected, (state, action) => {
        state.addWaterValue = [];
      })
      .addCase(fetchFullDay.pending, () => {})
      .addCase(fetchFullDay.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.fullDay = action.payload.data;
      })
      .addCase(fetchFullDay.rejected, () => {});
  },
});

export const waterReducer = waterSlice.reducer;
