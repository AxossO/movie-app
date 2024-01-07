import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.API_KEY;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const url = "https://api.themoviedb.org/3";

const min = 1;
const max = 1000;
const randomNumber = Math.floor(Math.random() * (max - min) + min);

const options = {
  method: "GET",
  url: `${url}/movie/now_playing`,
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
};
const upcomingOption = (index) => ({
  method: "GET",
  url: `${url}/movie/upcoming?page${index}`,
  params: { page: index },
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const seriesOption = (index) => ({
  method: "GET",
  url: `${url}/tv/popular?page${index}`,
  params: { page: index },
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const topRatedSeriesOption = (index) => ({
  method: "GET",
  url: `${url}/tv/top_rated?page${index}`,
  params: { page: index },
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const topRatedMovieOption = (index) => ({
  method: "GET",
  url: `${url}/movie/top_rated?page${index}`,
  params: { page: index },
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const popular = (index) => ({
  method: "GET",
  url: `${url}/movie/popular?page${index}`,
  params: { page: index },
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const gettingId = (id, endpoint) => ({
  method: "GET",
  url: `${url}/${endpoint}/${id}`,
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const gettingCast = (id, endpoint) => ({
  method: "GET",
  url: `${url}/${endpoint}/${id}/credits`,
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const gettingVideos = (id, endpoint) => ({
  method: "GET",
  url: `${url}/${endpoint}/${id}/videos`,
  // url: `${url}/${endpoint}/${id}/videos`,
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const gettingImages = (id, endpoint) => ({
  method: "GET",
  url: `${url}/${endpoint}/${id}/images`,
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const recomenditon = () => ({
  method: "GET",
  url: `${url}/discover/movie?page=${randomNumber}`,
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
export const randomMovie = createAsyncThunk("poitato/path", async () => {
  const response = await axios.request(recomenditon());
  return response.data.results;
});
export const image = createAsyncThunk("image", async ({ id, endpoint }) => {
  const response = await axios.request(gettingImages(id, endpoint));
  return response.data;
});
export const video = createAsyncThunk("video", async ({ id, endpoint }) => {
  const response = await axios.request(gettingVideos(id, endpoint));
  return response.data.results;
});
export const cast = createAsyncThunk("cast", async ({ id, endpoint }) => {
  const response = await axios.request(gettingCast(id, endpoint));
  return response.data.cast.slice(0, 5);
});

export const verfiy = createAsyncThunk("verfiy/path", async () => {
  const response = await axios.request(options);
  return response.data.results.slice(0, 5);
});

export const upcomingMovie = createAsyncThunk(
  "upcomingMovie",
  async (index) => {
    const response = await axios.request(upcomingOption(index));
    return response.data.results;
  }
);
export const popularSeries = createAsyncThunk(
  "popularSeries",
  async (index) => {
    const response = await axios.request(seriesOption(index));
    return response.data.results;
  }
);
export const popularMovies = createAsyncThunk("popular", async (index) => {
  const response = await axios.request(popular(index));
  return response.data.results;
});
export const topRatedSeries = createAsyncThunk(
  "topRatedSeries",
  async (index) => {
    const response = await axios.request(topRatedSeriesOption(index));
    return response.data.results;
  }
);
export const topRatedMovies = createAsyncThunk(
  "topRatedMovies",
  async (index) => {
    const response = await axios.request(topRatedMovieOption(index));
    return response.data.results;
  }
);

export const movieId = createAsyncThunk("movieId", async ({ id, endpoint }) => {
  const response = await axios.request(gettingId(id, endpoint));
  return response.data;
});
