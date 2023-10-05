import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
//ROUTES
import Menu from "./pages/menu/Menu";
import Order from "./pages/order/Order";
import Wallet from "./pages/wallet/Wallet";
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

const App = () => {
    return (
        <section className="flex flex-col justify-between w-full">
            <Header />
            <Routes>
                <Route index path="/" element={<Menu />} />
                <Route path="order" element={<Order />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="gifts" element={<Gifts />} />
                {/* MORE SECTION  */}
                <Route path="more" element={<More />} />
                <Route path="locations" element={<Locations />} />
                <Route path="nutritional-info" element={<NutritionalInfo />} />
                <Route path="gift-card-balance" element={<GCBalance />} />
                <Route path="orders" element={<Orders />} />
                <Route path="manage-subs" element={<ManageSubscriptions />} />
                <Route path="diary" element={<Diary />} />
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
