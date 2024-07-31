import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  refreshing,
  login,
  logout,
  updateUser,
  currentUser,
  loginGoogle,
} from "./operations";

const initialState = {
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isClick: "pending" | "fulfilled" | "rejected",
  user: {
    name: null,
    email: null,
    avatarUrl: null,
    gender: null,
    weight: null,
    sportsActivity: null,
    waterRate: 1.5,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = true;
        state.user = initialState.user;
        state.isClick = "pending";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = action.payload;
        state.isClick = "fulfilled";
      })
      .addCase(register.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = initialState.user;
        state.isClick = "rejected";
      })
      .addCase(login.pending, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = true;
        state.user = initialState.user;
        state.isClick = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = action.payload.user;
        state.isClick = "fulfilled";
      })
      .addCase(login.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = initialState.user;
        state.isClick = "rejected";
      })
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
        state.isClick = "pending";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = initialState.user;
        state.isClick = "fulfilled";
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isClick = "rejected";
      })
      .addCase(refreshing.pending, (state, action) => {
        state.isRefreshing = true;
        // state.refreshToken = action.payload.refreshToken;
      })
      .addCase(refreshing.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(refreshing.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
        state.isClick = "pending";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = {
          ...state.user,
          ...action.payload.user,
        };
        state.isClick = "fulfilled";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isClick = "rejected";
      })
      .addCase(loginGoogle.pending, (state) => {
        state.isClick = "pending";
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.isClick = "fulfilled";
      })
      .addCase(loginGoogle.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isClick = "rejected";
      })
      .addCase(currentUser.pending, (state, action) => {})
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(currentUser.rejected, (state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
