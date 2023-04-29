import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Categories from "../components/Home/Categories/Categories";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import NewsDetails from "../components/Home/NewsDetails/NewsDetails";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Categories></Categories>,
          loader: () => fetch('http://localhost:5000/news')
        },
        {
          path: "/category/:id",
          element: <Categories></Categories>,
          loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path: "news",
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ":id",
          element: <NewsDetails></NewsDetails>,
          loader: (params) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    },
    {
      path: "*",
      element: <PageNotFound></PageNotFound>
    }
  ]);

export default router