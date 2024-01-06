import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.API_KEY;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const url = "https://api.themoviedb.org/3";

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
const popular = (index) => ({
  method: "GET",
  url: `${url}/movie/popular?page${index}`,
  params: { page: index },
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const gettingId = (id) => ({
  method: "GET",
  url: `${url}/movie/${id}`,
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const gettingCast = (id) => ({
  method: "GET",
  url: `${url}/movie/${id}/credits`,
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const gettingVideos = (id) => ({
  method: "GET",
  url: `${url}/movie/${id}/videos`,
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
const gettingImages = (id) => ({
  method: "GET",
  url: `${url}/movie/${id}/images`,
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
});
export const image = createAsyncThunk("image", async (id) => {
  const response = await axios.request(gettingImages(id));
  return response.data;
});
export const video = createAsyncThunk("video", async (id) => {
  const response = await axios.request(gettingVideos(id));
  return response.data.results;
});
export const cast = createAsyncThunk("cast", async (id) => {
  const response = await axios.request(gettingCast(id));
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
export const popularMovies = createAsyncThunk("popular", async (index) => {
  const response = await axios.request(popular(index));
  return response.data.results;
});

export const movieId = createAsyncThunk("movieId", async (id) => {
  const response = await axios.request(gettingId(id));
  return response.data;
});
