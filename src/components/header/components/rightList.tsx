import { useState } from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Thumbnail from "./thumbnail";
import Button from "../../common/button";
import Label from "./label";
import { buttonLists } from "../lists/buttonLists";

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

interface RightListProp {
  isSelected: string;
  setIsSelected: Function;
  openLogin: boolean;
  setOpenLogin: Function;
}

export default function RightList(props: RightListProp) {
  const { isSelected, setIsSelected, setOpenLogin, openLogin } = props;
  const [isShowLabel, setIsShowLabel] = useState(false);

  const clickThumbnail = (str: string) => {
    setIsShowLabel(true);
    setIsSelected(str);
    setOpenLogin(!openLogin);
  };

  const onClick = (str: string) => {
    setIsSelected(str);
    setIsShowLabel(false);
  };
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
              component={<Thumbnail />}
            />
          </ButtonItem>
        </ButtonListContainer>
      </RightListContainer>
      {isShowLabel && (
        <Label
          setIsShowLabel={setIsShowLabel}
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
        />
      )}
    </>
  );
}
