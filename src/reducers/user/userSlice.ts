import { createSlice } from "@reduxjs/toolkit";
import { UserPasswordProp, UserProp } from "../../types/user";
import {
  initialUser,
  initialUserPassword,
  initialUserWishList,
} from "./initialUser";
import { MovieProp } from "../../types/movieList";

export interface IUserState {
  user: UserProp;
  userPassword: UserPasswordProp;
  userWishList: MovieProp;
}

const initialState: IUserState = {
  user: initialUser,
  userPassword: initialUserPassword,
  userWishList: initialUserWishList,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAccount: (state, action) => {
      state.user = action.payload;
    },
    setUserPassword: (state, action) => {
      state.userPassword = action.payload;
    },
    setUserWishList: (state, action) => {
      state.userWishList = action.payload;
    },
  },
});

export const { setUserAccount, setUserPassword, setUserWishList } =
  user.actions;

export default user.reducer;
