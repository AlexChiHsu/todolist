import { createSlice } from "@reduxjs/toolkit";
import { GenresProp, MovieListProp } from "../../types/movieList";
import {
  fetchCollectionMovieList,
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
  collectionList: MovieListProp;
  tvTrendingList: MovieListProp;
}

const initialState: IMovieListState = {
  data: initialList,
  topRatedData: initialList,
  movieGenres: initialGenresList,
  allData: [],
  allTrendingList: initialList,
  movieTrendingList: initialList,
  collectionList: initialList,
  tvTrendingList: initialList,
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
    builder.addCase(fetchGenreList.fulfilled, (state, action) => {
      state.movieGenres = action.payload;
    });
    builder.addCase(fetchCollectionMovieList.fulfilled, (state, action) => {
      state.collectionList = action.payload;
    });
    builder.addCase(fetchTrendingList.fulfilled, (state, action) => {
      if (action.meta.arg.type === "movie") {
        state.movieTrendingList = action.payload;
      } else if (action.meta.arg.type === "tv") {
        state.tvTrendingList = action.payload;
      } else {
        state.allTrendingList = action.payload;
      }
    });
  },
});
export const {} = movieList.actions;

export default movieList.reducer;
