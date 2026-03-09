import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error/Error";
import Layout from "./layout/Layout/Layout.tsx";
import ProductOne from "./pages/Product/ProductOne.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/API.ts";
import AuthLayout from "./layout/Auth/AuthLayout.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import RequireAuth from "./helpers/RequireAuth.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const Cart = lazy(() => import("./pages/Cart/Cart"))
const Menu = lazy(() => import("./pages/Menu/Menu"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <RequireAuth><Layout /></RequireAuth>,
        children: [
            {
                path: "/",
                element: <Menu />,
            },
            {
                path: "/cart",
                element: <Suspense fallback={<>Загрузка</>}><Cart /></Suspense>,
            },
            {
                path: "/product/:id",
                element: <ProductOne />,
                errorElement: <>Ошибка</>,
                loader: async ({ params }) => {
                    return {
                        data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data.data)
                    };
                },
            },
        ],
    }, {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: "*",
        element: <Error />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
