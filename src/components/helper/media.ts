import { imageURL } from "../../api/tmdb/commonURL";

export function imagePath(path: string) {
  return imageURL + path;
}
