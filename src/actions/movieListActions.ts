import { createAsyncThunk } from "@reduxjs/toolkit";
import { GenresProp, MovieListProp } from "../types/movieList";
import {
  getGenreList,
  getMovieTopRated,
  getPopularMovieList,
  getTrendingList,
} from "../api/tmdb/fetchAPI";

export const fetchPopularMovieList = createAsyncThunk(
  "fetch/popularMovieList",
  async (args: { language: string; page: string }): Promise<MovieListProp> => {
    const response = await fetch(
      getPopularMovieList(args.language, args.page).fullURL,
      getPopularMovieList(args.language, args.page).options
    );

    return response.json();
  }
);

export const fetchTopRatedMovieList = createAsyncThunk(
  "fetch/topRatedMovieList",
  async (): Promise<MovieListProp> => {
    const response = await fetch(
      getMovieTopRated().fullURL,
      getMovieTopRated().options
    );

    return response.json();
  }
);

export const fetchGenreList = createAsyncThunk(
  "fetch/genreList",
  async (type: string): Promise<GenresProp> => {
    const response = await fetch(
      getGenreList(type).fullURL,
      getGenreList(type).options
    );

    return response.json();
  }
);

export const fetchTrendingList = createAsyncThunk(
  "fetch/trendingList",
  async (type: string): Promise<MovieListProp> => {
    const response = await fetch(
      getTrendingList(type).fullURL,
      getTrendingList(type).options
    );

    return response.json();
  }
);
