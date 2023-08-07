import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

export interface ITextProp {
  text: string | any;
}

const TextContainer = styled.div`
  max-width: 208px;
  ${tw`
    items-center
    justify-center
    text-white
    font-normal
    leading-6
    text-center
    whitespace-pre-line
  `}
  font-size: 16px;
`;

export default function Text(props: ITextProp) {
  const { text } = props;
  return <TextContainer>{text}</TextContainer>;
}
