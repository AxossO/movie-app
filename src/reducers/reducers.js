import { createSlice } from "@reduxjs/toolkit";
import { cast, image, movieId, upcomingMovie, verfiy, video } from "../../Api";

const initialState = {
  movie: [],
  upcomingMovie: [],
  status: "idle",
  error: "no error",
  listOfId: [],
  casts: [],
  videos: [],
  images: [],
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
      })
      .addCase(upcomingMovie.fulfilled, (state, action) => {
        state.upcomingMovie = action.payload;
        state.status = "fulfilled";
      })
      .addCase(movieId.fulfilled, (state, action) => {
        state.listOfId = action.payload;
        state.status = "fulfilled";
      })
      .addCase(cast.fulfilled, (state, action) => {
        state.casts = action.payload;
        state.status = "fulfilled";
        state.error = "no body error";
      })
      .addCase(video.fulfilled, (state, action) => {
        state.videos = action.payload;
        state.status = "fulfilled";
      })
      .addCase(image.fulfilled, (state, action) => {
        state.images = action.payload;
        state.status = "fulfilled";
      });
  },
});

export const movieReducers = movieSlice.reducer;
