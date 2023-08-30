import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../../common/icons/icon";
import SearchBox from "../../searchBox/searchBox";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../common/screen";

const LogoWithTextContainer = styled.div`
  ${tw`
    h-full
    flex
    flex-row
    justify-start
    items-center
    pl-2.5
    sm:pl-0
  `}

  @media (max-width: 639px) {
    width: 100%;
  }
`;

const BrandText = styled.h1`
  ${tw`
    text-white
    lg:text-xl
    sm:text-lg
    text-[16px]
    font-normal
    lg:ml-2.5
    sm:ml-2.5
    ml-2.5
  `}
`;

const LogoButton = styled.button`
  ${tw`
    flex
    flex-row
    justify-center
    items-center
    mr-2.5
    sm:mr-5
  `}
`;
interface LogoWithTextProp {
  isSelected: string;
  setIsSelected: Function;
  searchWord: string;
  setSearchWord: Function;
}
export default function LogoWithText(props: LogoWithTextProp) {
  const { isSelected, setIsSelected, searchWord, setSearchWord } = props;
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
    <LogoWithTextContainer>
      <LogoButton onClick={() => setIsSelected("home")}>
        <Icon name={"logo"} width={isMobile ? 30 : 38} />
        <BrandText>WoW ! Movie</BrandText>
      </LogoButton>
      <SearchBox setSearchWord={setSearchWord} searchWord={searchWord} />
    </LogoWithTextContainer>
  );
}
