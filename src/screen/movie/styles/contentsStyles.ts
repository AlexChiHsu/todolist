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
  `}

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 152px);
`;
