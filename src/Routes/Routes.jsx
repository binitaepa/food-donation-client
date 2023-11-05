import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Registration from "../Layout/Pages/Registration/Registration";
import Login from "../Layout/Pages/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
    element:<Home></Home>},
    {
        path:'/registration',
        element:<Registration></Registration>
    },
    {
        path:'/login',
        element:<Login></Login>
    }
 
      ]
    },
  ]);

  export default router;