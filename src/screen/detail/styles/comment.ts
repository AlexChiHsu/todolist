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
