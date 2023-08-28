import { auth } from "../../config/firebase";

export const isLogin = () => {
  if (auth.currentUser === null) {
    return false;
  } else {
    return true;
  }
};
