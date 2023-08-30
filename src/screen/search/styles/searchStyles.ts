import { css, styled } from "styled-components";
import tw from "twin.macro";

export const SearchListContainer = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-y-scroll
    overflow-x-hidden
    pl-10
    pr-10
    mt-6
    pb-40
  `}
  @media (max-width: 720px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;

export const SearchHeaderContainer = styled.div`
  ${tw`
    w-full
    h-[68px]
    rounded-[20px]
    bg-[#686B721A]
    flex
    items-center
    justify-start
    pl-[104px]
  `}

  @media (max-width: 720px) {
    padding-left: 16px;
    padding-right: 16px;
    background-color: transparent;
    justify-content: space-between;
  }
`;

export const HeaderButton = styled.button<{ isSelected?: boolean }>`
  ${tw`
    w-[102px]
    h-[32px]
    rounded
    bg-[#161616]
    mr-2.5
  `}
  @media (max-width: 720px) {
    margin-right: 0px;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
    `}
`;

export const ContentContainer = styled.div<{ autoFillWidth?: any }>`
  ${tw`
    w-full
    h-auto
    pl-[100px]
    mt-[42px]
    gap-4
  `}

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(
    auto-fill,
    ${({ autoFillWidth }) => autoFillWidth}px
  );
  @media (max-width: 720px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const SearchFail = styled.h3`
  ${tw`
  `}
`;
