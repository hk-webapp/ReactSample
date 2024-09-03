import { createBrowserRouter } from "react-router-dom";
import { productList } from "./app/componentes/product/productList";
import App from "./App";

export const appRoute = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/product",
        Component: productList,
    },
])