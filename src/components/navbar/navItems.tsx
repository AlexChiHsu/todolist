import React from "react";
import { css, styled } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import menuStyle from "./menuStyle";
import { SCREENS } from "../common/screen";
import { useMediaQuery } from "react-responsive";

const ListContainer = styled.ul`
  ${tw`
    flex
    flex-col
    list-none
  `}
`;

const NavBarTitle = styled.div`
  ${tw`
    
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
  const navItem = (isMenu: boolean) => (
    <>
      <ListContainer>
        <NavItem menu={isMenu}>
          <a href="#">Home</a>
        </NavItem>
        <NavItem menu={isMenu}>
          <a href="#">Cars</a>
        </NavItem>
        <NavItem menu={isMenu}>
          <a href="#">Services</a>
        </NavItem>
        <NavItem menu={isMenu}>
          <a href="#">Contact Us</a>
        </NavItem>
      </ListContainer>
    </>
  );

  if (isMobile) {
    return (
      <Menu right styles={menuStyle}>
        {navItem(true)}
      </Menu>
    );
  }
  return <NavBarTitle>任務{navItem(false)}</NavBarTitle>;
}
