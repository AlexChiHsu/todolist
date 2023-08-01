import React from "react";
import styled from "styled-components";

export interface IDividingProp {
  dividing: number | string;
  lineLength: number | string;
  direction?: "horizontal" | "vertical";
}

const HorizontalDividing = styled.div<IDividingProp>`
  display: flex;
  width: ${({ lineLength }) =>
    typeof lineLength === "string" ? lineLength : `${lineLength}px`};
  margin-top: ${({ dividing }) =>
    typeof dividing === "string" ? dividing : `${dividing}px`};
  margin-bottom: ${({ dividing }) =>
    typeof dividing === "string" ? dividing : `${dividing}px`};
  border-top: 0.5px solid black;
  opacity: 0.3;
`;

const VerticalDividing = styled.div<IDividingProp>`
  display: flex;
  height: ${({ lineLength }) =>
    typeof lineLength === "string" ? lineLength : `${lineLength}px`};
  margin-left: ${({ dividing }) =>
    typeof dividing === "string" ? dividing : `${dividing}px`};
  margin-right: ${({ dividing }) =>
    typeof dividing === "string" ? dividing : `${dividing}px`};
  border-right: 0.5px solid black;
  opacity: 0.3;
`;

function Dividing(props: IDividingProp) {
  const { direction } = props;

  return (
    <>
      {direction === "horizontal" && <HorizontalDividing {...props} />}
      {direction === "vertical" && <VerticalDividing {...props} />}
    </>
  );
}
export default Dividing;
