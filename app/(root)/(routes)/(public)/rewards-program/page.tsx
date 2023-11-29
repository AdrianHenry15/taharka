import React from "react";

import AppBanner from "@/components/page-components/rewards-program/app-banner";
import Banner from "@/components/page-components/rewards-program/banner";
import BirthdayBanner from "@/components/page-components/rewards-program/birthday-banner";
import BonusBanner from "@/components/page-components/rewards-program/bonus-banner";
import CreamCashGuide from "@/components/page-components/rewards-program/cream-cash-guide";
import LoyaltyGuide from "@/components/page-components/rewards-program/loyalty-guide";
import RewardFAQs from "@/components/page-components/rewards-program/rewards-faq";

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
