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
  allData: any[];
}

const initialState: IMovieListState = {
  data: initialList,
  topRatedData: initialList,
  movieGenres: initialGenresList,
  allData: [],
};

export const movieList = createSlice({
  name: "movie list",
  initialState,
  reducers: {
    setAllData: (state, action) => {
      const array = state.allData;
      const index = array.push(action.payload);
      if (index < 10) {
        if (index !== -1) {
          state.allData = array;
        }
      }
    },
  },
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
export const { setAllData } = movieList.actions;

export default movieList.reducer;
