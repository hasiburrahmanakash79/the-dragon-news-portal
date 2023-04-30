import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Categories from "../components/Home/Categories/Categories";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import NewsDetails from "../components/Home/NewsDetails/NewsDetails";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../components/Home/LogIn/Login/Login";
import Register from "../components/Home/LogIn/Register/Register";

const router = createBrowserRouter([

  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
    {
      path: "category",
      element: <Main></Main>,
      children:[
        
        {
          path: ":id",
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
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    },
    {
      path: "*",
      element: <PageNotFound></PageNotFound>
    }
  ]);

export default router