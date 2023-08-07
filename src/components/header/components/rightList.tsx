import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Thumbnail from "./thumbnail";
import Button from "../../common/button";

const RightListContainer = styled.div`
  ${tw`
    flex
    flex-row
    h-full
    items-center
  `}
`;

const ButtonListContainer = styled.ul`
  ${tw`
    flex
    h-full
    items-end
    list-none
  `}
`;

const ButtonItem = styled.li`
  ${tw`
    // bg-amber-500
  `}
`;

export default function RightList() {
  return (
    <RightListContainer>
      <ButtonListContainer>
        <ButtonItem>
          <Button isFill={false} onClick={() => {}} text="電影" />
          <Button isFill={false} onClick={() => {}} text="影集" />
          <Button isFill={false} onClick={() => {}} text="主題館" />
          <Button isFill={false} onClick={() => {}} text="我的片單" />
        </ButtonItem>
      </ButtonListContainer>
      <Thumbnail />
    </RightListContainer>
  );
}
