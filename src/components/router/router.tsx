import { createHashRouter } from "react-router-dom";
import App from "../../App";
import Message from "../../screen/message";
import Detail from "../../screen/detail";
import HomeScreen from "../../screen/home";
import CastDetail from "../../screen/castDetail";
import Test from "../../screen/test";
import Movie from "../../screen/movieOrTv";
import Theme from "../../screen/collection";
import CollectionPage from "../../screen/collection/components/collectionPage";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Message />,
      children: [
        {
          path: "/",
          element: <HomeScreen />,
        },
        {
          path: "/detail/:type/:detailId",
          element: <Detail />,
        },
        {
          path: "/person/combined-credits",
          element: <CastDetail />,
        },
        {
          path: "/test",
          element: <Test />,
        },
        {
          path: "/:type",
          element: <Movie />,
        },
        {
          path: "/collection",
          element: <Theme />,
        },
        {
          path: "/movie/:id",
          element: <CollectionPage />,
        },
      ],
    },
  ],
  { basename: "/" }
);
