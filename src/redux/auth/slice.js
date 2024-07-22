import { createSlice } from "@reduxjs/toolkit";
import { register, refreshing, login, logout, updateUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    refreshToken: null,
    // token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    user: {
      name: null,
      email: null,
      avatarUrl: null,
      gender: "woman",
      weight: null,
      sportsActivity: null,
      waterRate: "1.5",
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        // state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = true;
        state.user = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        // state.token = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        // state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = null;
      })
      .addCase(login.pending, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        // state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = true;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        // console.log(action);
        // state.token = action.payload;
        // console.log(state.token);
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        // state.token = null;
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
        // state.token = null;
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
        // state.token = action.payload;
        state.accessToken = action.payload.accessToken;
        // console.log(state.token);
        state.isLoggedIn = true;
      })
      .addCase(refreshing.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;

        state.user = {
          ...state.user,
          ...action.payload.user,
        };
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
