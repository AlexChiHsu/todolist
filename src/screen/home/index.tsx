import { styled } from "styled-components";
import tw from "twin.macro";
import WebHeader from "../../components/header/webHeader";
import MovieList from "../movieList";

const HomeContainer = styled.div`
  ${tw`
    flex
    flex-row
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;
function HomeScreen() {
  return (
    <HomeContainer>
      <WebHeader />
      <MovieList />
    </HomeContainer>
  );
}

export default HomeScreen;
