import { createSlice } from "@reduxjs/toolkit";
import { verfiy } from "../../Api";

const initialState = {
  movie: [],
  status: "idle",
  error: "no error",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verfiy.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.status = "fulfilled";
      })
      .addCase(verfiy.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verfiy.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const movieReducers = movieSlice.reducer;

