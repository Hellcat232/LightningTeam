import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

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

      const response = await axios.post("/users/register", getDataUser);

      const getToken = await axios.post("/users/login", getDataUser);

      setAuthToken(getToken.data.accessToken);

      toast.success("Success");
      return {
        response: response.data,
        accessToken: getToken.data.accessToken,
      };
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (text, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", text);

    setAuthToken(response.data.accessToken);

    Cookies.set("refreshToken", response.data.refreshToken);

    toast.success("Success");

    return response.data;
  } catch (error) {
    toast.error(error.message);
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
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    Cookies.remove("refreshToken");
    clearAuthToken();
  } catch (error) {
    toast.error(error.message);
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
      const response = await axios.post("/users/refresh", {
        refreshToken,
      });

      setAuthToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "user/current",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/current");
      // console.log(response);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (someValue, thunkAPI) => {
    try {
      const response = await axios.patch("/users/update", someValue);
      toast.success("updated");
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
// change
