import React, { useEffect } from "react";
import { MovieProp } from "../../../types/movieList";
import { css, styled } from "styled-components";
import tw from "twin.macro";
import { imageURL } from "../../../api/tmdb/commonURL";
import { useNavigate } from "react-router-dom";
import withoutImg from "../../../assets/images/withoutImg.svg";

const MovieCardContainer = styled.button`
  width: 103px;
  height: 155px;
  ${tw`
    gap-1
    ml-1
    mr-1
    border
    border-transparent
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
    pointer-events-none
  `}
`;

const MovieImage = styled.div<{ path?: any }>`
  ${tw`
    w-[103px]
    h-[128px]
    flex
    justify-end
    items-end
    pr-1
    pb-2
    rounded-lg
    bg-cover
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

const VoteAverage = styled.span`
  ${tw`
    rounded
    w-[33px]
    h-[20px]
    pl-2.5
    pr-2.5
    flex
    justify-center
    items-center
    gap-2.5
    text-white
    font-extrabold
    text-sm
    leading-[21px]
    pointer-events-none
  `}
  background: linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
  box-shadow: 0px 2px 8px 0px #0000007a;
`;

interface ICardProp {
  movie: MovieProp;
  type: string;
}
export default function MovieListCard(props: ICardProp) {
  const { poster_path, title, vote_average, name, id } = props.movie;
  const { type } = props;
  const navigation = useNavigate();
  const url = poster_path === null ? `${withoutImg}` : imageURL + poster_path;

  return (
    <MovieCardContainer onClick={() => navigation(`/detail/${type}/${id}`)}>
      <MovieImage path={url}>
        <VoteAverage aria-disabled>
          {Math.round(vote_average * 10) / 10}
        </VoteAverage>
      </MovieImage>
      <MovieTitle>{title ?? name}</MovieTitle>
    </MovieCardContainer>
  );
}
