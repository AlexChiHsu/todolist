import { css, styled } from "styled-components";
import tw from "twin.macro";

export const CollectionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    gap-4
    sm:pl-4
    sm:pr-4
    pl-[84px]
    pr-[84px]
    pt-12
    overflow-y-scroll
    overflow-x-hidden
    sm:flex
    sm:flex-wrap
    sm:items-center
    sm:justify-center
    sm:pb-32
  `}
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 360px);

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;

export const CollectionCardContainer = styled.div<{ path?: any }>`
  ${tw`
    sm:w-[327px]
    sm:h-[161px]
    w-[360px]
    h-[180px]
    rounded-lg
    pr-2
    pb-1
    overflow-hidden
    bg-no-repeat
    bg-cover
    `}
  box-shadow: 0px 2px 8px 0px #0000007A;

  background-image: linear-gradient(
    180deg,
    rgba(22, 22, 22, 0.98) -71.5%,
    rgba(22, 22, 22, 0) 46.55%,
    rgba(22, 22, 22, 0.98) 100%
  );
  ${({ path }) =>
    css`
      background-image: linear-gradient(
          180deg,
          rgba(22, 22, 22, 0.98) -71.5%,
          rgba(22, 22, 22, 0) 46.55%,
          rgba(22, 22, 22, 0.98) 100%
        ),
        url(${path});
    `}
`;

export const CollectionCardButton = styled.button`
  ${tw`
    w-full
    h-full
    text-white
    justify-end
    items-end
    flex
  `}
`;

export const CollectionPageContainer = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-y-scroll
    overflow-x-hidden
    sm:pl-4
    sm:pr-4
    pl-32
    pr-32
    pt-10
    pb-10
  `}

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;
