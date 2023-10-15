import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Menu from "../pages/menu/Menu";
import StartOrder from "../pages/order/StartOrder";
import DeliveryAddress from "../components/DeliveryAddress";
import PickupLocation from "../components/PickupLocation";
import SeasonalSubscription from "../pages/order/secondaryPages/SeasonalSubscription";
import PickupOrder from "../pages/order/secondaryPages/PickupOrder";
import Gifts from "../pages/gifts/Gifts";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

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
                path: "*",
                element: <Navigate to="/login" />,
            },
        ],
    },
];
