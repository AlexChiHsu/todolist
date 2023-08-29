import { styled } from "styled-components";
import tw from "twin.macro";

export const MyWishListContainer = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-y-scroll
    overflow-x-hidden
  `}

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;
