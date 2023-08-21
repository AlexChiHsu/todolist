import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { MovieProp } from "../../types/movieList";
import { imageURL } from "../../api/tmdb/commonURL";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import AddListButton from "../../components/common/button/addListButton";

interface CarouselCardProp {
  item: MovieProp;
}

const BackgroundImage = styled.div<{ path?: any }>`
  ${tw`
		inline-flex
		w-full
		h-full
    bg-cover
    bg-no-repeat
		bg-center
		flex-col
		pl-[114px]
		justify-end
		pb-[235px]
	`}
  ${({ path }) =>
    css`
      background-image: radial-gradient(
          72.5% 427.7% at 96.33% 50%,
          rgba(27, 30, 37, 0) 39.58%,
          rgba(27, 30, 37, 0.93) 94.79%
        ),
        linear-gradient(360deg, #1b1e25 0%, rgba(27, 30, 37, 0) 29.22%),
        url(${path});
    `}
`;

const Rated = styled.h2`
  ${tw`
		text-[70px]
		leading-none
		font-bold
		bg-clip-text
		text-transparent
	`}
  font-family: "Roboto";
  background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
`;

const MovieTitle = styled.h1`
  ${tw`
		max-w-[560px]
		text-[76px]
		text-white
		font-medium
		truncate
		leading-[90px]
	`}
`;

const MovieDescription = styled.h5`
  ${tw`
		text-white
		font-normal
		leading-6
		text-[16px]
		max-w-[346px]
		line-clamp-2
		whitespace-normal
		mb-4
		mt-0.5
	`}
`;

const ButtonContainer = styled.div`
  ${tw`
		w-[346px]
		flex
		flex-row
		items-center
		justify-start
	`}
`;

const ButtonWithoutBg = styled.div`
  ${tw`
		w-40
		h-[42px]
		rounded-[13px]
		overflow-hidden
		p-[2px]
		mr-[15px]
	`}
  background-image: linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
`;

const ButtonWithBlackBg = styled.button`
  ${tw`
		w-full
		h-full
		text-white
		font-normal
		text-[16px]
		rounded-[13px]
		leading-6
		text-center
	`}
  background-image: linear-gradient(0deg, #161616, #161616);
`;

export default function CarouselCard(props: CarouselCardProp) {
  const movieTopRated = useAppSelector((state) => state.movieList.topRatedData);
  const navigation = useNavigate();
  const { item } = props;
  const moreInfo = () => {
    const movie = movieTopRated.results.filter((i) => i.id === item.id);
    if (movie.length === 0) {
      navigation(`/detail/tv/${item.id}`);
    } else {
      navigation(`/detail/movie/${item.id}`);
    }
  };
  return (
    <BackgroundImage path={imageURL + item.backdrop_path}>
      <Rated>{item.vote_average}</Rated>
      <MovieTitle>{item?.title ?? item?.name}</MovieTitle>
      <MovieDescription>{item.overview}</MovieDescription>
      <ButtonContainer>
        <ButtonWithoutBg>
          <ButtonWithBlackBg onClick={moreInfo}>更多資訊</ButtonWithBlackBg>
        </ButtonWithoutBg>
        <AddListButton />
      </ButtonContainer>
    </BackgroundImage>
  );
}
