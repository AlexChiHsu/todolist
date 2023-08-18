import { MovieProp } from "./movieList";

export interface PersonWorksProp {
  id: number;
  cast: [MovieProp];
  crew: [MovieProp];
}
