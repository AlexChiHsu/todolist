import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../common/icons/icon";

const SearchBoxContainer = styled.div`
  min-width: 448px;
  min-height: 38px;
  ${tw`
    items-center
    justify-center
    rounded-lg
    flex
    flex-row
    bg-transparent
    pl-2.5
    pr-2.5
    text-left
  `}
  border: 1px solid rgba(104, 107, 114, 1);
`;

const IconContainer = styled.div`
  ${tw`
    h-full
    mr-1.5
  `}
`;

const SearchBoxInput = styled.input`
  ${tw`
    w-full
    h-full
    justify-center
    rounded-lg
    bg-transparent
    text-left
    pl-2
  `}
`;
export default function SearchBox() {
  return (
    <SearchBoxContainer>
      <IconContainer>
        <Icon
          name={"search"}
          width={24}
          height={24}
          stroke="#686B72"
          fill="#686B72"
        />
      </IconContainer>
      <SearchBoxInput placeholder="搜尋劇名 / 演員"></SearchBoxInput>
    </SearchBoxContainer>
  );
}
