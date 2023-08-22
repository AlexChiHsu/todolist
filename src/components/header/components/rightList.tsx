import { useEffect, useState } from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Thumbnail from "./thumbnail";
import Button from "../../common/button";
import Label from "./label";
import { buttonLists } from "../lists/buttonLists";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { fetchMovieGenreList } from "../../../actions/movieListActions";

const RightListContainer = styled.div`
  ${tw`
    flex
    flex-row
    h-full
    items-center
  `}
`;

const ButtonListContainer = styled.ul`
  ${tw`
    flex
    w-full
    h-full
    list-none
  `}
`;

const ButtonItem = styled.li`
  ${tw`
    h-full
    flex
    items-end
    relative
  `}
`;

export default function RightList() {
  const [isLogin, setIsLogin] = useState(true);
  const [isShowLabel, setIsShowLabel] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickThumbnail = (str: string) => {
    if (isLogin) {
      setIsShowLabel(true);
      setIsSelected(str);
    }
  };

  const onClick = (str: string) => {
    setIsSelected(str);
    setIsShowLabel(false);
  };

  useEffect(() => {
    switch (isSelected) {
      case "電影":
        navigate("/movie");
        dispatch(fetchMovieGenreList());
        break;
      default:
        navigate("/");
        break;
    }
  }, [isSelected, navigate]);
  return (
    <>
      <RightListContainer>
        <ButtonListContainer>
          <ButtonItem>
            {buttonLists.map((item) => (
              <Button
                isOpenBottomBar={true}
                isFill={false}
                onClick={() => onClick(item.title)}
                text={item.title}
                isSelected={isSelected === item.title}
              />
            ))}
            <Button
              isOpenBottomBar={false}
              isFill={false}
              onClick={() => clickThumbnail("user")}
              isSelected={isSelected === "user"}
              component={<Thumbnail isLogin={isLogin} />}
            />
          </ButtonItem>
        </ButtonListContainer>
      </RightListContainer>
      {isShowLabel && <Label />}
    </>
  );
}
