import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Loading } from "../shared";
import { Home, ErrorPage } from "../pages";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <h3>Welcome my about page</h3>
            },
            {
                path: "/loading",
                element: <Loading />
            }
        ]
    }
]);


export default router;