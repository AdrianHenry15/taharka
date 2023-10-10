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
                <Link to="/store-locations">
                    <Tab name="Store Locations" hasArrow={true}>
                        <LiaStoreAltSolid />
                    </Tab>
                </Link>
            </div>
            {/* INFORMATION  */}
            <div>
                <span className="title-text">Information</span>
                <Link to="/nutritional-info">
                    <Tab name="Nutritional Information" hasArrow={true}>
                        <CgList />
                    </Tab>
                </Link>
                <Link to="/gift-card-balance">
                    <Tab name="Check Gift Card Balance" hasArrow={true}>
                        <FaRegCreditCard />
                    </Tab>
                </Link>
            </div>
            {/* ACCOUNT  */}
            <div>
                <span className="title-text">My Account</span>
                <Link to="/orders">
                    <Tab name="Orders" hasArrow={true}>
                        <CgList />
                    </Tab>
                </Link>
                <Link to="/manage-subscriptions">
                    <Tab name="Manage Subscriptions" hasArrow={true}>
                        <PiArrowsClockwiseFill />
                    </Tab>
                </Link>
                <Link to="/ice-cream-diary">
                    <Tab name="Ice Cream Diary" hasArrow={true}>
                        <BsFillJournalBookmarkFill />
                    </Tab>
                </Link>
                <Link to="/addresses">
                    <Tab name="Addresses" hasArrow={true}>
                        <IoLocationOutline />
                    </Tab>
                </Link>
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
