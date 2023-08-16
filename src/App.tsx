import styled from "styled-components";
import tw from "twin.macro";
import WebHeader from "./components/header/webHeader";
import { Outlet } from "react-router-dom";

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
  return (
    <AppContainer>
      <WebHeader />
      <Outlet />
    </AppContainer>
  );
}

export default App;
