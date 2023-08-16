import { createSlice } from "@reduxjs/toolkit";
import { DetailProp } from "../../types/movieList";
import { fetchCredits, fetchDetail } from "../../reducers/tvListsReducers";
import { initialCredits, initialDetail } from "./initialDetail";
import { CreditsProp } from "../../types/credits";

export interface IDetailState {
  detail: DetailProp;
  credits: CreditsProp;
  tvCredits: CreditsProp;
}

const initialState: IDetailState = {
  detail: initialDetail,
  credits: initialCredits,
  tvCredits: initialCredits,
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
  },
});

export default detail.reducer;
