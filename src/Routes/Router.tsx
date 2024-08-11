import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                element:<Home/>,
                index:true  // Remove the path here to make it the index route
            }
        ]
    }
])

export default Router