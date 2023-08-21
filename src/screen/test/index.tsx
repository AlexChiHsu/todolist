import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/common/screen";

export default function Test() {
  const arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const width = useRef<null | HTMLDivElement>(null);
  const desktop = useMediaQuery({ minWidth: SCREENS.lg });
  return (
    <Container>
      <CardContainer ref={width}>
        {arr.map((item) => (
          <Card>
            {width?.current?.offsetWidth} {JSON.stringify(desktop)}
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  ${tw`
    w-full
    h-full
    bg-pink-200
    sm:pl-[104px]
    sm:pr-[104px]
    sm:pt-[78px]
    sm:pb-[78px]
    pl-5
    pr-5
    pt-2.5
    pb-2.5
  `}
`;

const CardContainer = styled.div`
  ${tw`
    min-h-full
    w-full
    h-auto
    flex
    flex-row
    flex-wrap
    items-center
    justify-between
    bg-green-300
    m-auto
  `}
`;

const Card = styled.div<{ width?: any }>`
  ${tw`
    bg-blue-500
    h-auto
    items-stretch
    sm:w-[182px]
    w-[123px]
    m-2
  `}
`;
