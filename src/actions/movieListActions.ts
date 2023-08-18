import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieListProp } from "../types/movieList";
import { getMovieTopRated, getPopularMovieList } from "../api/tmdb/fetchAPI";

export const fetchPopularMovieList = createAsyncThunk(
  "fetch/popularMovieList",
  async (language: string): Promise<MovieListProp> => {
    const response = await fetch(
      getPopularMovieList(language).fullURL,
      getPopularMovieList(language).options
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
