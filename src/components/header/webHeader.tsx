import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../common/icons/icon";
import LogoWithText from "./components/logoWithText";
import SearchBox from "../searchBox/searchBox";
import RightList from "./components/rightList";

const WebHeaderContainer = styled.div`
  ${tw`
    w-full
    h-14
    flex
    flex-row
    items-center
    justify-center
    text-white
    absolute
    top-0
  `}
  background-color: #1B1E25AD;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.48);
`;

function WebHeader() {
  return (
    <WebHeaderContainer>
      <LogoWithText />
      <SearchBox />
      <RightList />
    </WebHeaderContainer>
  );
}

export default WebHeader;
