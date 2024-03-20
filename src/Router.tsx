import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./Routes/NotFound";
import Playing from "./Routes/Playing";
import Coming from "./Routes/Coming";
import Home from "./Routes/Home";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "",
                element : <Home />,
                children : [
                    {
                        path: ":movieId",
                        element :<Home />
                    },
                ],
            },
            {
                path : "coming-soon",
                element : <Coming />,
                children : [
                    {
                        path: "movies/:movieId",
                        element : <Coming />
                    },
                ],
            },
            {
                path : "now-playing",
                element : <Playing />,
                children : [
                    {
                        path: "movies/:movieId",
                        element : <Playing />
                    },
                ],
            },
           
        ],
        errorElement : <NotFound />
    },
]);