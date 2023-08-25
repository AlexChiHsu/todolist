import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieListProp } from "../types/movieList";
import {
  getPopularTVAnimationList,
  getPopularTVList,
  getTvTopRated,
} from "../api/tmdb/fetchAPI";

export const fetchPopularTVListUs = createAsyncThunk(
  "fetch/popularUsTVList",
  async (args: {
    language: string;
    country: string;
    page: string;
  }): Promise<MovieListProp> => {
    const response = await fetch(
      getPopularTVList(args.language, args.country, args.page).fullURL,
      getPopularTVList(args.language, args.country, args.page).options
    );

    return response.json();
  }
);

export const fetchPopularTVListZh = createAsyncThunk(
  "fetch/popularZhTVList",
  async (args: {
    language: string;
    country: string;
    page: string;
  }): Promise<MovieListProp> => {
    const response = await fetch(
      getPopularTVList(args.language, args.country, args.page).fullURL,
      getPopularTVList(args.language, args.country, args.page).options
    );

    return response.json();
  }
);

export const fetchPopularTVListKr = createAsyncThunk(
  "fetch/popularKrTVList",
  async (args: {
    language: string;
    country: string;
    page: string;
  }): Promise<MovieListProp> => {
    const response = await fetch(
      getPopularTVList(args.language, args.country, args.page).fullURL,
      getPopularTVList(args.language, args.country, args.page).options
    );

    return response.json();
  }
);

export const fetchPopularTVAnimationList = createAsyncThunk(
  "fetch/popularAnimationTVList",
  async (): Promise<MovieListProp> => {
    const response = await fetch(
      getPopularTVAnimationList().fullURL,
      getPopularTVAnimationList().options
    );

    return response.json();
  }
);

export const fetchTopRatedTVList = createAsyncThunk(
  "fetch/topRatedTVList",
  async (): Promise<MovieListProp> => {
    const response = await fetch(
      getTvTopRated().fullURL,
      getTvTopRated().options
    );

    return response.json();
  }
);
