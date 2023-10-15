import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
//ROUTES
import Menu from "./pages/menu/Menu";
import Gifts from "./pages/gifts/Gifts";
import More from "./pages/more/More";
import AccountDetails from "./features/users/account/AccountDetails";
import PaymentDetails from "./features/users/payment/PaymentDetails";
import Locations from "./features/users/Locations";
import NutritionalInfo from "./features/users/NutritionalInfo";
import GCBalance from "./features/users/GCBalance";
import Orders from "./features/users/orders/Orders";
import ManageSubscriptions from "./features/users/ManageSubscriptions";
import Diary from "./features/users/diary/Diary";
import Addresses from "./features/users/Addresses";
import AddCard from "./features/users/payment/AddCard";
import Rewards from "./pages/rewards/Rewards";
import EarnFreeCream from "./pages/rewards/secondaryPages/EarnFreeCream";
import DeliveryAddress from "./components/DeliveryAddress";
import PickupLocation from "./components/PickupLocation";
import StartOrder from "./pages/order/StartOrder";
import PickupOrder from "./pages/order/secondaryPages/PickupOrder";
import SeasonalSubscription from "./pages/order/secondaryPages/SeasonalSubscription";
import MyReviews from "./features/users/diary/MyReviews";
import ToReview from "./features/users/diary/ToReview";
import ThisWeek from "./features/users/diary/ThisWeek";
import LastWeek from "./features/users/diary/LastWeek";
import Popular from "./features/users/diary/Popular";
import Graveyard from "./features/users/diary/Graveyard";
import Classics from "./features/users/diary/Classics";

const App = () => {
    return (
        <section className="flex flex-col w-full overscroll-none">
            <Header />
            <Routes>
                <Route index path="/" element={<Menu />} />
                <Route path="order" element={<StartOrder />} />
                <Route path="delivery" element={<DeliveryAddress returnPath="/order" />} />
                {/* TODO: RETURN PATH AND REGULAR PATH NEED TO BE DYNAMIC AND COME FROM STATE STORE  */}
                <Route path="store-pickup" element={<PickupLocation onClick={() => {}} path="" returnPath="/order" />} />
                <Route path="seasonal-subscription" element={<SeasonalSubscription />} />
                <Route path="pickup-order" element={<PickupOrder city={""} />} />
                <Route path="rewards" element={<Rewards />} />
                <Route path="earn-free-cream" element={<EarnFreeCream />} />
                <Route path="gifts" element={<Gifts />} />
                {/* MORE SECTION  */}
                <Route path="more" element={<More />} />
                <Route path="store-locations" element={<Locations />} />
                <Route path="nutritional-info" element={<NutritionalInfo />} />
                <Route path="gift-card-balance" element={<GCBalance />} />
                <Route path="orders" element={<Orders />} />
                <Route path="manage-subscriptions" element={<ManageSubscriptions />} />
                <Route path="ice-cream-diary" element={<Diary />}>
                    <Route index={true} path="" element={<MyReviews />} />
                    <Route path="to-review" element={<ToReview />} />
                    <Route path="this-week" element={<ThisWeek />} />
                    <Route path="last-week" element={<LastWeek />} />
                    <Route path="popular" element={<Popular />} />
                    <Route path="graveyard" element={<Graveyard />} />
                    <Route path="classics" element={<Classics />} />
                </Route>
                <Route path="addresses" element={<Addresses />} />
                <Route index path="payment-details" element={<PaymentDetails />} />
                <Route index path="add-card" element={<AddCard />} />
                <Route index path="account-details" element={<AccountDetails />} />
            </Routes>
            <Navbar />
        </section>
    );
};

export default App;
