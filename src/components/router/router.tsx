import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Message from "../../screen/message";
import Detail from "../../screen/detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Message />,
  },
  {
    path: "/detail/:detailId",
    element: <Detail />,
    errorElement: <Message />,
  },
]);
