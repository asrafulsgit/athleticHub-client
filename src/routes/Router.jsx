import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import Events from "../components/events/Events";
import UnAuth_middleware from "../middlewares/UnAuth_middleware";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Event_details from "../components/manage_events/Event_details";
import Auth_middleware from "../middlewares/Auth_middleware";
import My_bookings from "../components/my_bookings/My_bookings";
import Update_event from "../components/manage_events/Update_events";
import Create_event from "../components/manage_events/Create_event";
import Profile from "../components/profile/Profile";
import Manage_events from "../components/manage_events/Manage_events";
import Book_event from "../components/book_event/Book_event";
import NotFoundPage from "../components/aditionals/NotFoundPage";
import Profile_Update from "../components/profile/Profile_Update";
import About from "../components/about/About";
import Blog from "../components/blogs/Blog";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsOfService from "../components/TermsOfService";
import Contact from "../components/Contact";
import BlogDetails from "../components/blogs/BlogDetails";

const Router = createBrowserRouter([
    {
        path : '/',
        Component : App,
        children :[
            { 
               index : true,
               Component : Landing ,
            },
            { 
                path : 'events',
                element :  <Events /> 
            },
            { 
                path : 'about',
                element :  <About /> 
            },
            { 
                path : 'blogs',
                element :  <Blog /> 
            },
            { 
                path : 'blog/:slug',
                element :<Auth_middleware><BlogDetails /> </Auth_middleware>  
            },
            { 
                path : 'event-details/:id',
                element : <Auth_middleware><Event_details /></Auth_middleware>,
                errorElement : <NotFoundPage />
            },
            { 
                path : 'manage-events',
                element : <Auth_middleware><Manage_events /></Auth_middleware>,
            },
            { 
                path : 'update-event/:id',
                element : <Auth_middleware><Update_event /></Auth_middleware>,
                errorElement : <NotFoundPage />
            },
            { 
                path : 'create-event',
                element : <Auth_middleware><Create_event /></Auth_middleware>,
            },
            { 
                path : 'my-bookings',
                element : <Auth_middleware><My_bookings /></Auth_middleware> 
            },
            { 
                path : 'book-event',
                element : <Auth_middleware><Book_event /></Auth_middleware>
            },
            { 
                path : 'profile',
                element : <Auth_middleware><Profile /></Auth_middleware>
            },
            { 
                path : 'update-profile',
                element : <Auth_middleware><Profile_Update /></Auth_middleware>
            },
            { 
                path : 'login', 
                element : <UnAuth_middleware><Login />  </UnAuth_middleware> 
            },
            { 
                path : 'signup', 
                element : <UnAuth_middleware><Register />  </UnAuth_middleware> 
            },
            { 
                path : 'privacy-policy', 
                element : <PrivacyPolicy /> 
            },
            { 
                path : 'terms-service', 
                element : <TermsOfService /> 
            },
            { 
                path : '/contact', 
                element : <Contact /> 
            },
    //         { 
    //             path : 'forget-password',
    //             element : <UnAuth_middleware><Forget_password />  </UnAuth_middleware> 
    //         }
        ]
    },
    {
        path: '/*',
        Component : NotFoundPage
    }
]) 
export default Router;