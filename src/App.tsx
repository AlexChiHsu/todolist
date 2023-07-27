import styled from "styled-components";
import tw from "twin.macro";
import HomeScreen from "./screen/home";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    <AppContainer>
      <HomeScreen />
    </AppContainer>
  );
}

export default App;
