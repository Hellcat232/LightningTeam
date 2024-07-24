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

    // record: [],
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
      .addCase(fetchFullDay.pending, (state, action) => {
        state.fullDay = [];
      })
      .addCase(fetchFullDay.fulfilled, (state, action) => {
        state.fullDay = action.payload.data;
      })
      .addCase(fetchFullDay.rejected, (state, action) => {})

      .addCase(deleteWater.fulfilled, (state, action) => {
        state.records = state.records.filter(
          (record) => record._id !== action.payload
        );
        // state.record = [];
        console.log(state.records);
      })
      .addCase(deleteWater.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateWater.pending, (state, action) => {})
      .addCase(updateWater.fulfilled, (state, action) => {
        // state.fullDay = action.payload.data;
      })
      .addCase(updateWater.rejected, (state, action) => {});
  },
});

export const waterReducer = waterSlice.reducer;
