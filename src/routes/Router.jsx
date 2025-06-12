import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";

const Router =createBrowserRouter([
    {
        path : '/',
        Component : App,
        children :[
            { 
               index : true,
               Component : Landing ,
            },
    //         { 
    //             path : 'explore-gardeners',
    //             element :  <Explore_gardener /> 
    //         },
    //         { 
    //             path : 'browse-tips',
    //             element : <Browse_tips /> 
    //         },
    //         { 
    //             path : 'tip-details/:id',
    //             element : <Tips_details />,
    //             errorElement : <NotFoundPage />
    //         },
    //         { 
    //             path : 'share-garden-tip',
    //             element : <Auth_middleware><Share_garden_tip /></Auth_middleware> 
    //         },
    //         { 
    //             path : 'my-tips',
    //             element : <Auth_middleware><My_tips /></Auth_middleware> 
    //         },
    //         { 
    //             path : 'gardener/:id',
    //             element : <Auth_middleware><Gardener_profile /></Auth_middleware>,
    //             errorElement : <NotFoundPage /> 
    //         },
    //         { 
    //             path : 'update-tips/:id',
    //             element : <Auth_middleware><Update_tips /></Auth_middleware>,
    //             errorElement : <NotFoundPage />
    //         },
    //         { 
    //             path : 'login-signin',
    //             element : <UnAuth_middleware><Login_signIn />  </UnAuth_middleware> 
    //         },
    //         { 
    //             path : 'forget-password',
    //             element : <UnAuth_middleware><Forget_password />  </UnAuth_middleware> 
    //         }
        ]
    },
    // {
    //     path: '/*',
    //     Component : NotFoundPage
    // }
]) 
export default Router;