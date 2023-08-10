import { createSlice } from "@reduxjs/toolkit";

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

export default homeSlice.reducer;
