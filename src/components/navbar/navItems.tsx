import React from "react";
import { css, styled } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import menuStyle from "./menuStyle";
import { SCREENS } from "../common/screen";
import { useMediaQuery } from "react-responsive";
import Marginer from "../marginer";
import { subtitle, subtitle2 } from "./navItemText";

const ListContainer = styled.ul`
  ${tw`
    flex
    flex-col
    list-none
    // mt-2.5
    mb-2.5
  `}
`;

const NavBarTitle = styled.button`
  ${tw`
    mb-3
  `}
`;

const NavItem = styled.li<{ menu?: boolean }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-3
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
    mb-1
  `}
  a {
    color: black;
    text-decoration: none;
  }
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
      a {
        color: white;
      }
    `}
`;
export default function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const navItem = (isMenu: boolean, subtitles: string[]) => (
    <>
      <ListContainer>
        {subtitles.map((item) => (
          <NavItem menu={isMenu}>
            <a href="#">{item}</a>
          </NavItem>
        ))}
      </ListContainer>
    </>
  );

  if (isMobile) {
    return (
      <Menu right styles={menuStyle}>
        {navItem(true, subtitle)}
      </Menu>
    );
  }
  return (
    <>
      <NavBarTitle>任務</NavBarTitle>
      {navItem(false, subtitle)}
      <Marginer direction="vertical" margin="1.5em" />
      <NavBarTitle>快速存取</NavBarTitle>
      {navItem(false, subtitle2)}
      <Marginer direction="vertical" margin="1.5em" />
      <NavBarTitle>協作清單</NavBarTitle>
    </>
  );
}
