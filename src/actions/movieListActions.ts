import { createAsyncThunk } from "@reduxjs/toolkit";
import { GenresProp, MovieListProp } from "../types/movieList";
import {
  getGenreList,
  getMovieTopRated,
  getPopularMovieList,
} from "../api/tmdb/fetchAPI";

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

export const fetchMovieGenreList = createAsyncThunk(
  "fetch/movieGenreList",
  async (): Promise<GenresProp> => {
    const response = await fetch(
      getGenreList().fullURL,
      getGenreList().options
    );

    return response.json();
  }
);
