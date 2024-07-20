import { createSlice } from "@reduxjs/toolkit";
import { register, refreshing, login, logout } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    user: {
      name: null,
      email: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = true;
        state.user = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = null;
      })
      .addCase(login.pending, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = true;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(refreshing.pending, (state, action) => {
        state.isRefreshing = true;
        // state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
      })
      .addCase(refreshing.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(refreshing.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
