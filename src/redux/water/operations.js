import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addWater = createAsyncThunk(
  "water/add",
  async (waterValue, thunkAPI) => {
    const state = thunkAPI.getState();
    const accessToken = state.auth.accessToken;
    console.log(state);
    try {
      const response = await axios.post("water/day", waterValue, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
