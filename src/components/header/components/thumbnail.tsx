import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../../common/icons/icon";

interface IThumbnailProp {
  isLogin: boolean;
}

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
    h-[42px]
    w-[42px]
    rounded-full
    ring-2
    ring-white
  `}
`;

export default function Thumbnail(props: IThumbnailProp) {
  const { isLogin } = props;
  return (
    <ThumbnailContainer>
      <ThumbnailImg>
        {isLogin ? (
          <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        ) : (
          <Icon
            name={"logout"}
            width={42}
            height={42}
            fill="white"
            stroke="white"
          />
        )}
      </ThumbnailImg>
    </ThumbnailContainer>
  );
}
