import { createSlice } from "@reduxjs/toolkit";
import { DetailProp } from "../../types/movieList";
import { fetchTVCredits, fetchTVDetail } from "../../reducers/tvListsReducers";
import {
  fetchMovieCredits,
  fetchMovieDetail,
} from "../../reducers/movieListReducers";
import { initialCredits, initialDetail } from "./initialDetail";
import { CreditsProp } from "../../types/credits";

export interface IDetailState {
  movieDetail: DetailProp;
  tvDetail: DetailProp;
  movieCredits: CreditsProp;
  tvCredits: CreditsProp;
}

const initialState: IDetailState = {
  movieDetail: initialDetail,
  tvDetail: initialDetail,
  movieCredits: initialCredits,
  tvCredits: initialCredits,
};

export const detail = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.movieDetail = action.payload;
    });
    builder.addCase(fetchTVDetail.fulfilled, (state, action) => {
      state.tvDetail = action.payload;
    });
    builder.addCase(fetchTVCredits.fulfilled, (state, action) => {
      state.tvCredits = action.payload;
    });
    builder.addCase(fetchMovieCredits.fulfilled, (state, action) => {
      state.movieCredits = action.payload;
    });
  },
});

export default detail.reducer;
