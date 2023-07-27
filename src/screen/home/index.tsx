import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Navbar from "../../components/navbar";

const HomeContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;
function HomeScreen() {
  return (
    <HomeContainer>
      <Navbar />
    </HomeContainer>
  );
}

export default HomeScreen;
