import { createSlice } from "@reduxjs/toolkit";
import { MovieListProp } from "../../types/movieList";
import {
  fetchPopularTVListUs,
  fetchPopularTVListZh,
  fetchPopularTVListKr,
  fetchPopularTVAnimationList,
  fetchTopRatedTVList,
} from "../../actions/tvListsActions";
import { initialList } from "../movieList/initialList";

export interface IMovieListState {
  usData: MovieListProp;
  zhData: MovieListProp;
  krData: MovieListProp;
  aniData: MovieListProp;
  topRatedData: MovieListProp;
}

const initialState: IMovieListState = {
  usData: initialList,
  zhData: initialList,
  krData: initialList,
  aniData: initialList,
  topRatedData: initialList,
};

export const tvLists = createSlice({
  name: "popular tv list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularTVListUs.fulfilled, (state, action) => {
      state.usData = action.payload;
    });
    builder.addCase(fetchPopularTVListZh.fulfilled, (state, action) => {
      state.zhData = action.payload;
    });
    builder.addCase(fetchPopularTVListKr.fulfilled, (state, action) => {
      state.krData = action.payload;
    });

    builder.addCase(fetchPopularTVAnimationList.fulfilled, (state, action) => {
      state.aniData = action.payload;
    });
    builder.addCase(fetchTopRatedTVList.fulfilled, (state, action) => {
      state.topRatedData = action.payload;
    });
  },
});

export default tvLists.reducer;
