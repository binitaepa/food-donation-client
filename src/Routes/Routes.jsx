import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Registration from "../Layout/Pages/Registration/Registration";
import Login from "../Layout/Pages/Login/Login";
import AvailableFood from "../Layout/Pages/AvailableFood/AvailableFood";
import FoodDetails from "../Layout/Pages/Feature/FoodDetail/FoodDetails";
import PrivateRoutes from "./PrivateRoutes";


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
    },
   {
    path:'/availablefood',
    element:<AvailableFood></AvailableFood>
 
   },
   {
    path:'/fooddetail/:id',
    element:<PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>,
    loader:()=>fetch('http://localhost:5000/feature')
   }
      ]
    },
  ]);

  export default router;