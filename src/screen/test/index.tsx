import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/common/screen";
import { FixedSizeList as Grid } from "react-window";
export default function Test() {
  const arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 50, 60, 1111, 151, 156, 16, 80, 45,
    456, 456, 789, 78,
  ];
  const width = useRef<null | HTMLDivElement>(null);
  const desktop = useMediaQuery({ minWidth: SCREENS.lg });

  const Cell = ({
    columnIndex,
    rowIndex,
  }: {
    columnIndex: number;
    rowIndex: number;
  }) => (
    <Card>
      row {rowIndex}, col {columnIndex}
    </Card>
  );

  return (
    <Container>
      <CardContainer ref={width}>
        {/* {arr.map((item) => (
          <Card>
            {width?.current?.offsetWidth} {JSON.stringify(desktop)} &nbsp;
            {arr.length}&nbsp;
          </Card>
        ))} */}
        <Grid
          columnCount={7}
          columnWidth={182}
          height={220}
          rowCount={1000}
          rowHeight={220}
          width={300}
          itemData={arr}
          itemSize={50}
        >
          {Cell}
        </Grid>
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
    overflow-hidden
  `}
`;

const CardContainer = styled.div`
  ${tw`
    max-h-full
    w-full
    h-auto
    flex
    flex-row
    flex-wrap
    items-center
    justify-between
    bg-green-300
    m-auto
    overflow-auto
  `}
`;

const Card = styled.div<{ width?: any }>`
  ${tw`
    bg-blue-500
    h-[220px]
    items-stretch
    sm:w-[182px]
    w-[123px]
    m-2
    transition-opacity
    opacity-100
    ease-linear
    duration-300
  `}
`;
