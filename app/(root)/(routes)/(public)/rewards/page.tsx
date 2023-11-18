import Banner from "@/components/page-components/rewards/Banner";
import BirthdayBanner from "@/components/page-components/rewards/BirthdayBanner";
import LoyaltyGuide from "@/components/page-components/rewards/LoyaltyGuide";
import React from "react";

const Rewards = () => {
    return (
        <div className="flex flex-col h-full w-full">
            <Banner />
            <LoyaltyGuide />
            <BirthdayBanner />
        </div>
    );
};

export default Rewards;
