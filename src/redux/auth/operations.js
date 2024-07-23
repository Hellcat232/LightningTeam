import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// =======================================================
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// =======================================================

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const loginGoogle = createAsyncThunk(
  "auth/google",
  async ({ token }, thunkAPI) => {
    try {
      const response = await axios.post("/auth/google", { token });
      setAuthToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (text, thunkAPI) => {
  try {
    const response = await axios.post("/user/login", text);
    setAuthToken(response.data.accessToken);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/user/register", text);
      setAuthToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/user/logout");
    clearAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshing = createAsyncThunk(
  "auth/refreshing",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const refreshToken = state.auth?.refreshToken;

    if (!refreshToken) {
      return thunkAPI.rejectWithValue("User not authorized");
    }
    try {
      const response = await axios.post("/user/refresh", { refreshToken });
      setAuthToken(response.data.accessToken);
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
      const response = await axios.put("/user/update", someValue);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
// change
