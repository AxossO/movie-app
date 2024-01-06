import { createSlice } from "@reduxjs/toolkit";
import {
  cast,
  image,
  movieId,
  popularMovies,
  popularSeries,
  seriesId,
  topRatedMovies,
  topRatedSeries,
  upcomingMovie,
  verfiy,
  video,
} from "../../Api";

const initialState = {
  movie: [],
  upcomingMovie: [],
  pop: {
    popular: [],
    series: [],
  },
  topRated: {
    topRatedMovies: [],
    topRatedSeries: [],
  },
  movieDetails: {
    casts: [],
    videos: [],
    images: [],
    listOfId: [],
  },
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
      })
      .addCase(upcomingMovie.fulfilled, (state, action) => {
        state.upcomingMovie = action.payload;
        state.status = "fulfilled";
      })
      .addCase(movieId.fulfilled, (state, action) => {
        state.movieDetails.listOfId = action.payload;
        state.status = "fulfilled";
      })
      .addCase(cast.fulfilled, (state, action) => {
        state.movieDetails.casts = action.payload;
        state.status = "fulfilled";
        state.error = "no body error";
      })
      .addCase(video.fulfilled, (state, action) => {
        state.movieDetails.videos = action.payload;
        state.status = "fulfilled";
      })
      .addCase(image.fulfilled, (state, action) => {
        state.movieDetails.images = action.payload;
        state.status = "fulfilled";
      })
      .addCase(popularMovies.fulfilled, (state, action) => {
        state.pop.popular = action.payload;
        state.status = "fulfilled";
      })
      .addCase(popularSeries.fulfilled, (state, action) => {
        state.pop.series = action.payload;
        state.status = "fulfilled";
      })
      .addCase(topRatedMovies.fulfilled, (state, action) => {
        state.topRated.topRatedMovies = action.payload;
        state.status = "fulfilled";
      })
      .addCase(topRatedSeries.fulfilled, (state, action) => {
        state.topRated.topRatedSeries = action.payload;
        state.status = "fulfilled";
      });
  },
});

export const movieReducers = movieSlice.reducer;
