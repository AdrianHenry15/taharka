import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import Tab from "../../components/tabs/Tab";
import { LiaStoreAltSolid } from "react-icons/lia";
import { FaRegCreditCard } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { IoLocationOutline, IoIdCardOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import Button from "../../components/buttons/Button";
import { Link, Outlet } from "react-router-dom";

const More = () => {
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
            <Button onClick={() => {}} containerClass="mt-[110px]" text="Sign Out" />
        </PageContainer>
    );
};

export default More;
