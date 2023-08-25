import { css, styled } from "styled-components";
import tw from "twin.macro";

export const SubHeaderContainer = styled.div`
  ${tw`
    w-full
    max-h-[68px]
    bg-[#686B721A]
    pt-[18px]
    pb-[18px]
    pl-4
    pr-4
    mt-2
  `}
`;

export const ListsButton = styled.button<{ focus?: boolean }>`
  ${tw`
      bg-[#161616]
      w-[102px]
      h-[32px]
      rounded
      text-white
      font-normal
      text-sm
      mr-2.5
  `}
  box-shadow: 0px 2px 8px 0px #0000007A;
  ${({ focus }) =>
    focus &&
    css`
      background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
    `}
`;
