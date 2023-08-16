import { css, styled } from "styled-components";
import tw from "twin.macro";
import { imagePath } from "../../../components/helper/media";
import { useAppSelector } from "../../../app/hooks";
import LabelButton from "./labelButton";
import Text from "../../../components/common/text";
import IconButton from "../../../components/common/button/iconButton";
import Icon from "../../../components/common/icons/icon";
import Button from "../../../components/common/button";

const PosterContainer = styled.div`
  ${tw`
    w-full
    max-h-[470px]
    bg-[#686B721A]
    rounded-[20px]
    flex
    flex-row
    items-center
  `}
`;

const LeftContainer = styled.div`
  ${tw`
    h-[430px]
    w-[323px]
    bg-amber-100
    rounded-[20px]
    overflow-hidden
  `}
  box-shadow: 0px 2px 8px 0px #0000007A;
`;

const Image = styled.button<{ path?: any }>`
  ${tw`
    w-full
    h-full
    bg-cover
    bg-no-repeat
    bg-center
  `}

  ${({ path }) =>
    css`
      background-image: url(${path});
    `}
`;

const RightContainer = styled.div`
  ${tw`
    w-full
    h-full
  `}
`;

const RightHeader = styled.div`
  ${tw`
    flex
    flex-row
    justify-between
    items-center
  `}
`;
const DivContainer = styled.div`
  ${tw`
    flex
    flex-row
    items-center
  `}
`;

const ButtonGradientBg = styled.button`
  ${tw`
		w-40
		h-[42px]
    rounded-[13px]
		bg-transparent
    text-white
    font-normal
    text-[16px]
    leading-6
	`}
  box-shadow: 0px 2px 8px 0px #0000007A;
  background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
`;

const DramaTitle = styled.h1`
  ${tw`
      text-white
      font-medium
      text-[38px]
      leading-[55px]
  `}
`;

const Rated = styled.h2`
  ${tw`
		text-[50px]
		leading-none
		font-bold
		bg-clip-text
		text-transparent
    ml-[18px]
	`}
  font-family: "Roboto";
  background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
`;

export default function Poster() {
  const { detail, credits } = useAppSelector((state) => state.detail);
  const data = detail;
  const director = credits.crew.find(
    (item) => item.job === "Director" ?? item.job === "Writer"
  );

  return (
    <PosterContainer>
      <LeftContainer>
        <Image path={imagePath(data?.backdrop_path)} />
      </LeftContainer>
      <RightContainer>
        <RightHeader>
          <DivContainer>
            {data?.genres &&
              data?.genres?.map((item) => <LabelButton name={item?.name} />)}
          </DivContainer>
          <DivContainer>
            <ButtonGradientBg>加入片單</ButtonGradientBg>
          </DivContainer>
        </RightHeader>
        <DivContainer>
          <DramaTitle>{data.name ?? data.title}</DramaTitle>
          <Rated>{Math.round(data?.vote_average * 10) / 10}</Rated>
        </DivContainer>
        <DivContainer>
          <Text
            text={data?.release_date ?? data?.first_air_date}
            index={0}
          ></Text>
          <Text text={data?.spoken_languages[0]?.name} index={1}></Text>
          <Text
            index={2}
            text={
              "0" +
              Math.floor((data?.runtime ?? data?.episode_run_time) / 60) +
              "時" +
              Math.floor((data?.runtime ?? data?.episode_run_time) % 60) +
              "分"
            }
          ></Text>
        </DivContainer>
        <DivContainer>
          <Text
            index={0}
            text={`${director?.job === "Writer" ? "創作者" : "導演"} ${
              director?.name
            }`}
          />
        </DivContainer>
        <DivContainer>
          <Text index={0} text={"劇情介紹"} />
        </DivContainer>
        <DivContainer>
          <Text index={-1} text={data?.overview} />
        </DivContainer>
        <DivContainer>
          <Text index={0} text={"播放平台"} />
        </DivContainer>
        <DivContainer>
          <Button
            onClick={() => {}}
            component={<Icon name={"appletv"} width={36} height={36} />}
            isOpenBottomBar={false}
          />
        </DivContainer>
      </RightContainer>
    </PosterContainer>
  );
}
