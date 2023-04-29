import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home/Home";
import Categories from "../components/Home/Categories/Categories";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import NewsDetails from "../components/Home/NewsDetails/NewsDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/category/:id",
          element: <Categories></Categories>
        }
      ]
    },
    {
      path: "news",
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ":id",
          element: <NewsDetails></NewsDetails>
        }
      ]
    }
  ]);

export default router