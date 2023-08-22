import { createSlice } from "@reduxjs/toolkit";
import { GenresProp, MovieListProp } from "../../types/movieList";
import {
  fetchMovieGenreList,
  fetchPopularMovieList,
  fetchTopRatedMovieList,
} from "../../actions/movieListActions";
import { initialGenresList, initialList } from "./initialList";

export interface IMovieListState {
  data: MovieListProp;
  topRatedData: MovieListProp;
  movieGenres: GenresProp;
}

const initialState: IMovieListState = {
  data: initialList,
  topRatedData: initialList,
  movieGenres: initialGenresList,
};

export const movieList = createSlice({
  name: "movie list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovieList.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchTopRatedMovieList.fulfilled, (state, action) => {
      state.topRatedData = action.payload;
    });
    builder.addCase(fetchMovieGenreList.fulfilled, (state, action) => {
      state.movieGenres = action.payload;
    });
  },
});

export default movieList.reducer;
