import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.API_KEY;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const url = "https://api.themoviedb.org/";

const options = {
  method: "GET",
  url: `${url}/3/movie/now_playing`,
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
};
const upcomingOption = {
  method: "GET",
  url: `${url}/3/movie/upcoming`,
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: accessToken,
  },
};

export const verfiy = createAsyncThunk("verfiy/path", async () => {
  const response = await axios.request(options);
  return response.data.results.slice(0, 5);
});

export const upcomingMovie = createAsyncThunk("upcomingMovie", async () => {
  const response = await axios.request(upcomingOption);
  return response.data.results;
});
