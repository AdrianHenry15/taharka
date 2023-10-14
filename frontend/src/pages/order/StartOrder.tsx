import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import OrderCard from "../../components/cards/OrderCard";
import Tab from "../../components/tabs/Tab";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaStoreAltSolid } from "react-icons/lia";
import { PiBellRingingLight, PiArrowsCounterClockwiseLight } from "react-icons/pi";
import { BsMailbox } from "react-icons/bs";

const StartOrder = () => {
    return (
        <div className="h-full flex flex-col">
            <PageContainer className="bg-gray-100">
                <span className="font-bold text-2xl">Start an order</span>

                <div className="flex">
                    <OrderCard path="/delivery" text="Delivery">
                        <CiDeliveryTruck style={{ color: "var(--main-color)" }} size={35} />
                    </OrderCard>
                    <OrderCard path="/store-pickup" text="Store Pickup">
                        <LiaStoreAltSolid style={{ color: "var(--main-color)" }} size={35} />
                    </OrderCard>
                </div>
                {/* CATERING */}
                <Tab name="Catering Pickup" hasArrow={false}>
                    <PiBellRingingLight />
                </Tab>
                {/* MONTHLY SUBSCRIPTIONS */}
                <Tab name="Monthly Subscriptions" hasArrow={false}>
                    <PiArrowsCounterClockwiseLight />
                </Tab>
                {/* NATIONAL SHIPPING */}
                <Tab name="National Shipping" hasArrow={false}>
                    <BsMailbox />
                </Tab>
            </PageContainer>
        </div>
    );
};

export default StartOrder;
