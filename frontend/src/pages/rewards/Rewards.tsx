import React from "react";
import PageContainer from "../../components/PageContainer";
import InfoContainer from "../../components/InfoContainer";
import RewardsCard from "./components/RewardsCard";

const Rewards = () => {
    return (
        <div className="flex flex-col w-full bg-zinc-200 h-full">
            <InfoContainer className="bg-white border-t-2" text="Rewards" />
            {/* MAIN SECTION */}
            <div className="p-4 flex flex-col w-full">
                {/* SECTION 1 */}
                <div className="w-full bg-white rounded-lg">
                    <RewardsCard />
                    {/* CREAM POINTS  */}
                    <div className="w-full text-xs justify-between flex p-2">
                        <span>Cream:</span>
                        <span>100 more to earn $10</span>
                    </div>
                </div>
                {/* SECTION 2  */}
            </div>
        </div>
    );
};

export default Rewards;
