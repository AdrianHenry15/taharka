import React from "react";
import { GiIceCreamScoop } from "react-icons/gi";
import { PiHandPointing } from "react-icons/pi";

const RewardsCard = () => {
    return (
        <div className="flex w-full rounded-xl h-52 bg-black text-white shadow-2xl max-w-sm">
            <div className="text-white flex items-end h-full">
                <GiIceCreamScoop size={200} />
            </div>
            <div className="flex flex-col justify-between w-full items-end m-6">
                <div className="flex flex-col items-end">
                    <span className="font-bold text-2xl">$0.00</span>
                    <span className="text-sm">Cream Cash</span>
                </div>
                <div className="flex items-center text-zinc-500 text-xs">
                    <span className="mr-2">Tap to use</span>
                    <div>
                        <PiHandPointing />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RewardsCard;
