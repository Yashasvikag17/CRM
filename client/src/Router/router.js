import App from "../App";
import Content from "../Section/Content";
import Navbar from "../Section/Navbar";
import Customer from "../Component/Customer";
import DashBoard from "../Component/DashBoard";
import Employee from "../Component/Employee";
import Invoice from "../Component/Invoice";
import Login from "../Component/Login";
import Logout from "../Component/Logout";
import Payment from "../Component/Payment";
import { createBrowserRouter } from "react-router-dom";
import Sign_up from "../Component/Sign_up";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
           
       {
        path:"/Dashboard",
        element:<DashBoard/>
       },
       {
        path:"/employee",
        element:<Employee/>
       },
       {
        path:"/customer",
        element:<Customer/>
       },
       {
        path:"/invoice",
        element:<Invoice/>
       },
       {
        path:"/payment",
        element:<Payment/>
       },
      
        ]
    },
    {
        path:"/login",
        element:<Login/>
       },
       {
        path:"/logout",
        element:<Logout/>
       },
       {
        path:"/sign-up",
        element:<Sign_up/>
       }
]); 
export default router;