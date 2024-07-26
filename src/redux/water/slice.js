import { createSlice } from '@reduxjs/toolkit';
import { addWater, fetchFullDay, updateWater, deleteWater } from './operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    addWaterValue: [],
    fullDay: {
      msg: '',
      waterRate: {
        feasibility: 0,
      },
      waterRecord: [],
    },
    record: [],
  },
  extraReducers: builder => {
    builder
      .addCase(addWater.pending, state => {
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
      .addCase(addWater.rejected, state => {
        state.addWaterValue = [];
      })
      .addCase(fetchFullDay.pending, state => {
        state.fullDay = {
          msg: '',
          waterRate: {},
          waterRecord: [],
        };
      })
      .addCase(fetchFullDay.fulfilled, (state, action) => {
        state.fullDay = action.payload.data;
      })
      .addCase(fetchFullDay.rejected, state => {})
      .addCase(deleteWater.pending, state => {})
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.fullDay.waterRecord = state.fullDay.waterRecord.filter(
          record => record._id !== action.payload
        );
      })
      .addCase(deleteWater.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateWater.pending, state => {})
      .addCase(updateWater.fulfilled, (state, action) => {
        const updatedRecord = action.payload;
        const index = state.fullDay.waterRecord.findIndex(
          record => record._id === updatedRecord.waterRecord._id
        );
        console.log(updatedRecord);
        if (index !== -1) {
          state.fullDay.waterRecord[index] = { ...updatedRecord.waterRecord };
        }
      })
      .addCase(updateWater.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const waterReducer = waterSlice.reducer;
