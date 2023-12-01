import styled from "styled-components";
import tw from "twin.macro";
import WebHeader from "./components/header/webHeader";
import { Outlet, useNavigate } from "react-router-dom";
import BottomBar from "./components/header/components/bottomBar";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "./components/common/screen";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchGenreList } from "./actions/movieListActions";
import { setUserWishList } from "./reducers/user/userSlice";

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
  const [openLogin, setOpenLogin] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const wishItem = useAppSelector((state) => state.user.userWishItem);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setUserWishList(wishItem));
  }, [dispatch, wishItem]);

  useEffect(() => {
    switch (isSelected) {
      case "movie":
        navigate("/movie");
        dispatch(fetchGenreList("movie"));
        break;
      case "tv":
        navigate("/tv");
        dispatch(fetchGenreList("tv"));
        break;
      case "collection":
        navigate("/collection");
        break;
      case "myWishList":
        navigate("/myWishList");
        break;
      case "home":
        navigate("/");
        setIsSelected("");
        setSearchWord("");
        break;
    }
  }, [dispatch, isSelected, navigate]);

  return (
    <AppContainer>
      <WebHeader
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
      <Outlet />
      {isMobile && (
        <BottomBar
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
        />
      )}
    </AppContainer>
  );
}

export default App;
