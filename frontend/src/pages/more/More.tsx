//components
import PageContainer from "../../components/containers/PageContainer";
import Tab from "../../components/tabs/Tab";
import Button from "../../components/buttons/Button";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { GlobalStateContext } from "../../context/GlobalStoreContext";
//dependencies
import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// icons
import { LiaStoreAltSolid } from "react-icons/lia";
import { FaRegCreditCard } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { IoLocationOutline, IoIdCardOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";

const More = () => {
    const store = useContext<GlobalStateStore>(GlobalStateContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Send request to the logout API endpoint
            await axios.post(`${store.BaseUrl}/users/logout`);

            // Clear the authentication token on successful logout
            localStorage.removeItem("authToken"); // Replace with your store

            // Update user's login status in the store
            store.User.isLoggedIn = false;

            // Navigate to Menu | ~ This function is needed for this whole function to work correctly ~
            navigate("/");
        } catch (error) {
            // THIS SHOULD NEVER HAPPEN
            console.error("Invalid credentials. Please try again.");
        }
    };
    return (
        <PageContainer className="bg-gray-100">
            {/* MAPS  */}
            <div>
                <span className="title-text">Maps</span>
                <Tab path="/store-locations" onClick={() => {}} name="Store Locations" hasArrow={true}>
                    <LiaStoreAltSolid />
                </Tab>
            </div>
            {/* INFORMATION  */}
            <div>
                <span className="title-text">Information</span>
                <Tab path="/nutritional-info" onClick={() => {}} name="Nutritional Information" hasArrow={true}>
                    <CgList />
                </Tab>
                <Tab path="/gift-card-balance" onClick={() => {}} name="Check Gift Card Balance" hasArrow={true}>
                    <FaRegCreditCard />
                </Tab>
            </div>
            {/* ACCOUNT  */}
            <div>
                <span className="title-text">My Account</span>
                <Tab path="/orders" onClick={() => {}} name="Orders" hasArrow={true}>
                    <CgList />
                </Tab>
                <Tab path="/manage-subscriptions" onClick={() => {}} name="Manage Subscriptions" hasArrow={true}>
                    <PiArrowsClockwiseFill />
                </Tab>
                <Tab path="/ice-cream-diary" onClick={() => {}} name="Ice Cream Diary" hasArrow={true}>
                    <BsFillJournalBookmarkFill />
                </Tab>
                <Tab path="/addresses" onClick={() => {}} name="Addresses" hasArrow={true}>
                    <IoLocationOutline />
                </Tab>
                <Tab path="/payment-details" onClick={() => {}} name="Payment Details" hasArrow={true}>
                    <CiCreditCard1 />
                </Tab>
                <Tab path="/account-details" onClick={() => {}} name="Account Details" hasArrow={true}>
                    <IoIdCardOutline />
                </Tab>
            </div>
            <Button path="" onClick={() => handleLogout()} containerClass="mt-[110px]" text="Sign Out" />
        </PageContainer>
    );
};

export default More;
