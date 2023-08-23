import { useState } from "react";
import {
  GridContainer,
  HeaderContainer,
  SearchButton,
  SearchButtonContainer,
  SliderBar,
  SliderBarDiv,
  SliderContainer,
  TypeButton,
} from "../styles/headerStyles";
import Text from "../../../components/common/text";
import { DivContainer } from "../styles/movieStyles";
import { useAppSelector } from "../../../app/hooks";
import { years } from "../lists/lists";

export default function Header() {
  const grens = useAppSelector((state) => state.movieList.movieGenres);
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
        <Text
          text={"0"}
          index={-1}
          css={{
            marginLeft: 28,
          }}
        />
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
        <Text text={"10"} index={-2} css={{ marginLeft: 0 }} />
        <SearchButtonContainer>
          <SearchButton>搜尋</SearchButton>
        </SearchButtonContainer>
      </DivContainer>
    </HeaderContainer>
  );
}
