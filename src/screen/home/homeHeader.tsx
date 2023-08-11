import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HomeHeaderContainer = styled.div`
  min-height: 720px;
  ${tw`
		w-full
		h-full
	`}
`;

const BackgroundImage = styled.div`
  ${tw`
		w-full
		h-full
    bg-cover
    bg-no-repeat
		bg-center
		flex
		flex-col
		pl-[114px]
		justify-end
		pb-[235px]
	`}
  background-image: radial-gradient(
      72.5% 427.7% at 96.33% 50%,
      rgba(27, 30, 37, 0) 39.58%,
      rgba(27, 30, 37, 0.93) 94.79%
    ),
    linear-gradient(360deg, #1b1e25 0%, rgba(27, 30, 37, 0) 29.22%),
		url('https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg');
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
		text-[76px]
		text-white
		font-medium
		leading-[90px]
	`}
  line-clamp: 2;
`;

const MovieDescription = styled.h5`
  ${tw`
		text-white
		font-normal
		leading-6
		text-[16px]
		max-w-[346px]
		overflow-hidden
		text-ellipsis
		line-clamp-2
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

const ButtonGradientBg = styled(ButtonWithBlackBg)`
  ${tw`
		w-40
		h-full
		bg-transparent
	`}
  background-image: linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
`;

export default function HomeHeader() {
  return (
    <HomeHeaderContainer>
      <BackgroundImage>
        <Rated>8.6</Rated>
        <MovieTitle>殭屍校園</MovieTitle>
        <MovieDescription>
          開春鉅作《殭屍校園》短短一周在全球造成話題，「喪屍」熱潮再現！雖然，喪屍題材已是...
        </MovieDescription>
        <ButtonContainer>
          <ButtonWithoutBg>
            <ButtonWithBlackBg>更多資訊</ButtonWithBlackBg>
          </ButtonWithoutBg>
          <ButtonGradientBg>加入片單</ButtonGradientBg>
        </ButtonContainer>
      </BackgroundImage>
    </HomeHeaderContainer>
  );
}
