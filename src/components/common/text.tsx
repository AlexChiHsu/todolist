import React from "react";
import { CSSProp, css, styled } from "styled-components";
import tw, { TwStyle } from "twin.macro";

export interface ITextProp {
  text: string | any;
  index: number;
  css?: CSSProp | TwStyle;
  textStyle?: CSSProp | TwStyle;
}

const TextContainer = styled.div<{ index?: number; style?: any }>`
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

    ${({ index }) =>
    index === -1 &&
    css`
      margin-left: 0;
    `}

    ${({ style }) =>
    style &&
    css`
      ${style}
    `}
`;

const LeftBorder = styled.div<{ index?: number }>`
  ${tw`
    w-[3px]
    h-[23px]
    rounded-full
    mr-2
  `}

  ${({ index }) => {
    if (index === -1) {
      return css`
        width: 3px;
        height: auto;
        margin-right: 10px;
        background-color: transparent;
      `;
    } else if (index === -2) {
      return css`
        margin-right: 0px;
      `;
    }
  }}
  background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
`;

const Content = styled.div<{ style?: any }>`
  ${tw`
    text-white
    font-normal
    text-[16px]
    leading-6
		line-clamp-3
		whitespace-normal
  `}

  ${({ style }) =>
    style &&
    css`
      ${style}
    `}
`;
export default function Text(props: ITextProp) {
  const { text, index, css, textStyle } = props;
  return (
    <TextContainer index={index} style={css}>
      {index !== -2 && <LeftBorder index={index}></LeftBorder>}
      <Content style={textStyle}>{text}</Content>
    </TextContainer>
  );
}
