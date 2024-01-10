import { createSlice } from "@reduxjs/toolkit";
import {
  cast,
  image,
  movieId,
  popularMovies,
  popularSeries,
  randomMovie,
  topRatedMovies,
  topRatedSeries,
  upcomingMovie,
  verfiy,
  video,
} from "../../Api";

const initialState = {
  randomMovies: [],
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
  status: "no status",
  isLoading: true,
  error: "no error",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(randomMovie.fulfilled, (state, action) => {
        state.randomMovies = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(verfiy.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(verfiy.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(verfiy.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(upcomingMovie.fulfilled, (state, action) => {
        state.upcomingMovie = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(movieId.fulfilled, (state, action) => {
        state.movieDetails.listOfId = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(cast.fulfilled, (state, action) => {
        state.movieDetails.casts = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(video.fulfilled, (state, action) => {
        state.movieDetails.videos = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(image.fulfilled, (state, action) => {
        state.movieDetails.images = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(popularMovies.fulfilled, (state, action) => {
        state.pop.popular = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(popularSeries.fulfilled, (state, action) => {
        state.pop.series = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(topRatedMovies.fulfilled, (state, action) => {
        state.topRated.topRatedMovies = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(topRatedSeries.fulfilled, (state, action) => {
        state.topRated.topRatedSeries = action.payload;
        state.status = "fulfilled";
        state.isLoading = false;
      });
  },
});

export const movieReducers = movieSlice.reducer;
