import plus from "../../../assets/images/plus.png";
import arrowUpDown from "../../../assets/images/arrows-up-down.png";
import barsArrowDown from "../../../assets/images/bars-arrow-down.png";
import arrowLeft from "../../../assets/images/chevron-left.png";
import arrowRight from "../../../assets/images/chevron-right.png";
import arrowUp from "../../../assets/images/chevron-up.png";
import dots from "../../../assets/images/ellipsis-horizontal.png";
import filter from "../../../assets/images/funnel.png";
import listDots from "../../../assets/images/list-bullet.png";
import menu from "../../../assets/images/menu.png";
import rectangleGroup from "../../../assets/images/rectangle-group.png";
import { ReactComponent as Sort } from "../../../assets/images/sort.svg";
import { ReactComponent as ArrowDown } from "../../../assets/images/arrow-down.svg";
import user from "../../../assets/images/user.png";

interface IIconsProp {
  name: "sort" | "arrowDown";
  stroke?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const Icon = (props: IIconsProp) => {
  const { name, stroke, width, height, fill } = props;

  switch (name) {
    case "sort":
      return <Sort fill={fill} stroke={stroke} width={width} height={height} />;
    case "arrowDown":
      return (
        <ArrowDown fill={fill} stroke={stroke} width={width} height={height} />
      );
  }
};
