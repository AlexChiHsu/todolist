import React, { useState } from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../common/icons/icon";
import { useAppDispatch } from "../../app/hooks";
import { fetchSearchList } from "../../actions/searchActions";
import { useNavigate } from "react-router-dom";

const SearchBoxContainer = styled.div`
  ${tw`
    xl:min-w-[448px]
    lg:min-w-[300px]
    lg:min-h-[38px]
    sm:max-w-[216px]
    max-w-[230px]
  `}
`;
const Box = styled.div`
  ${tw`
    relative 
    rounded-md 
    shadow-sm
  `}
`;
const IconContainer = styled.span`
  ${tw`
    pointer-events-none 
    absolute
    inset-y-0 
    left-0 
    flex 
    items-center 
    pl-3
  `}
`;

const SearchBoxInput = styled.input`
  ${tw`
    bg-transparent
    block 
    w-full
    rounded-md 
    border
    py-1.5 
    pl-10
    pr-3
    text-white
    ring-1 
    ring-inset 
    placeholder:text-gray-400 
    focus:ring-indigo-600 
    sm:text-sm 
    sm:leading-6
  `}
  border-color: rgba(104, 107, 114, 1);
`;

interface ISearchBoxProp {
  setSearchWord: Function;
  searchWord: string;
}
export default function SearchBox(props: ISearchBoxProp) {
  const { setSearchWord, searchWord } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(
        fetchSearchList({ page: "1", type: "person", word: searchWord })
      );
      dispatch(fetchSearchList({ page: "1", type: "movie", word: searchWord }));
      dispatch(fetchSearchList({ page: "1", type: "tv", word: searchWord }));
      navigate("/search");
    }
  };
  return (
    <SearchBoxContainer>
      <Box>
        <IconContainer>
          <Icon
            name={"search"}
            width={24}
            height={24}
            stroke="#686B72"
            fill="#686B72"
          />
        </IconContainer>
        <SearchBoxInput
          onBlur={() => setSearchWord("")}
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="搜尋劇名 / 演員"
          value={searchWord}
        ></SearchBoxInput>
      </Box>
    </SearchBoxContainer>
  );
}
