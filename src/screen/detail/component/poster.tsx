import React from "react";
import { css, styled } from "styled-components";
import tw from "twin.macro";
import { imagePath } from "../../../components/helper/media";
import { useAppSelector } from "../../../app/hooks";
import LabelButton from "./labelButton";

const PosterContainer = styled.div`
  ${tw`
    w-full
    max-h-[470px]
    bg-[#686B721A]
    rounded-[20px]
    flex
    flex-row
    // justify-center
    items-center
  `}
`;

const LeftContainer = styled.div`
  ${tw`
    h-[430px]
    w-[323px]
    bg-amber-100
    rounded-[20px]
    overflow-hidden
  `}
  box-shadow: 0px 2px 8px 0px #0000007A;
`;

const Image = styled.button<{ path?: any }>`
  ${tw`
    w-full
    h-full
    bg-cover
    bg-no-repeat
    bg-center
  `}

  ${({ path }) =>
    css`
      background-image: url(${path});
    `}
`;

const RightContainer = styled.div`
  ${tw`
    w-full
    h-full
  `}
`;

const RightHeader = styled.div`
  ${tw`
    flex
    flex-row
    justify-between
    items-center
  `}
`;
const DivContainer = styled.div`
  ${tw`
    flex
    flex-row
  `}
`;

const ButtonGradientBg = styled.button`
  ${tw`
		w-40
		h-[42px]
    rounded-[13px]
		bg-transparent
    text-white
    font-normal
    text-[16px]
    leading-6
	`}
  box-shadow: 0px 2px 8px 0px #0000007A;
  background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
`;
export default function Poster() {
  const { movieDetail, tvDetail } = useAppSelector((state) => state.detail);
  const data = movieDetail ?? tvDetail;
  return (
    <PosterContainer>
      <LeftContainer>
        <Image path={imagePath(data.backdrop_path)} />
      </LeftContainer>
      <RightContainer>
        <RightHeader>
          <DivContainer>
            {data.genres.map((item) => (
              <LabelButton name={item.name} />
            ))}
          </DivContainer>
          <DivContainer>
            <ButtonGradientBg>加入片單</ButtonGradientBg>
          </DivContainer>
        </RightHeader>
      </RightContainer>
    </PosterContainer>
  );
}
