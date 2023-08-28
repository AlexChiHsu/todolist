import { createSlice } from "@reduxjs/toolkit";

export interface IHomeState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: IHomeState = {
  value: 0,
  status: "idle",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = user.actions;

export default user.reducer;
