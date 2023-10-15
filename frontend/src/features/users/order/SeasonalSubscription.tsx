import React from "react";
import BackBtn from "../../../components/buttons/BackBtn";
import SubscriptionTab from "../../../pages/order/components/SubscriptionTab";
import { ImTruck } from "react-icons/im";
import PageContainer from "../../../components/containers/PageContainer";
import { BsFillBagHeartFill } from "react-icons/bs";

const SeasonalSubscription = () => {
    return (
        <div className="flex flex-col w-full h-full items-center">
            <BackBtn path="/order" />
            <span className="font-bold text-xl">Seasonal Subscription</span>
            <PageContainer className="flex flex-col items-center my-4 bg-zinc-200 h-full">
                <span className="font-bold text-xl text-center">
                    How would you like <br /> to receive your order?
                </span>
                <div>
                    <SubscriptionTab
                        path="/delivery"
                        title={"Delivery"}
                        description={"Fresh ice cream delivered to you. What's better than that?"}
                    >
                        <span className="text-pink-400">
                            <ImTruck size={25} />
                        </span>
                    </SubscriptionTab>
                    <SubscriptionTab
                        path="/store-pickup"
                        title={"Carry-out"}
                        description={"Come inside and get your order at the pick up counter."}
                    >
                        <span className="text-pink-400">
                            <BsFillBagHeartFill size={25} />
                        </span>
                    </SubscriptionTab>
                </div>
            </PageContainer>
        </div>
    );
};

export default SeasonalSubscription;
