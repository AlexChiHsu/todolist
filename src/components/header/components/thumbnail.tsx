import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

const ThumbnailContainer = styled.div`
  ${tw`
    flex
    space-x-1
    rounded-full
    overflow-hidden
  `}
`;
const ThumbnailImg = styled.div`
  ${tw`
    inline-block
    h-10
    w-10
    rounded-full
    ring-2
    ring-white
  `}
`;

export default function Thumbnail() {
  return (
    <ThumbnailContainer>
      <ThumbnailImg>
        <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      </ThumbnailImg>
    </ThumbnailContainer>
  );
}
