import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addWater = createAsyncThunk(
  "water/add",
  async (waterValue, thunkAPI) => {
    const state = thunkAPI.getState();
    const accessToken = state.auth.accessToken;
    // console.log(state);
    try {
      const response = await axios.post(
        "water/day",
        { waterValue },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  "water/update",
  async ({ waterId, waterValue }, thunkAPI) => {
    const state = thunkAPI.getState();
    // const accessToken = state.auth.accessToken;

    try {
      const response = await axios.patch(`water/day/${waterId}`, {
        waterValue,
      });
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFullDay = createAsyncThunk(
  "water/fullday",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const accessToken = state.auth.accessToken;

    try {
      const response = await axios.get("water/fullday", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const deleteWater = createAsyncThunk(
  'water/deleteWaterRecord',
  async (waterId, { rejectWithValue }) => {
    try {
      const responseDel = await axios.delete(`water/${waterId}`);
      return waterId;
    } catch (error) {
      return rejectWithValue(error.responseDel.data);
    }
  }
);