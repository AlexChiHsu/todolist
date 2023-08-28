import { createAsyncThunk } from "@reduxjs/toolkit";
import { GenresProp, MovieListProp } from "../types/movieList";
import {
  getCollectionMovieList,
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
  async (args: { type: string; page: string }): Promise<MovieListProp> => {
    const response = await fetch(
      getTrendingList(args.type, args.page).fullURL,
      getTrendingList(args.type, args.page).options
    );

    return response.json();
  }
);

export const fetchCollectionMovieList = createAsyncThunk(
  "fetch/collectionMovieList",
  async (args: { page: string; genres: string }): Promise<MovieListProp> => {
    const response = await fetch(
      getCollectionMovieList(args.page, args.genres).fullURL,
      getCollectionMovieList(args.page, args.genres).options
    );

    return response.json();
  }
);
