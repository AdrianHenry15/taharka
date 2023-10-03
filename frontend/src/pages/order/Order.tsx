import React from "react";
import PageContainer from "../../components/PageContainer";
import OrderCard from "../../components/buttons/OrderCard";
import Tab from "../../components/buttons/Tab";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaStoreAltSolid } from "react-icons/lia";
import { PiCallBellThin } from "react-icons/pi";

const Order = () => {
    return (
        <PageContainer className="w-full bg-gray-100">
            <span className="font-bold text-2xl">Start an order</span>
            <div className="flex">
                <OrderCard type="Delivery">
                    <CiDeliveryTruck size={35} />
                </OrderCard>
                <OrderCard type="Store Pickup">
                    <LiaStoreAltSolid size={35} />
                </OrderCard>
            </div>
            <Tab name="Catering Pickup" hasArrow={false}>
                <PiCallBellThin />
            </Tab>
        </PageContainer>
    );
};

export default Order;
