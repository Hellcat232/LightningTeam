import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// ===================================================
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// ===================================================

const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
  "auth/register",
  async (text, thunkAPI) => {
    try {
      const getDataUser = { email: text.email, password: text.password };

      const response = await axios.post("/user/register", getDataUser);

      const getToken = await axios.post("/user/login", getDataUser);

      setAuthToken(getToken.data.accessToken);
      return {
        response: response.data,
        accessToken: getToken.data.accessToken,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (text, thunkAPI) => {
  try {
    const response = await axios.post("/user/login", text);

    setAuthToken(response.data.accessToken);

    Cookies.set("refreshToken", response.data.refreshToken);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginGoogle = createAsyncThunk(
  "auth/google",
  async ({ token }, thunkAPI) => {
    try {
      const response = await axios.post("/auth/google", { token });
      Cookies.set("refreshToken", response.data.refreshToken);
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
    Cookies.remove("refreshToken");
    clearAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshing = createAsyncThunk(
  "auth/refreshing",
  async (_, thunkAPI) => {
    const refreshToken = Cookies.get("refreshToken");

    if (!refreshToken) {
      return thunkAPI.rejectWithValue("User no authorized");
    }

    try {
      const response = await axios.post("/user/refresh", {
        refreshToken,
      });

      setAuthToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "user/current",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/user/current");
      console.log(response);
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
      const response = await axios.patch("/user/update", someValue);
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
