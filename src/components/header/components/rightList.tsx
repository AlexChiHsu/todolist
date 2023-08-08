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
    w-full
    h-full
    list-none
  `}
`;

const ButtonItem = styled.li`
  ${tw`
    h-full
    flex
    items-end
    relative
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
          <Button isFill={false} onClick={() => {}} component={<Thumbnail />} />
        </ButtonItem>
      </ButtonListContainer>
    </RightListContainer>
  );
}
