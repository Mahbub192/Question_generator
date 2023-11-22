import { createBrowserRouter } from "react-router-dom";
import ManLayout from "../Layout/ManLayout/ManLayout";
import Home from "../pages/Home/Home/Home";
import TrueOrFalse from "../pages/TrueOrFalse/TrueOrFalse";
import TypeAnswer from "../pages/TypeAnswer/TypeAnswer";
import Puzzle from "../pages/Puzzle/Puzzle";
import GroupLayout from "../Layout/GroupLayout/GroupLayout";


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
      {
        path: 'puzzle',
        element: <Puzzle />
      },
      {
        path: 'poll',
        element: <Home />
      },
    ],
  },
  {
    path: '/group',
    element: <GroupLayout/>,
  }
]);

export default router;
