import React, { useRef, useState } from "react";
import {
  GridContainer,
  HeaderContainer,
  SliderBar,
  SliderBarDiv,
  SliderContainer,
  SliderThumbnail,
  TypeButton,
} from "../styles/headerStyles";
import Text from "../../../components/common/text";
import { DivContainer } from "../styles/movieStyles";
import { useAppSelector } from "../../../app/hooks";
import { years } from "../lists/lists";
import { Slider } from "@material-tailwind/react";

export default function Header() {
  const grens = useAppSelector((state) => state.movieList.movieGenres);
  const width = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(5);
  return (
    <HeaderContainer>
      <DivContainer>
        <Text text={"類型"} index={0} />
      </DivContainer>
      <GridContainer>
        <TypeButton autoFocus>全部</TypeButton>
        {grens.genres.map((item) => (
          <TypeButton>{item.name}</TypeButton>
        ))}
      </GridContainer>
      <DivContainer>
        <Text text={"年份"} index={0} />
      </DivContainer>
      <GridContainer>
        <TypeButton autoFocus>全部</TypeButton>
        {years.map((item) => (
          <TypeButton>{item}</TypeButton>
        ))}
      </GridContainer>
      <DivContainer>
        <Text text={"評分"} index={0} />
        <Text text={value} index={0} />
      </DivContainer>
      <SliderContainer>
        <SliderBarDiv>
          <SliderBar
            width={value * 10}
            onChange={(e) => setValue(parseInt(e.target.value, 10))}
            min={0}
            max={10}
            step={1}
            defaultValue={5}
            type="range"
          ></SliderBar>
        </SliderBarDiv>
      </SliderContainer>
    </HeaderContainer>
  );
}
