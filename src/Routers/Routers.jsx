import {
    createBrowserRouter,
  } from "react-router-dom";
import ManLayout from "../Layout/ManLayout/ManLayout";
import Home from "../pages/Home/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ManLayout />,
      children: [
        {
            path:"/",
            element: <Home/>
        }
      ]
    },
  ]);


  export default router;