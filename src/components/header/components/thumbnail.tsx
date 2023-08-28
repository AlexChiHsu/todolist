import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../../common/icons/icon";
import { auth } from "../../../config/firebase";

interface IThumbnailProp {
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
  const { url } = props;
  const isLogin = auth.currentUser !== null;
  return (
    <ThumbnailContainer>
      <ThumbnailImg>
        {isLogin ? (
          <img src={`${url ? url : auth.currentUser?.photoURL}`} />
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
