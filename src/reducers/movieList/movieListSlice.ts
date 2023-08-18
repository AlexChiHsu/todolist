import { createSlice } from "@reduxjs/toolkit";
import { MovieListProp } from "../../types/movieList";
import {
  fetchPopularMovieList,
  fetchTopRatedMovieList,
} from "../../actions/movieListActions";
import { initialList } from "./initialList";

export interface IMovieListState {
  data: MovieListProp;
  topRatedData: MovieListProp;
}

const initialState: IMovieListState = {
  data: initialList,
  topRatedData: initialList,
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
  },
});

export default movieList.reducer;
