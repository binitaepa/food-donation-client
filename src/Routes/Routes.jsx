import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layout/Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Registration from "../Layout/Pages/Registration/Registration";
import Login from "../Layout/Pages/Login/Login";
import AvailableFood from "../Layout/Pages/AvailableFood/AvailableFood";
import FoodDetails from "../Layout/Pages/Feature/FoodDetail/FoodDetails";
import PrivateRoutes from "./PrivateRoutes";
import AddAFood from "../Layout/Pages/AddAFood/AddAFood";
import ManageMyFood from "../Layout/Pages/ManageMyFood/ManageMyFood";


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
    element:<AvailableFood></AvailableFood>,
    loader:()=>fetch('https://food-sharing-website-server.vercel.app/collection')
 
   },
   {
    path:'/addfood',
    element:<AddAFood></AddAFood>
   },
   {
    path:'/fooddetail/:id',
    element:<PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>,
    loader:()=>fetch('https://food-sharing-website-server.vercel.app/feature')
   },
   {
    path:'/managemyfood',
    element:<PrivateRoutes><ManageMyFood></ManageMyFood></PrivateRoutes>,
    
   }
      ]
    },
  ]);

  export default router;