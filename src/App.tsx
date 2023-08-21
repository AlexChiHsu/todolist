import styled from "styled-components";
import tw from "twin.macro";
import WebHeader from "./components/header/webHeader";
import { Outlet } from "react-router-dom";
import BottomBar from "./components/header/components/bottomBar";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "./components/common/screen";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    pt-14
  `}
`;

function App() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
    <AppContainer>
      <WebHeader />
      <Outlet />
      {isMobile && <BottomBar />}
    </AppContainer>
  );
}

export default App;
