import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://lightningbackend.onrender.com/";

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("user/register", text);
      setAuthToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (text, thunkAPI) => {
  try {
    const response = await axios.post("user/login", text);

    setAuthToken(response.data.refreshToken);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("user/logout");
    clearAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshing = createAsyncThunk(
  "auth/refreshing",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = { refreshToken: state.auth.token };

    if (persistedToken === null)
      return thunkAPI.rejectWithValue("User not authorized");

    try {
      setAuthToken(persistedToken);
      const response = await axios.post("/user/refresh", persistedToken);
      // console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (someValue, thunkAPI) => {
    try {
      const response = await axios.put("user/update", someValue);

      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
