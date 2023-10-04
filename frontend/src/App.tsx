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

const App = () => {
    return (
        <section className="flex flex-col justify-between w-full">
            <Header />
            <Routes>
                <Route index path="/" element={<Menu />} />
                <Route path="order" element={<Order />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="gifts" element={<Gifts />} />
                <Route path="more" element={<More />} />
                <Route index path="account-details" element={<AccountDetails />} />
                <Route index path="payment-details" element={<PaymentDetails />} />
            </Routes>
            <Navbar />
        </section>
    );
};

export default App;
