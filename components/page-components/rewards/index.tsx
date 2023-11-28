import React from "react";
import Banner from "./Banner";
import LoyaltyGuide from "./LoyaltyGuide";
import BirthdayBanner from "./BirthdayBanner";
import BonusBanner from "./BonusBanner";
import AppBanner from "./AppBanner";
import RewardFAQs from "./RewardFAQs";
import CreamCashGuide from "./CreamCashGuide";

const RewardsPromo = () => {
    return (
        <div className="flex flex-col h-full w-full mt-10 md:mt-14">
            <Banner />
            <LoyaltyGuide />
            <BirthdayBanner />
            <BonusBanner />
            <AppBanner />
            <CreamCashGuide />
            <RewardFAQs />
        </div>
    );
};

export default RewardsPromo;
