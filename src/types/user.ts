import { MovieProp } from "./movieList";

export interface UserProp {
  id: string;
  userName: string;
  email: string;
}

export interface UserPasswordProp {
  id: string;
  userId: string;
  password: string;
}

export interface UserWishListProp {
  id: string;
  userId: string;
  wishList: [MovieProp];
}

export interface UserDramaCommentsProp {
  id: string;
  userId: string;
  drama: [{ id: string; comment: string }];
}
