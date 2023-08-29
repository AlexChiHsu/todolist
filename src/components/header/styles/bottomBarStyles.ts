import { css, styled } from "styled-components";
import tw from "twin.macro";

export const BottomBarContainer = styled.div`
  ${tw`
    w-full
    max-h-14
    flex
    flex-row
    justify-center
    items-center
    bg-[#161616]
    absolute
    bottom-0
    left-0
    z-50
  `}
  box-shadow: 0px 2px 8px 0px #0000007A;
`;

export const BottomBarItemButton = styled.button<{ isSelected?: any }>`
  ${tw`
  flex
  flex-col
  text-[#686B72]
  text-[10px]
  font-normal
  items-center
  h-full
  w-full
  pt-[7px]
  pb-[7px]
  `}

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #c10171;
    `}
`;
