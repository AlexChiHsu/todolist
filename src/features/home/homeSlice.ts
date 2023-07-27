import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IHomeState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: IHomeState = {
  value: 0,
  status: "idle",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default homeSlice.reducer;
