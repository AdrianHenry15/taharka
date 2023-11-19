import AppBanner from "@/components/page-components/rewards/AppBanner";
import Banner from "@/components/page-components/rewards/Banner";
import BirthdayBanner from "@/components/page-components/rewards/BirthdayBanner";
import BonusBanner from "@/components/page-components/rewards/BonusBanner";
import CreamCashGuide from "@/components/page-components/rewards/CreamCashGuide";
import LoyaltyGuide from "@/components/page-components/rewards/LoyaltyGuide";
import React from "react";

const Rewards = () => {
    return (
        <div className="flex flex-col h-full w-full mt-10">
            <Banner />
            <LoyaltyGuide />
            <BirthdayBanner />
            <BonusBanner />
            <AppBanner />
            <CreamCashGuide />
        </div>
    );
};

export default Rewards;
