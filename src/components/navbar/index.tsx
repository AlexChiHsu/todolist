import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import NavItems from "./navItems";

const NavbarContainer = styled.div`
  min-height: 68px;
  min-width: 280px;
  ${tw`
    h-full
    w-72
    max-w-screen-2xl
    flex-col-reverse
    flex-col
    items-center
    lg:pl-6
    lg:pr-6
    lg:pt-6
    justify-between
    bg-gray-100
  `};
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavItems />
    </NavbarContainer>
  );
}

export default Navbar;
