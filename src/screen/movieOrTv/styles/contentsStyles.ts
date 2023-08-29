import styled from "styled-components";
import tw from "twin.macro";

export const ContentsContainer = styled.div`
  ${tw`
    w-full
    h-auto
    pl-4
    pr-4
    pt-9
    text-white
    mb-3.5
  `}

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 152px);
`;

export const LoadMoreContainer = styled.div`
  ${tw`
    w-full
    h-auto
    flex
    items-center
    justify-center
    pb-10
    sm:pb-20
  `}
`;

export const LoadMoreButton = styled.button`
  ${tw`
      w-[300px]
      h-[52px]
      rounded-[13px]
      text-white
      font-normal
      text-lg
  `}
  background-image: linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
  box-shadow: 0px 2px 8px 0px #0000007a;
`;
