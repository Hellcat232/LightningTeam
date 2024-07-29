import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  fetchFullDay,
  updateWater,
  deleteWater,
  getMonthWaterFrontConteroller,
} from './operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    addWaterValue: [],
    fullDay: {
      msg: '',
      waterRate: {},
      allWaterRecord: []
    },
    fullMonth: {},
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
          if (state.fullDay.allWaterRecord) {
            state.fullDay.allWaterRecord.push(newRecord);
          } else {
            state.fullDay.allWaterRecord = [newRecord];
          }
        })
        .addCase(addWater.rejected, state => {
          state.addWaterValue = [];
        })
        .addCase(fetchFullDay.pending, (state, action) => {
          state.fullDay = {
            msg: '',
            waterRate: {},
            allWaterRecord: [],
          };
        })
        .addCase(fetchFullDay.fulfilled, (state, action) => {
          state.fullDay = {
            ...action.payload.data,
            allWaterRecord: action.payload.data.allWaterRecord
          };
        })
        .addCase(fetchFullDay.rejected, (state, action) => {})
        .addCase(deleteWater.pending, state => {
          state.status = 'loading';
        })
        .addCase(deleteWater.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.fullDay.allWaterRecord = state.fullDay.allWaterRecord.filter(
              record => record._id !== action.payload
          );
        })
        .addCase(deleteWater.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(updateWater.pending, (state, action) => {})
        .addCase(updateWater.fulfilled, (state, action) => {
          const updatedRecord = action.payload;
          console.log('Updated record ID:', updatedRecord);
          const index = state.fullDay.allWaterRecord.findIndex(record => {
            return record._id === updatedRecord.waterRecord._id;
          });
          if (index !== -1) {
            state.fullDay.allWaterRecord[index] = { ...updatedRecord.waterRecord };
          }
        })
        .addCase(updateWater.rejected, (state, action) => {
          state.error = action.error.message;
        })
        .addCase(getMonthWaterFrontConteroller.fulfilled, (state, action) => {
          state.fullMonth = action.payload;
        });
  },
});

export const waterReducer = waterSlice.reducer;
