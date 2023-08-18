import { createAsyncThunk } from "@reduxjs/toolkit";
import { DetailProp, MovieListProp } from "../types/movieList";
import {
  getCombinedCredits,
  getComments,
  getCredits,
  getDetail,
  getSimilar,
} from "../api/tmdb/fetchAPI";
import { CommentsProp, CreditsProp } from "../types/credits";
import { PersonWorksProp } from "../types/personWorks";

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

export const fetchSimilar = createAsyncThunk(
  "fetch/similar",
  async (payload: {
    type: string | undefined;
    id: string;
  }): Promise<MovieListProp> => {
    const response = await fetch(
      getSimilar(payload.id, payload?.type).fullURL,
      getSimilar(payload.id, payload?.type).options
    );

    return response.json();
  }
);

export const fetchComments = createAsyncThunk(
  "fetch/comments",
  async (payload: {
    type: string | undefined;
    id: string;
  }): Promise<CommentsProp> => {
    const response = await fetch(
      getComments(payload.id, payload?.type).fullURL,
      getComments(payload.id, payload?.type).options
    );

    return response.json();
  }
);

export const fetchCombinedCredits = createAsyncThunk(
  "fetch/combinedCredits",
  async (payload: { id: string }): Promise<PersonWorksProp> => {
    const response = await fetch(
      getCombinedCredits(payload.id).fullURL,
      getCombinedCredits(payload.id).options
    );

    return response.json();
  }
);
