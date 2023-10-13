import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
//ROUTES
import Menu from "./pages/menu/Menu";
import Order from "./pages/order/Order";
import Gifts from "./pages/gifts/Gifts";
import More from "./pages/more/More";
import AccountDetails from "./pages/more/secondaryPages/AccountDetails";
import PaymentDetails from "./pages/more/secondaryPages/PaymentDetails";
import Locations from "./pages/more/secondaryPages/Locations";
import NutritionalInfo from "./pages/more/secondaryPages/NutritionalInfo";
import GCBalance from "./pages/more/secondaryPages/GCBalance";
import Orders from "./pages/more/secondaryPages/Orders";
import ManageSubscriptions from "./pages/more/secondaryPages/ManageSubscriptions";
import Diary from "./pages/more/secondaryPages/Diary";
import Addresses from "./pages/more/secondaryPages/Addresses";
import AddCard from "./pages/more/secondaryPages/AddCard";
import MyReviews from "./pages/more/secondaryPages/diaryPages/MyReviews";
import ToReview from "./pages/more/secondaryPages/diaryPages/ToReview";
import ThisWeek from "./pages/more/secondaryPages/diaryPages/ThisWeek";
import LastWeek from "./pages/more/secondaryPages/diaryPages/LastWeek";
import Popular from "./pages/more/secondaryPages/diaryPages/Popular";
import Graveyard from "./pages/more/secondaryPages/diaryPages/Graveyard";
import Classics from "./pages/more/secondaryPages/diaryPages/Classics";
import Rewards from "./pages/rewards/Rewards";

const App = () => {
    return (
        <section className="flex flex-col w-full [&::-webkit-scrollbar]:hidden">
            <Header />
            <Routes>
                <Route index path="/" element={<Menu />} />
                <Route path="order" element={<Order />} />
                <Route path="rewards" element={<Rewards />} />
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
