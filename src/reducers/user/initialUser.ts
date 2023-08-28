import {
  UserDramaCommentsProp,
  UserPasswordProp,
  UserProp,
  UserWishListProp,
} from "../../types/user";

export const initialUser = {
  id: "",
  userName: "",
  email: "",
} as UserProp;

export const initialUserPassword = {
  id: "",
  userId: "",
  password: "",
} as UserPasswordProp;

export const initialUserWishList = {
  id: "",
  userId: "",
  wishList: [
    {
      adult: false,
      backdrop_path: "",
      genre_ids: [0],
      id: 0,
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: "",
      release_date: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
      name: "",
      character: "",
      credit_id: "",
      order: 0,
      media_type: "",
      department: "",
      job: "",
    },
  ],
} as UserWishListProp;

export const initialUserDramaComments = {
  id: "",
  userId: "",
  drama: [{ id: "", comment: "" }],
} as UserDramaCommentsProp;
