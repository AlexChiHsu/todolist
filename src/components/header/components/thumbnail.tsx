import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../../common/icons/icon";
import { imagePath } from "../../helper/media";

interface IThumbnailProp {
  isLogin: boolean;
  url?: string;
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
  const { isLogin, url } = props;
  return (
    <ThumbnailContainer>
      <ThumbnailImg>
        {isLogin && url ? (
          <img src={`${imagePath(url)}`} />
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
