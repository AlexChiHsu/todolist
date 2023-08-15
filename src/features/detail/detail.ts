import { createSlice } from "@reduxjs/toolkit";
import { DetailProp } from "../../types/movieList";
import { fetchTVDetail } from "../../reducers/tvListsReducers";
import { fetchMovieDetail } from "../../reducers/movieListReducers";
import { initialDetail } from "./initialDetail";

export interface IDetailState {
  movieDetail: DetailProp;
  tvDetail: DetailProp;
}

const initialState: IDetailState = {
  movieDetail: initialDetail,
  tvDetail: initialDetail,
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
  },
});

export default detail.reducer;
