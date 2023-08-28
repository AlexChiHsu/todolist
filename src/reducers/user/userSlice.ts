import { createSlice } from "@reduxjs/toolkit";
import { UserPasswordProp, UserProp } from "../../types/user";
import { initialUser, initialUserPassword } from "./initialUser";

export interface IUserState {
  user: UserProp;
  userPassword: UserPasswordProp;
}

const initialState: IUserState = {
  user: initialUser,
  userPassword: initialUserPassword,
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
  },
});

export const { setUserAccount, setUserPassword } = user.actions;

export default user.reducer;
