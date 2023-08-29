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
  userWishItem: MovieProp;
  userWishList: MovieProp[];
}

const initialState: IUserState = {
  user: initialUser,
  userPassword: initialUserPassword,
  userWishItem: initialUserWishList,
  userWishList: [initialUserWishList],
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
    setUserWishItem: (state, action) => {
      state.userWishItem = action.payload;
    },
    setUserWishList: (state, action) => {
      state.userWishList = action.payload;
    },
  },
});

export const {
  setUserAccount,
  setUserPassword,
  setUserWishItem,
  setUserWishList,
} = user.actions;

export default user.reducer;
