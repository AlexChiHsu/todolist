import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { myListItems } from "./tabItems";
import Button from "../button";
import Marginer from "../../marginer";

const TabListContainer = styled.ul`
  ${tw`
    flex
    flex-row
    list-none
  `}
  height: 31px;
  /* border-bottom-width: 1px;
  border-bottom-color: #0000004d; */
`;

const TabItem = styled.li`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-3
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}
`;

function Tab() {
  const [selectTab, setSelectTab] = useState("清單");
  const tabItem = (subtitles: string[]) => (
    <>
      <TabListContainer>
        {subtitles.map((item) => (
          <TabItem>
            <Button text={item} onClick={() => setSelectTab(item)} />
          </TabItem>
        ))}
      </TabListContainer>
    </>
  );
  return <>{tabItem(myListItems)}</>;
}

export default Tab;
