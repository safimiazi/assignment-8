import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Donation from "../Pages/Donation/Donation";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import CardDetails from "../Components/CardDetails/CardDetails";


const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch('/public/data.json')
                
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/public/data.json') 
            },
            {
                path: "/card/:id",
                element:<CardDetails></CardDetails>,
                loader: () => fetch('/public/data.json')
            }
        ]
    }
])

export default myCreateRoute;