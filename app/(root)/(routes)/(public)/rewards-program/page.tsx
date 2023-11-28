import React from "react";

import AppBanner from "@/components/page-components/rewards-program/AppBanner";
import Banner from "@/components/page-components/rewards-program/Banner";
import BirthdayBanner from "@/components/page-components/rewards-program/BirthdayBanner";
import BonusBanner from "@/components/page-components/rewards-program/BonusBanner";
import CreamCashGuide from "@/components/page-components/rewards-program/CreamCashGuide";
import LoyaltyGuide from "@/components/page-components/rewards-program/LoyaltyGuide";
import RewardFAQs from "@/components/page-components/rewards-program/RewardFAQs";

const RewardsProgram = () => {
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

export default RewardsProgram;
