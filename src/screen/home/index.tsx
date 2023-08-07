import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import WebHeader from "../../components/header/webHeader";
import Message from "../message";

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
      <WebHeader />
      {/* <Message /> */}
    </HomeContainer>
  );
}

export default HomeScreen;
