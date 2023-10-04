import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
//ROUTES
import Menu from "./pages/menu/Menu";
import Order from "./pages/order/Order";
import Wallet from "./pages/wallet/Wallet";
import Gifts from "./pages/gifts/Gifts";
import More from "./pages/more/More";
import OrderBtn from "./components/buttons/Button";
import AccountDetails from "./pages/account-details/AccountDetails";

const App = () => {
    return (
        <section className="flex flex-col justify-between w-full">
            <Header />
            <Routes>
                <Route index={true} path="/" element={<Menu />} />
                <Route path="/order" element={<Order />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/gifts" element={<Gifts />} />
                <Route path="/more" element={<More />} />
                <Route path="/account-details" element={<AccountDetails />} />
            </Routes>
            <Navbar />
        </section>
    );
};

export default App;
