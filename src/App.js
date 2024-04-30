import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import ItemMenu from "./components/ItemMenu";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utility/appStore";
import { Auth0Provider } from "@auth0/auth0-react"; // Import Auth0Provider

const auth0Domain = "dev-erboy16xuczkxiuw.us.auth0.com";
const auth0ClientId = "vgI9k8ykwEWwl2wQ7CiifOtMPQIwSoM0";

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/items/:itemId",
                element: <ItemMenu/>,
            }
        ],
        errorElement: <Error/>,
    },
]);

const main = ReactDOM.createRoot(document.getElementById('main'));

main.render(
    <Auth0Provider
        domain={auth0Domain}
        clientId={auth0ClientId}
        redirectUri={window.location.origin}
    >
        <RouterProvider router={appRouter}/>
    </Auth0Provider>
);
