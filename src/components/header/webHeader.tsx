import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import LogoWithText from "./components/logoWithText";
import RightList from "./components/rightList";

const WebHeaderContainer = styled.div`
  ${tw`
    w-full
    h-14
    flex
    flex-row
    items-center
    justify-between
    text-white
    absolute
    top-0
    pl-10
    pr-10
  `}
  background-color: #1B1E25AD;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.48);
`;

function WebHeader() {
  return (
    <WebHeaderContainer>
      <LogoWithText />
      <RightList />
    </WebHeaderContainer>
  );
}

export default WebHeader;
