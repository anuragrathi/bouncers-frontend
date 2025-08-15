import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OauthSuccess from "../Components/oauthSuccess";
import App from "../App";
import Home from "../pages/Home";

import Register from "../pages/AuthPages/Register";
import Login from "../pages/AuthPages/Login";

import ProfilePage from "../pages/Profile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
     
      {
        path: "/sign-up",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
     
      {
        path: "/oauth-success",
        element: <OauthSuccess/>
      },
      
      {
        path: "/profile",
        element: <ProfilePage/>
      },
    ]
  }
]);

export default router;