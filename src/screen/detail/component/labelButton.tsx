import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

interface ILabelButtonProp {
  name: string;
}

const LabelContainer = styled.button`
  ${tw`
    rounded
    border
    text-white
    font-normal
    leading-6
    text-[16px]
    text-center
    pl-4
    pr-4
    pt-1
    pb-1
    mr-2.5
  `}

  background-image: linear-gradient(0deg, #161616, #161616),
linear-gradient(0deg, #FFFFFF, #FFFFFF);
`;

export default function LabelButton(props: ILabelButtonProp) {
  const { name } = props;
  return <LabelContainer>{name}</LabelContainer>;
}
