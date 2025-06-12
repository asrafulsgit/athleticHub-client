import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Explore_gardener from "../pages/Explore_gardener";
import Browse_tips from "../pages/Browse_tips";
import Login_signIn from "../pages/Login_signIn";
import My_tips from "../pages/My_tips";
import Share_garden_tip from "../pages/Share_garden_tip";
import NotFoundPage from "../components/NotFoundPage";
import Forget_password from "../components/Forget_password";
import Auth_middleware from "../middlewares/Auth_middleware";
import UnAuth_middleware from "../middlewares/UnAuth_middleware";
import Tips_details from "../pages/Tips_details";
import Update_tips from "../pages/Update_tips";
import Gardener_profile from "../components/Gardener_profile";

const Router =createBrowserRouter([
    {
        path : '/',
        Component : App,
        children :[
            { 
               index : true,
               Component : Home,
            },
            { 
                path : 'explore-gardeners',
                element :  <Explore_gardener /> 
            },
            { 
                path : 'browse-tips',
                element : <Browse_tips /> 
            },
            { 
                path : 'tip-details/:id',
                element : <Tips_details />,
                errorElement : <NotFoundPage />
            },
            { 
                path : 'share-garden-tip',
                element : <Auth_middleware><Share_garden_tip /></Auth_middleware> 
            },
            { 
                path : 'my-tips',
                element : <Auth_middleware><My_tips /></Auth_middleware> 
            },
            { 
                path : 'gardener/:id',
                element : <Auth_middleware><Gardener_profile /></Auth_middleware>,
                errorElement : <NotFoundPage /> 
            },
            { 
                path : 'update-tips/:id',
                element : <Auth_middleware><Update_tips /></Auth_middleware>,
                errorElement : <NotFoundPage />
            },
            { 
                path : 'login-signin',
                element : <UnAuth_middleware><Login_signIn />  </UnAuth_middleware> 
            },
            { 
                path : 'forget-password',
                element : <UnAuth_middleware><Forget_password />  </UnAuth_middleware> 
            }
        ]
    },
    {
        path: '/*',
        Component : NotFoundPage
    }
]) 
export default Router;