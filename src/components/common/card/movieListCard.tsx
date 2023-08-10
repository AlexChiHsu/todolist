import React from "react";
import { MovieProp } from "../../../types/movieList";
import { css, styled } from "styled-components";
import tw from "twin.macro";
import { imageURL } from "../../../api/tmdb/commonURL";

const MovieCardContainer = styled.button`
  width: 103px;
  height: 153px;
  ${tw`
    gap-1
    ml-1
    mr-1
  `}
  & :hover {
    border-width: 1px;
    border-color: white;
  }
`;

const MovieTitle = styled.div`
  ${tw`
    text-white
    font-normal
    text-sm
    text-center
    truncate
    leading-[21px]
  `}
`;

const MovieImage = styled.div<{ path?: any }>`
  ${tw`
    w-[103px]
    h-[128px]
    justify-center
    items-center
    inline-block
    rounded-lg
    bg-cover
    bg-no-repeat
    mb-1
    bg-amber-200
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

export default function MovieListCard(props: MovieProp) {
  const { poster_path, title } = props;
  const url = imageURL + poster_path;
  return (
    <MovieCardContainer>
      <MovieImage path={url} />
      <MovieTitle>{title}</MovieTitle>
    </MovieCardContainer>
  );
}
