import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import {
  CastDetailContainer,
  CastDetailCreditsContainer,
  CastDetailTitleContainer,
} from "./styles/castDetailStyles";
import Text from "../../components/common/text";
import MovieListCard from "../../components/common/card/movieListCard";
import { MovieProp } from "../../types/movieList";

export default function CastDetail() {
  const cast = useAppSelector((state) => state.detail.combinedCredits);
  const name = useLocation().state.name;

  return (
    <CastDetailContainer>
      <CastDetailTitleContainer>
        <Text text={name + " " + "的其他作品"} index={0} />
      </CastDetailTitleContainer>
      <CastDetailCreditsContainer>
        {cast.cast.map((item: MovieProp) => (
          <MovieListCard
            isCastCombinedCredits={true}
            movie={item}
            type={item.media_type}
          />
        ))}
      </CastDetailCreditsContainer>
    </CastDetailContainer>
  );
}
