import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ waterValue, localTime }, thunkAPI) => {
    const state = thunkAPI.getState();
    const accessToken = state.auth.accessToken;

    try {
      const response = await axios.post(
        'https://lightningbackend.onrender.com/water/day',
        { waterValue, localTime },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(
        'Error response from server:',
        error.response ? error.response.data : error.message
      );
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/update',
  async ({ waterId, waterValue }, thunkAPI) => {
    const state = thunkAPI.getState();
    const accessToken = state.auth.accessToken;

    try {
      const response = await axios.patch(
        `water/day/${waterId}`,
        {
          waterValue,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  "water/delete",
  async (waterId, thunkAPI) => {
    try {
      await axios.delete(`water/delete/${waterId}`);
      return waterId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFullDay = createAsyncThunk(
  'water/fullday',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const accessToken = state.auth.accessToken;

    try {
      const response = await axios.get('water/fullday', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: {
          'content-length': response.headers['content-length'],
          'content-type': response.headers['content-type'],
        },
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
