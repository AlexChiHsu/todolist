import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import HeaderTitle from "../../components/common/headerTitle";
import Tab from "../../components/common/tab/tab";
import Marginer from "../../components/marginer";

const MyListContainer = styled.div`
  ${tw`
    w-full
    h-full
    bg-cyan-100
  `}
`;

export default function MyList() {
  return (
    <MyListContainer>
      <HeaderTitle title="我負責的" />
      <Tab />
    </MyListContainer>
  );
}
