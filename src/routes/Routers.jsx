import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <h1>akash</h1>
        }
      ]
    },
  ]);

export default router