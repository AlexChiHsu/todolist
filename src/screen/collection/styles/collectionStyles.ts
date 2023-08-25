import { css, styled } from "styled-components";
import tw from "twin.macro";

export const CollectionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    grid
    auto-cols-auto
  `}
`;

export const CollectionCardContainer = styled.div<{ path?: any }>`
  ${tw`
    w-[360px]
    h-[180px]
    rounded-lg
    pr-2
    pb-1
    overflow-hidden
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
