import { createAsyncThunk } from "@reduxjs/toolkit";
import { DetailProp, MovieListProp } from "../types/movieList";
import {
  getPopularTVAnimationList,
  getPopularTVList,
  getTVDetail,
  getTvCredits,
  getTvTopRated,
} from "../api/tmdb/fetchAPI";
import { CreditsProp } from "../types/credits";

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

export const fetchTVDetail = createAsyncThunk(
  "fetch/tvDetail",
  async (id: string): Promise<DetailProp> => {
    const response = await fetch(
      getTVDetail(id).fullURL,
      getTVDetail(id).options
    );

    return response.json();
  }
);

export const fetchTVCredits = createAsyncThunk(
  "fetch/tvCredits",
  async (id: string): Promise<CreditsProp> => {
    const response = await fetch(
      getTvCredits(id).fullURL,
      getTvCredits(id).options
    );

    return response.json();
  }
);
