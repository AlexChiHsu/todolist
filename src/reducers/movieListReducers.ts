import { createAsyncThunk } from "@reduxjs/toolkit";
import { DetailProp, MovieListProp } from "../types/movieList";
import {
  getMovieCredits,
  getMovieDetail,
  getMovieTopRated,
  getPopularMovieList,
} from "../api/tmdb/fetchAPI";
import { CreditsProp } from "../types/credits";

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

export const fetchMovieDetail = createAsyncThunk(
  "fetch/movieDetail",
  async (id: string): Promise<DetailProp> => {
    const response = await fetch(
      getMovieDetail(id).fullURL,
      getMovieDetail(id).options
    );

    return response.json();
  }
);

export const fetchMovieCredits = createAsyncThunk(
  "fetch/movieCredits",
  async (id: string): Promise<CreditsProp> => {
    const response = await fetch(
      getMovieCredits(id).fullURL,
      getMovieCredits(id).options
    );

    return response.json();
  }
);
