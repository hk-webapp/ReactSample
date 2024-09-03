import { createBrowserRouter } from "react-router-dom";
import { productList } from "./app/componentes/product/productList";
import App from "./App";
import { product } from "./app/componentes/product/product";

export const appRoute = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/product",
        Component: productList,
    },
    {
        path: "/product/:id",
        Component: product,
    },
])