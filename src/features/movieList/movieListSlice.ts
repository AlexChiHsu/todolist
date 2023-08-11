import { createSlice } from "@reduxjs/toolkit";
import { MovieListProp } from "../../types/movieList";
import { fetchPopularMovieList } from "../../reducers/movieList";

export interface IMovieListState {
  data: MovieListProp;
}

const initialState: IMovieListState = {
  data: {
    json: null,
    page: 0,
    results: [
      {
        adult: false,
        backdrop_path: "",
        genre_ids: [0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
    ],
    total_pages: 0,
    total_results: 0,
  },
};

export const movieList = createSlice({
  name: "popular movie list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovieList.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default movieList.reducer;
