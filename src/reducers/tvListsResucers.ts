import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieListProp } from "../types/movieList";
import {
  getPopularTVAnimationList,
  getPopularTVList,
} from "../api/tmdb/fetchAPI";

export const fetchPopularTVListUs = createAsyncThunk(
  "fetch/popularUsTVList",
  async (args: {
    language: string;
    country: string;
  }): Promise<MovieListProp> => {
    const response = await fetch(
      getPopularTVList(args.language, args.country).fullURL,
      getPopularTVList(args.language, args.country).options
    );

    return response.json();
  }
);

export const fetchPopularTVListZh = createAsyncThunk(
  "fetch/popularZhTVList",
  async (args: {
    language: string;
    country: string;
  }): Promise<MovieListProp> => {
    const response = await fetch(
      getPopularTVList(args.language, args.country).fullURL,
      getPopularTVList(args.language, args.country).options
    );

    return response.json();
  }
);

export const fetchPopularTVListKr = createAsyncThunk(
  "fetch/popularKrTVList",
  async (args: {
    language: string;
    country: string;
  }): Promise<MovieListProp> => {
    const response = await fetch(
      getPopularTVList(args.language, args.country).fullURL,
      getPopularTVList(args.language, args.country).options
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
