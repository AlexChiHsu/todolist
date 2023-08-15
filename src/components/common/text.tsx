import React from "react";
import { css, styled } from "styled-components";
import tw from "twin.macro";

export interface ITextProp {
  text: string | any;
  index: number;
}

const TextContainer = styled.div<{ index?: number }>`
  ${tw`
    flex
    flex-row
    justify-between
    items-center
    ml-4
  `}

  ${({ index }) =>
    index === 0 &&
    css`
      margin-left: 0;
    `}
`;

const LeftBorder = styled.div`
  ${tw`
    w-[3px]
    h-[23px]
    rounded-full
    mr-2
  `}
  background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
`;

const Content = styled.div`
  ${tw`
    text-white
    font-normal
    text-[16px]
    leading-6
  `}
`;
export default function Text(props: ITextProp) {
  const { text, index } = props;
  return (
    <TextContainer index={index}>
      <LeftBorder></LeftBorder>
      <Content>{text}</Content>
    </TextContainer>
  );
}
