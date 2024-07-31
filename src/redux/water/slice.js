import { createSlice } from "@reduxjs/toolkit";
import {
  addWater,
  fetchFullDay,
  updateWater,
  deleteWater,
  getMonthWaterFrontConteroller,
} from "./operations";

const waterSlice = createSlice({
  name: "water",
  initialState: {
    addWaterValue: [],
    fullDay: {
      msg: "",
      waterRate: {},
      allWaterRecord: [],
    },
    fullMonth: {},
    record: [],
    status: "idle",
    error: null,
    isClick: "pending" | "fulfilled" | "rejected",
  },
  extraReducers: (builder) => {
    builder
      .addCase(addWater.pending, (state, action) => {
        state.addWaterValue = [];
        state.isClick = "pending";
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.isClick = "fulfilled";
        state.addWaterValue.push(action.payload);
        const newRecord = action.payload.waterRecord;
        if (state.fullDay.allWaterRecord) {
          state.fullDay.allWaterRecord.push(newRecord);
        } else {
          state.fullDay.allWaterRecord = [newRecord];
        }
      })
      .addCase(addWater.rejected, (state) => {
        state.addWaterValue = [];
        state.isClick = "rejected";
      })
      .addCase(fetchFullDay.pending, (state, action) => {
        state.isClick = "pending";
        state.fullDay = {
          msg: "",
          waterRate: {},
          allWaterRecord: [],
        };
      })
      .addCase(fetchFullDay.fulfilled, (state, action) => {
        state.isClick = "fulfilled";
        state.fullDay = {
          ...action.payload.data,
          allWaterRecord: action.payload.data.allWaterRecord,
        };
      })
      .addCase(fetchFullDay.rejected, (state, action) => {
        state.isClick = "rejected";
      })
      .addCase(deleteWater.pending, (state) => {
        state.status = "loading";
        state.isClick = "pending";
      })
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isClick = "fulfilled";
        state.status = "succeeded";
        state.fullDay.allWaterRecord = state.fullDay.allWaterRecord.filter(
          (record) => record._id !== action.payload
        );
      })
      .addCase(deleteWater.rejected, (state, action) => {
        state.isClick = "rejected";
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateWater.pending, (state, action) => {
        state.isClick = "pending";
      })
      .addCase(updateWater.fulfilled, (state, action) => {
        state.isClick = "fulfilled";
        const updatedRecord = action.payload;
        console.log("Updated record ID:", updatedRecord);
        const index = state.fullDay.allWaterRecord.findIndex((record) => {
          return record._id === updatedRecord.waterRecord._id;
        });
        if (index !== -1) {
          state.fullDay.allWaterRecord[index] = {
            ...updatedRecord.waterRecord,
          };
        }
      })
      .addCase(updateWater.rejected, (state, action) => {
        state.error = action.error.message;
        state.isClick = "rejected";
      })
      .addCase(getMonthWaterFrontConteroller.fulfilled, (state, action) => {
        state.fullMonth = action.payload;
        state.isClick = "fulfilled";
      });
  },
});

export const waterReducer = waterSlice.reducer;
