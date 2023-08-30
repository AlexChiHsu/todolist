import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieListProp } from "../types/movieList";
import { getSearchList } from "../api/tmdb/fetchAPI";
import { PersonProp } from "../types/credits";

export const fetchSearchList = createAsyncThunk(
  "fetch/searchList",
  async (payload: {
    type: string;
    page: string;
    word: string;
  }): Promise<MovieListProp | PersonProp> => {
    const response = await fetch(
      getSearchList(payload.page, payload.type, payload.word).fullURL,
      getSearchList(payload.page, payload.type, payload.word).options
    );

    return response.json();
  }
);
