import { createHashRouter } from "react-router-dom";
import App from "../../App";
import Message from "../../screen/message";
import Detail from "../../screen/detail";
import HomeScreen from "../../screen/home";

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
      ],
    },
  ],
  { basename: "/" }
);
