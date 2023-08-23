import styled from "styled-components";
import tw from "twin.macro";
import WebHeader from "./components/header/webHeader";
import { Outlet, useNavigate } from "react-router-dom";
import BottomBar from "./components/header/components/bottomBar";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "./components/common/screen";
import { useEffect, useState } from "react";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    pt-14
    overflow-hidden
  `}
`;

function App() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const [isSelected, setIsSelected] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    switch (isSelected) {
      case "電影":
        navigate("/movie");
        break;
      case "home":
        navigate("/");
        setIsSelected("");
        break;
    }
  }, [isSelected, navigate]);
  return (
    <AppContainer>
      <WebHeader isSelected={isSelected} setIsSelected={setIsSelected} />
      <Outlet />
      {isMobile && <BottomBar />}
    </AppContainer>
  );
}

export default App;
