import React from "react";
import { MovieList } from "../../../types/movieList";
import { css, styled } from "styled-components";
import tw from "twin.macro";
import { imageURL } from "../../../api/tmdb/commonURL";

const MovieCardContainer = styled.button`
  width: 103px;
  height: 153px;
  ${tw`
    gap-1
  `}
`;

const MovieTitle = styled.div`
  ${tw`
    text-white
    font-normal
    text-sm
    text-center
    leading-[21px]
  `}
`;

const MovieImage = styled.div<{ path?: any }>`
  ${tw`
    w-full
    h-full
    inline-block
    rounded-lg
    bg-contain
    bg-no-repeat
    mb-1
  `}
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.48);

  ${({ path }) =>
    css`
      background-image: linear-gradient(
          180deg,
          rgba(22, 22, 22, 0) 30.58%,
          rgba(22, 22, 22, 0.98) 100%
        ),
        url(${path});
    `}
`;

export default function MovieListCard(props: MovieList) {
  const { results } = props;
  const url = imageURL + results[0].poster_path;
  return (
    <MovieCardContainer>
      <MovieImage path={url} />
      <MovieTitle>007:生死交戰</MovieTitle>
    </MovieCardContainer>
  );
}
