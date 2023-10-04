import React from "react";
import PageContainer from "../../components/PageContainer";
import Tab from "../../components/buttons/Tab";
import { LiaStoreAltSolid } from "react-icons/lia";
import { FaRegCreditCard } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import Button from "../../components/buttons/Button";

const More = () => {
    return (
        <PageContainer className="md:px-10 bg-gray-100">
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
                    <FaRegCreditCard />
                </Tab>
                <Tab name="Ice Cream Diary" hasArrow={true}>
                    <FaRegCreditCard />
                </Tab>
                <Tab name="Addresses" hasArrow={true}>
                    <FaRegCreditCard />
                </Tab>
                <Tab name="Payment Details" hasArrow={true}>
                    <FaRegCreditCard />
                </Tab>
                <Tab name="Account Details" hasArrow={true}>
                    <FaRegCreditCard />
                </Tab>
            </div>
            <Button className="mt-[110px]" text="Sign Out" />
        </PageContainer>
    );
};

export default More;
