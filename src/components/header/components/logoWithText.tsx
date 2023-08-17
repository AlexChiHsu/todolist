import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../../common/icons/icon";
import SearchBox from "../../searchBox/searchBox";
import { useNavigate } from "react-router-dom";

const LogoWithTextContainer = styled.div`
  ${tw`
    h-full
    flex
    flex-row
    justify-start
    items-center
  `}
`;

const BrandText = styled.h1`
  ${tw`
    text-white
    text-xl
    ml-2.5
    mr-5
  `}
`;

const LogoButton = styled.button`
  ${tw`
    flex
    flex-row
    justify-center
    items-center
  `}
`;

export default function LogoWithText() {
  const navigation = useNavigate();
  return (
    <LogoWithTextContainer onClick={() => navigation(`/`)}>
      <LogoButton>
        <Icon name={"logo"} width={38} />
        <BrandText>WoW ! Movie</BrandText>
      </LogoButton>
      <SearchBox />
    </LogoWithTextContainer>
  );
}
