import { createBrowserRouter } from "react-router-dom";
import GroupLayout from "../Layout/GroupLayout/GroupLayout";
import ManLayout from "../Layout/ManLayout/ManLayout";
import DropPoint from "../pages/DropPoint/DropPoint";
import Home from "../pages/Home/Home/Home";
import OpenEnded from "../pages/OpenEnded/OpenEnded";
import Puzzle from "../pages/Puzzle/Puzzle";
import Slider from "../pages/Slider/Slider";
import TrueOrFalse from "../pages/TrueOrFalse/TrueOrFalse";
import TypeAnswer from "../pages/TypeAnswer/TypeAnswer";
import WordCloud from "../pages/WordCloud/WordCloud";
import Preview from "../pages/Preview/Preview";

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
        path: "trueOrFalse",
        element: <TrueOrFalse />,
      },
      {
        path: "typeAnswer",
        element: <TypeAnswer />,
      },
      {
        path: "puzzle",
        element: <Puzzle />,
      },
      {
        path: "poll",
        element: <Home />,
      },
      {
        path: "dropPoint",
        element: <DropPoint />,
      },
      {
        path: "wordCloud",
        element: <WordCloud />,
      },
      {
        path: "openEnded",
        element: <OpenEnded />,
      },
      {
        path: "slide",
        element: <Slider />,
      },
    ],
  },
  {
    path: "/group",
    element: <GroupLayout />,
  },
  {
    path:"preview",
    element:<Preview />
  }
]);

export default router;
