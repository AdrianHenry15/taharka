import { Suspense } from "react";
import Header from "../components/Header";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Menu from "../pages/menu/Menu";
import StartOrder from "../pages/order/StartOrder";
import DeliveryAddress from "../components/modals/DeliveryAddress";
import PickupLocation from "../components/modals/PickupLocation";
import SeasonalSubscription from "../features/users/order/SeasonalSubscription";
import PickupOrder from "../features/users/order/PickupOrder";
import Rewards from "../pages/rewards/Rewards";
import EarnFreeCream from "../features/users/rewards/EarnFreeCream";
import Gifts from "../pages/gifts/Gifts";
import More from "../pages/more/More";
import Locations from "../features/users/more/Locations";
import NutritionalInfo from "../features/users/more/NutritionalInfo";
import GCBalance from "../features/users/more/GCBalance";
import Orders from "../features/users/more/orders/Orders";
import ManageSubscriptions from "../features/users/more/ManageSubscriptions";
import Diary from "../features/users/more/diary/Diary";
import MyReviews from "../features/users/more/diary/MyReviews";
import ToReview from "../features/users/more/diary/ToReview";
import ThisWeek from "../features/users/more/diary/ThisWeek";
import LastWeek from "../features/users/more/diary/LastWeek";
import Popular from "../features/users/more/diary/Popular";
import Graveyard from "../features/users/more/diary/Graveyard";
import Classics from "../features/users/more/diary/Classics";
import Addresses from "../features/users/more/Addresses";
import PaymentDetails from "../features/users/more/payment/PaymentDetails";
import AddCard from "../features/users/more/payment/AddCard";
import AccountDetails from "../features/users/more/account/AccountDetails";

const Protected = () => {
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

const getReturnPath = (): string => {
    return "/order";
};

const getPath = (): string => {
    return "";
};

const getCity = (): string => {
    return "";
};

export const protectedRoutes = [
    {
        path: "/",
        element: <Protected />,
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
                element: <DeliveryAddress returnPath={getReturnPath()} />,
            },
            {
                path: "/store-pickup",
                element: <PickupLocation onClick={() => {}} path={getPath()} returnPath={getReturnPath()} />,
            },
            {
                path: "/seasonal-subscription",
                element: <SeasonalSubscription />,
            },
            {
                path: "/pickup-order",
                element: <PickupOrder city={getCity()} />,
            },
            {
                path: "/rewards",
                element: <Rewards />,
            },
            {
                path: "/earn-free-cream",
                element: <EarnFreeCream />,
            },
            {
                path: "/gifts",
                element: <Gifts />,
            },
            {
                path: "/more",
                element: <More />,
            },
            {
                path: "/store-locations",
                element: <Locations />,
            },
            {
                path: "/nutritional-info",
                element: <NutritionalInfo />,
            },
            {
                path: "/gift-card-balance",
                element: <GCBalance />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/manage-subscriptions",
                element: <ManageSubscriptions />,
            },
            {
                path: "/ice-cream-diary",
                element: <Diary />,
            },
            {
                path: "",
                element: <MyReviews />,
            },
            {
                path: "to-review",
                element: <ToReview />,
            },
            {
                path: "this-week",
                element: <ThisWeek />,
            },
            {
                path: "last-week",
                element: <LastWeek />,
            },
            {
                path: "popular",
                element: <Popular />,
            },
            {
                path: "graveyard",
                element: <Graveyard />,
            },
            {
                path: "classics",
                element: <Classics />,
            },
            {
                path: "/addresses",
                element: <Addresses />,
            },
            {
                path: "/payment-details",
                element: <PaymentDetails />,
            },
            {
                path: "/add-card",
                element: <AddCard />,
            },
            {
                path: "/account-details",
                element: <AccountDetails />,
            },
            {
                path: "*",
                element: <Navigate to="." />,
            },
        ],
    },
];
