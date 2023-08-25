import { createSlice } from "@reduxjs/toolkit";
import { GenresProp, MovieListProp } from "../../types/movieList";
import {
  fetchGenreList,
  fetchPopularMovieList,
  fetchTopRatedMovieList,
  fetchTrendingList,
} from "../../actions/movieListActions";
import { initialGenresList, initialList } from "./initialList";

export interface IMovieListState {
  data: MovieListProp;
  topRatedData: MovieListProp;
  movieGenres: GenresProp;
  allData: any[];
  allTrendingList: MovieListProp;
  movieTrendingList: MovieListProp;
}

const initialState: IMovieListState = {
  data: initialList,
  topRatedData: initialList,
  movieGenres: initialGenresList,
  allData: [],
  allTrendingList: initialList,
  movieTrendingList: initialList,
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
    builder.addCase(fetchGenreList.fulfilled, (state, action) => {
      state.movieGenres = action.payload;
    });
    builder.addCase(fetchTrendingList.fulfilled, (state, action) => {
      if (action.meta.arg === "movie") {
        state.movieTrendingList = action.payload;
      } else {
        state.allTrendingList = action.payload;
      }
    });
  },
});
export const { setAllData } = movieList.actions;

export default movieList.reducer;
