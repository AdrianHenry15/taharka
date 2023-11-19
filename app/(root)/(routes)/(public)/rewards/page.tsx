import React from "react";

import AppBanner from "@/components/page-components/rewards/AppBanner";
import Banner from "@/components/page-components/rewards/Banner";
import BirthdayBanner from "@/components/page-components/rewards/BirthdayBanner";
import BonusBanner from "@/components/page-components/rewards/BonusBanner";
import CreamCashGuide from "@/components/page-components/rewards/CreamCashGuide";
import LoyaltyGuide from "@/components/page-components/rewards/LoyaltyGuide";
import RewardFAQs from "@/components/page-components/rewards/RewardFAQs";

const Rewards = () => {
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

export default Rewards;
