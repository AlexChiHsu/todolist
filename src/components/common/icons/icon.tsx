import { ReactComponent as Plus } from "../../../assets/images/plus.svg";
import { ReactComponent as ArrowUpDown } from "../../../assets/images/arrows-up-down.svg";
import { ReactComponent as BarsArrowDown } from "../../../assets/images/bars-arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../../assets/images/chevron-up.svg";
import { ReactComponent as Dots } from "../../../assets/images/ellipsis-horizontal.svg";
import { ReactComponent as Filter } from "../../../assets/images/funnel.svg";
import { ReactComponent as ListDots } from "../../../assets/images/list-bullet.svg";
import { ReactComponent as Menu } from "../../../assets/images/menu.svg";
import { ReactComponent as RectangleGroup } from "../../../assets/images/rectangle-group.svg";
import { ReactComponent as Sort } from "../../../assets/images/sort.svg";
import { ReactComponent as ArrowDown } from "../../../assets/images/arrow-down.svg";
import { ReactComponent as User } from "../../../assets/images/user.svg";
import { ReactComponent as ArrowRightLeft } from "../../../assets/images/arrows-right-left.svg";
import { ReactComponent as Logo } from "../../../assets/images/w-logo.svg";
import { ReactComponent as Search } from "../../../assets/images/search.svg";
import { ReactComponent as Logout } from "../../../assets/images/logout.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/arrow-right.svg";
import { ReactComponent as Netflix } from "../../../assets/images/netflix.svg";
import { ReactComponent as Appletv } from "../../../assets/images/appletv.svg";
import { ReactComponent as Iqi } from "../../../assets/images/iqi.svg";
import { ReactComponent as NonPerson } from "../../../assets/images/non-person.svg";
import { ReactComponent as Star } from "../../../assets/images/star.svg";
import { ReactComponent as Movie } from "../../../assets/images/movie.svg";
import { ReactComponent as Tv } from "../../../assets/images/tv.svg";
import { ReactComponent as Collection } from "../../../assets/images/collection.svg";
import { ReactComponent as Favorite } from "../../../assets/images/favorite.svg";
import { ReactComponent as Google } from "../../../assets/images/google.svg";

interface IIconsProp {
  name:
    | "sort"
    | "arrowDown"
    | "plus"
    | "arrowUpDown"
    | "barsArrowDown"
    | "arrowLeft"
    | "arrowRight"
    | "arrowUp"
    | "dots"
    | "filter"
    | "listDots"
    | "menu"
    | "rectangleGroup"
    | "arrowRightLeft"
    | "logo"
    | "search"
    | "logout"
    | "netflix"
    | "iqi"
    | "appletv"
    | "non-person"
    | "star"
    | "movie"
    | "tv"
    | "collection"
    | "favorite"
    | "google"
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
    case "arrowUpDown":
      return (
        <ArrowUpDown
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "dots":
      return (
        <Dots
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
    case "arrowRightLeft":
      return (
        <ArrowRightLeft
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "logo":
      return (
        <Logo
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "search":
      return (
        <Search
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "logout":
      return (
        <Logout
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "appletv":
      return (
        <Appletv
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "iqi":
      return (
        <Iqi
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "netflix":
      return (
        <Netflix
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "non-person":
      return (
        <NonPerson
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "star":
      return (
        <Star
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "collection":
      return (
        <Collection
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "favorite":
      return (
        <Favorite
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "movie":
      return (
        <Movie
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "tv":
      return (
        <Tv
          fill={fillColor}
          stroke={strokeColor}
          width={width}
          height={height}
        />
      );
    case "google":
      return (
        <Google
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
