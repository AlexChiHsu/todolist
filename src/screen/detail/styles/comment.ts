import { css, styled } from "styled-components";
import tw from "twin.macro";

export const CommentContainer = styled.div`
  ${tw`
    w-full
    max-h-[250px]
    bg-[#686B721A]
    rounded-[20px]
    items-center
    pl-6
    pr-6
    pt-6
    pb-6
    mb-3
    overflow-auto
  `}
`;

export const CommentHeaderContainer = styled.div`
  ${tw`
    w-full
    h-[44px]
    flex
    justify-end
  `}
`;

export const CommentButton = styled.button`
  ${tw`
    flex
    flex-row
    items-center
  `}
`;

export const StartsContainer = styled.div<{ index?: any }>`
  ${tw`
    w-11
    flex
    aspect-square
    rounded-full
    bg-[#1B1E25]
    justify-center
    items-center
    mr-1.5
    ml-1.5
  `}

  ${({ index }) =>
    index === 0 &&
    css`
      margin-left: 27px;
    `};
  box-shadow: 0px 2px 8px 0px #0000007a;
`;

export const CardContainer = styled.div`
  ${tw`
    w-full
    max-h-[498px]
  `}
`;

export const CommentCardContainer = styled.div<{ index?: any }>`
  ${tw`
    w-full
    h-[90px]
    rounded-[10px]
    bg-[#1B1E25]
    mt-1.5
    mb-1.5
    flex
    flex-row
  `}

  ${({ index }) =>
    index === 0 &&
    css`
      margin-top: 0px;
    `};
`;
export const ButtonThumbnail = styled.button`
  ${tw`
    overflow-hidden
  `}
`;

export const CommentCardLeft = styled.div`
  ${tw`
    w-[46px]
    h-full
  `}
`;
export const CommentCardCenter = styled.div`
  ${tw`
    h-full
    bg-blue-500
  `}
`;
export const CommentCardRight = styled.div`
  ${tw`
    h-full
    bg-green-500
  `}
`;
