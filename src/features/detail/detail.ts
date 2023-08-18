import { createSlice } from "@reduxjs/toolkit";
import { DetailProp, MovieListProp } from "../../types/movieList";
import {
  initialCombinedCredits,
  initialCommentsList,
  initialCredits,
  initialDetail,
} from "./initialDetail";
import { CommentsProp, CreditsProp } from "../../types/credits";
import { initialList } from "../movieList/initialList";
import {
  fetchDetail,
  fetchCredits,
  fetchSimilar,
  fetchComments,
  fetchCombinedCredits,
} from "../../reducers/detailReducers";
import { PersonWorksProp } from "../../types/personWorks";

export interface IDetailState {
  detail: DetailProp;
  credits: CreditsProp;
  tvCredits: CreditsProp;
  similar: MovieListProp;
  comments: CommentsProp;
  combinedCredits: PersonWorksProp;
}

const initialState: IDetailState = {
  detail: initialDetail,
  credits: initialCredits,
  tvCredits: initialCredits,
  similar: initialList,
  comments: initialCommentsList,
  combinedCredits: initialCombinedCredits,
};

export const detail = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
    builder.addCase(fetchCredits.fulfilled, (state, action) => {
      state.credits = action.payload;
    });

    builder.addCase(fetchSimilar.fulfilled, (state, action) => {
      state.similar = action.payload;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(fetchCombinedCredits.fulfilled, (state, action) => {
      state.combinedCredits = action.payload;
    });
  },
});

export default detail.reducer;
