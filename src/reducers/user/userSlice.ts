import { createSlice } from "@reduxjs/toolkit";
import { UserPasswordProp, UserProp } from "../../types/user";
import {
  initialUser,
  initialUserPassword,
  initialUserWishItem,
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
  userWishItem: initialUserWishItem,
  userWishList: [initialUserWishItem],
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
      const data = state.userWishList;
      const index = data.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        data.splice(index, 1);
      } else {
        data.push(action.payload);
      }
      state.userWishList = data;
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
