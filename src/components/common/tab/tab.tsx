import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { myListItems } from "./tabItems";

const TabListContainer = styled.ul`
  ${tw`
    flex
    flex-row
    list-none
    mb-2.5
  `}
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
    mb-1
    pb-1
    border-b-2
    border-b-blue-600
  `}
  a {
    color: black;
    text-decoration: none;
  }
`;

function Tab() {
  const tabItem = (subtitles: string[]) => (
    <>
      <TabListContainer>
        {subtitles.map((item) => (
          <TabItem>
            <a href="#">{item}</a>
          </TabItem>
        ))}
      </TabListContainer>
    </>
  );
  return <>{tabItem(myListItems)}</>;
}

export default Tab;
