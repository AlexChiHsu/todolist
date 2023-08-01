import { ReactComponent as Plus } from "../../../assets/images/plus.svg";
import { ReactComponent as ArrowUpDown } from "../../../assets/images/arrows-up-down.svg";
import { ReactComponent as BarsArrowDown } from "../../../assets/images/bars-arrow-down.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/images/chevron-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/chevron-right.svg";
import { ReactComponent as ArrowUp } from "../../../assets/images/chevron-up.svg";
import { ReactComponent as Dots } from "../../../assets/images/ellipsis-horizontal.svg";
import { ReactComponent as Filter } from "../../../assets/images/funnel.svg";
import { ReactComponent as ListDots } from "../../../assets/images/list-bullet.svg";
import { ReactComponent as Menu } from "../../../assets/images/menu.svg";
import { ReactComponent as RectangleGroup } from "../../../assets/images/rectangle-group.svg";
import { ReactComponent as Sort } from "../../../assets/images/sort.svg";
import { ReactComponent as ArrowDown } from "../../../assets/images/arrow-down.svg";
import { ReactComponent as User } from "../../../assets/images/user.svg";

interface IIconsProp {
  name:
    | "sort"
    | "arrowDown"
    | "plus"
    | "barsArrowDown"
    | "arrowLeft"
    | "arrowRight"
    | "arrowUp"
    | "dots"
    | "filter"
    | "listDots"
    | "menu"
    | "rectangleGroup"
    | "user";
  stroke?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export default function Icon(props: IIconsProp) {
  const { name, stroke, width, height, fill } = props;
  const fillColor = fill ?? "none";
  const strokeColor = stroke ?? "none";

  switch (name) {
    case "sort":
      return (
        <Sort
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "arrowDown":
      return (
        <ArrowDown
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "plus":
      return (
        <Plus
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "barsArrowDown":
      return (
        <BarsArrowDown
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "arrowLeft":
      return (
        <ArrowLeft
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "arrowRight":
      return (
        <ArrowRight
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "arrowUp":
      return (
        <ArrowUp
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "filter":
      return (
        <Filter
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "listDots":
      return (
        <ListDots
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "menu":
      return (
        <Menu
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "rectangleGroup":
      return (
        <RectangleGroup
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "user":
      return (
        <User
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    default:
      return <></>;
  }
}
