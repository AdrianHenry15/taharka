import React from "react";

import AppBanner from "@/components/layout/rewards-program/app-banner";
import Banner from "@/components/layout/rewards-program/banner";
import BirthdayBanner from "@/components/layout/rewards-program/birthday-banner";
import BonusBanner from "@/components/layout/rewards-program/bonus-banner";
import CreamCashGuide from "@/components/layout/rewards-program/cream-cash-guide";
import LoyaltyGuide from "@/components/layout/rewards-program/loyalty-guide";
import RewardFAQs from "@/components/layout/rewards-program/rewards-faq";

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
