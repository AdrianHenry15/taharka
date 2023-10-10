import React from "react";
import PageContainer from "../../components/PageContainer";
import Tab from "../../components/buttons/Tab";
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
                <Tab name="Store Locations" hasArrow={true}>
                    <LiaStoreAltSolid />
                </Tab>
            </div>
            {/* INFORMATION  */}
            <div>
                <span className="title-text">Information</span>
                <Tab name="Nutritional Information" hasArrow={true}>
                    <CgList />
                </Tab>
                <Tab name="Check Gift Card Balance" hasArrow={true}>
                    <FaRegCreditCard />
                </Tab>
            </div>
            {/* ACCOUNT  */}
            <div>
                <span className="title-text">My Account</span>
                <Tab name="Orders" hasArrow={true}>
                    <CgList />
                </Tab>
                <Tab name="Manage Subscriptions" hasArrow={true}>
                    <PiArrowsClockwiseFill />
                </Tab>
                <Tab name="Ice Cream Diary" hasArrow={true}>
                    <BsFillJournalBookmarkFill />
                </Tab>
                <Tab name="Addresses" hasArrow={true}>
                    <IoLocationOutline />
                </Tab>
                <Link to="/payment-details">
                    <Tab name="Payment Details" hasArrow={true}>
                        <CiCreditCard1 />
                    </Tab>
                </Link>
                <Link to="/account-details">
                    <Tab name="Account Details" hasArrow={true}>
                        <IoIdCardOutline />
                    </Tab>
                </Link>
            </div>
            <Button onClick={() => {}} containerClass="mt-[110px]" text="Sign Out" />
        </PageContainer>
    );
};

export default More;
