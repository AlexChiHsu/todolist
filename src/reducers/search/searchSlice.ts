import { createSlice } from "@reduxjs/toolkit";
import { MovieListProp } from "../../types/movieList";
import { PersonProp } from "../../types/credits";
import { initialList, initialPersonList } from "./initialList";
import { fetchSearchList } from "../../actions/searchActions";

export interface ISearchState {
  searchMovieList: MovieListProp;
  searchTvList: MovieListProp;
  searchPersonList: PersonProp;
}

const initialState: ISearchState = {
  searchMovieList: initialList,
  searchTvList: initialList,
  searchPersonList: initialPersonList,
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchList.fulfilled, (state, action) => {
      if (action.meta.arg.type === "person") {
        state.searchPersonList = action.payload as PersonProp;
      } else {
        if (action.meta.arg.type === "movie") {
          state.searchMovieList = action.payload as MovieListProp;
        } else {
          state.searchTvList = action.payload as MovieListProp;
        }
      }
    });
  },
});

export const {} = search.actions;

export default search.reducer;
