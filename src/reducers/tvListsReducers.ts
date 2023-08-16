import { createAsyncThunk } from "@reduxjs/toolkit";
import { DetailProp, MovieListProp } from "../types/movieList";
import {
  getCredits,
  getDetail,
  getPopularTVAnimationList,
  getPopularTVList,
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

export const fetchDetail = createAsyncThunk(
  "fetch/detail",
  async (payload: {
    type: string | undefined;
    id: string;
  }): Promise<DetailProp> => {
    const response = await fetch(
      getDetail(payload.id, payload?.type).fullURL,
      getDetail(payload.id, payload?.type).options
    );

    return response.json();
  }
);

export const fetchCredits = createAsyncThunk(
  "fetch/credits",
  async (payload: {
    type: string | undefined;
    id: string;
  }): Promise<CreditsProp> => {
    const response = await fetch(
      getCredits(payload.id, payload?.type).fullURL,
      getCredits(payload.id, payload?.type).options
    );

    return response.json();
  }
);
