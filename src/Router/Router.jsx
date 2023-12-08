import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import Details from "../Pages/Details/Details";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/brands.json"),
            },

            {
                path: "/add-product",
                element: (
                    <PrivateRoute>
                        <AddProduct></AddProduct>
                    </PrivateRoute>
                ),
            },
            {
                path: "/cart",
                element: (
                    <PrivateRoute>
                        <MyCart></MyCart>
                    </PrivateRoute>
                ),
                loader: () =>
                    fetch("https://innovate-nex-server.vercel.app/cart"),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>,
            },
            {
                path: "/brands/:name",
                element: (
                    <PrivateRoute>
                        <Details></Details>
                    </PrivateRoute>
                ),
                loader: (params) => fetch(`/brands.json/${params}`),
            },
            {
                path: "/product/:id",
                element: (
                    <PrivateRoute>
                        <ProductDetails></ProductDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://innovate-nex-server.vercel.app/product/${params.id}`
                    ),
            },
        ],
    },
]);

export default router;
