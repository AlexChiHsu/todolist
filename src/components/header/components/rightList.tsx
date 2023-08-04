import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Thumbnail from "./thumbnail";

const RightListContainer = styled.div`
  ${tw`
    
  `}
`;

export default function RightList() {
  return (
    <RightListContainer>
      <Thumbnail />
    </RightListContainer>
  );
}
