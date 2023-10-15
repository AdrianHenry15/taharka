import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Menu from "../pages/menu/Menu";
import StartOrder from "../pages/order/StartOrder";
import DeliveryAddress from "../components/modals/DeliveryAddress";
import PickupLocation from "../components/modals/PickupLocation";
import SeasonalSubscription from "../features/users/order/SeasonalSubscription";
import PickupOrder from "../features/users/order/PickupOrder";
import Gifts from "../pages/gifts/Gifts";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Login from "../features/users/Login";
import ConfirmationCode from "../features/users/ConfirmationCode";

// const { Login } = lazyImport(() => import('../features/users'), 'Login');
// const { Register } = lazyImport(() => import('../features/users'), 'Register');

const Public = () => {
    return (
        <section className="flex flex-col w-full overscroll-none">
            <Header />
            <Suspense fallback={<div className=""></div>}>
                <Outlet />
            </Suspense>
            <Navbar />
        </section>
    );
};

export const publicRoutes = [
    {
        element: <Public />,
        children: [
            {
                path: "/",
                element: <Menu />,
            },
            {
                path: "/order",
                element: <StartOrder />,
            },
            {
                path: "/delivery",
                element: <DeliveryAddress returnPath="/order" />,
            },
            {
                path: "/store-pickup",
                element: <PickupLocation onClick={() => {}} path="" returnPath="/order" />,
            },
            {
                path: "/seasonal-subscription",
                element: <SeasonalSubscription />,
            },
            {
                path: "/pickup-order",
                element: <PickupOrder city="" />,
            },
            {
                path: "/gifts",
                element: <Gifts />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/confirmation-code",
                element: <ConfirmationCode />,
            },
            {
                path: "*",
                element: <Navigate to="/login" />,
            },
        ],
    },
];
