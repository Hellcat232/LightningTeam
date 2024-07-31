import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addWater = createAsyncThunk(
  "water/addWater",
  async ({ waterValue, localTime, localDate }, thunkAPI) => {
    const state = thunkAPI.getState();
    const accessToken = state.auth.accessToken;

    try {
      const response = await axios.post(
        "/water/day",
        { waterValue, localTime, localDate },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error response from server:",
        error.response ? error.response.data : error.message
      );
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const updateWater = createAsyncThunk(
  "water/change",
  async ({ _id, waterValue, localTime, localDate }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/day/${_id}`, {
        waterValue,localTime,localDate
      });
        console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  "water/delete",
  async (waterId, thunkAPI) => {
    try {
      await axios.delete(`water/day/${waterId}`);
      return waterId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFullDay = createAsyncThunk(
  "water/fullday",
  async (dateValue, thunkAPI) => {

    const state = thunkAPI.getState();
    const accessToken = state.auth.accessToken;

    try {
      const response = await axios.get(`water/fullday?localDate=${dateValue}`, {

        headers: { Authorization: `Bearer ${accessToken}` },
      });

      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: {
          "content-length": response.headers["content-length"],
          "content-type": response.headers["content-type"],
        },
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMonthWaterFrontConteroller = createAsyncThunk(
  "water/fullMonth",
  async (date, thunkAPI) => {
    try {
      // console.log(value);
      const response = await axios.get(`/water/fullMonth?localDate=${date}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
