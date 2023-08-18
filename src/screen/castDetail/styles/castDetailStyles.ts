import styled from "styled-components";
import tw from "twin.macro";

export const CastDetailContainer = styled.div`
  ${tw`
    w-full
    h-full
    p-10
  `}
`;

export const CastDetailTitleContainer = styled.div`
  ${tw`
    flex
    flex-row
  `}
`;

export const CastDetailCreditsContainer = styled.div`
  ${tw`
    w-full
    max-h-[466px]
    overflow-auto
    flex
    flex-row
    flex-wrap
    mt-3.5
    pt-1.5
  `}

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;
