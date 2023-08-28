import styled from "styled-components";
import tw from "twin.macro";

export const CastDetailContainer = styled.div`
  ${tw`
    w-full
    h-full
    p-6
    sm:pl-0
    sm:pr-0
  `}
`;

export const CastDetailTitleContainer = styled.div`
  ${tw`
    flex
    flex-row
    pl-10
    md:pl-16
    sm:pl-8
  `}
`;

export const CastDetailCreditsContainer = styled.div`
  ${tw`
    w-full
    max-h-[466px]
    overflow-auto
    mt-3.5
    pt-1.5
    sm:flex
    sm:flex-wrap
    sm:items-center
    sm:justify-center
  `}

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 300px);

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;
