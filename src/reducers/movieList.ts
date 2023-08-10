import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieList } from "../types/movieList";
import { getPopularMovieList } from "../api/tmdb/fetchAPI";

export const fetchPopularMovieList = createAsyncThunk(
  "fetch/popularMoviList",
  async (): Promise<MovieList> => {
    const response = await fetch(
      getPopularMovieList().fullURL,
      getPopularMovieList().options
    );

    return response.json();
  }
);
