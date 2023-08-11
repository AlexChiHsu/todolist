import MovieListCard from "../../components/common/card/movieListCard";
import { css, styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../../components/common/icons/icon";
import { MovieListProp } from "../../types/movieList";

const MovieListContainer = styled.div<{ isShowBg?: boolean }>`
  ${tw`
    overflow-hidden
    ml-10
    mr-10
    pl-[26px]
    pr-[26px]
    rounded-[20px]
    gap-3.5
    bg-[#686B721A]
    mt-5
    mb-5
  `}

  ${({ isShowBg }) =>
    isShowBg &&
    css`
      background-color: transparent;
    `}
`;

const ListContainer = styled.div`
  ${tw`
    w-full
    items-center
    flex
    flex-row
    justify-center
    overflow-hidden
    gap-3.5
    mb-10
  `}
`;

const IconBackground = styled.button`
  ${tw`
    h-[50px]
    flex
    items-center
    justify-center
    rounded-[13px]
    pr-0.5
    bg-[#686B721A]
  `}
`;

const ScrollContainer = styled.div`
  ${tw`
    w-full
    overflow-hidden
    box-border
    h-[200px]
    flex
    items-center
    mr-2.5
    ml-2.5
  `}
`;

const ScrollList = styled.div`
  ${tw`
    flex
    items-center
    h-[200px]
    overflow-x-scroll
    overflow-y-hidden
    whitespace-nowrap
    pt-2.5
    pb-2.5
    pr-2.5
    pl-2.5
  `}
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;

const ListTitle = styled.div`
  ${tw`
    w-full
    text-white
    font-normal
    text-xl
    text-start
    truncate
    items-start
    leading-[30px]
    mt-10
    mb-3.5
    pl-2.5
    ml-[63px]
    pointer-events-none
  `}
`;

interface IMovieListProp {
  listTitle: string;
  data: MovieListProp;
  isShowBg: boolean;
}

export default function MovieList(props: IMovieListProp) {
  const { listTitle, data, isShowBg } = props;

  return (
    <MovieListContainer isShowBg={isShowBg}>
      <ListTitle>{listTitle}</ListTitle>
      <ListContainer>
        <IconBackground>
          <Icon name={"arrowLeft"} fill="white" width={48} height={27} />
        </IconBackground>
        <ScrollContainer>
          <ScrollList>
            {data?.results.map((item) => (
              <MovieListCard {...item} />
            ))}
          </ScrollList>
        </ScrollContainer>
        <IconBackground>
          <Icon name={"arrowRight"} fill="white" width={48} height={27} />
        </IconBackground>
      </ListContainer>
    </MovieListContainer>
  );
}
