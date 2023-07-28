import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Navbar from "../../components/navbar";
import MyList from "../myList";

const HomeContainer = styled.div`
  ${tw`
    flex
    flex-row
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
      <MyList />
    </HomeContainer>
  );
}

export default HomeScreen;
