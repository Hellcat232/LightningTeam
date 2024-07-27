import { createSlice } from '@reduxjs/toolkit';

import {
  addWater,
  fetchFullDay,
  updateWater,
  deleteWater,
  getMonthWaterFrontConteroller,
  fetchWaterRecords,
} from './operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    addWaterValue: [],
    fullDay: {
      msg: '',
      waterRate: {},
      waterRecord: [],
    },
    fullMonth: {
      waterRecord: [],
    },
    record: [],
    status: 'idle',
    error: null,
  },
  extraReducers: builder => {
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
      .addCase(addWater.rejected, state => {
        state.addWaterValue = [];
      })
      .addCase(fetchFullDay.pending, (state, action) => {
        state.fullDay = {
          msg: '',
          waterRate: {},
          waterRecord: [],
        };
      })
      .addCase(fetchFullDay.fulfilled, (state, action) => {
        state.fullDay = action.payload.data;
      })
      .addCase(fetchFullDay.rejected, (state, action) => {})
      // .addCase(deleteWater.pending, (state, action) => {})
      .addCase(fetchWaterRecords.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchWaterRecords.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.fullDay.waterRecord = action.payload;
      })
      .addCase(fetchWaterRecords.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteWater.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.fullDay.waterRecord = state.fullDay.waterRecord.filter(
          record => record._id !== action.payload
        );
        // state.record = [];
        // console.log(state.records);
      })
      .addCase(deleteWater.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateWater.pending, (state, action) => {})
      .addCase(updateWater.fulfilled, (state, action) => {
        const updatedRecord = action.payload;
        console.log('Updated record ID:', updatedRecord);
        const index = state.fullDay.waterRecord.findIndex(record => {
          // console.log('Comparing with record:', record);
          return record._id === updatedRecord.waterRecord._id;
        });
        // console.log('Found index:', index);
        if (index !== -1) {
          state.fullDay.waterRecord[index] = { ...updatedRecord.waterRecord };
          // console.log('Record updated:', state.fullDay.waterRecord[index]);
        } else {
          // console.log('Record not found:', updatedRecord.waterRecord._id);
        }
      })

      .addCase(updateWater.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(getMonthWaterFrontConteroller.fulfilled, (state, action) => {
        state.fullMonth.waterRecord = action.payload;
      });
  },
});

export const waterReducer = waterSlice.reducer;
