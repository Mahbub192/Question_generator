import { createBrowserRouter } from "react-router-dom";
import ManLayout from "../Layout/ManLayout/ManLayout";
import Home from "../pages/Home/Home/Home";
import TrueOrFalse from "../pages/TrueOrFalse/TrueOrFalse";
import TypeAnswer from "../pages/TypeAnswer/TypeAnswer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ManLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "quiz",
        element: <Home />,
      },
      {
        path: 'trueOrFalse',
        element: <TrueOrFalse />
      },
      {
        path: 'typeAnswer',
        element: <TypeAnswer/>
      },
    ],
  },
]);

export default router;
