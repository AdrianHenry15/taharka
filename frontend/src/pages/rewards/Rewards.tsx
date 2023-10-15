import React from "react";
import InfoContainer from "../../components/containers/InfoContainer";
import RewardsCard from "./components/RewardsCard";
import Progressbar from "./components/ProgressBar";
import Tab from "../../components/tabs/Tab";
import { LiaGiftsSolid } from "react-icons/lia";
import { IoAddCircleOutline, IoTicketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
                    <div className="w-full text-xs flex flex-col p-2">
                        <div className="flex w-full justify-between">
                            <span>Cream:</span>
                            <span>100 more to earn $10</span>
                        </div>
                        <Progressbar />
                    </div>
                </div>
                {/* SECTION 2  */}
                <Tab path="/earn-free-cream" onClick={() => {}} textClass="font-bold" hasArrow name="Earn Free Cream">
                    <div className="text-pink-300">
                        <LiaGiftsSolid size={25} />
                    </div>
                </Tab>
                {/* SECTION 3  */}
                <div>
                    {/* VOUCHERS ROW  */}
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">Vouchers</span>
                        {/* PROMO CODE BUTTON  */}
                        <div className="flex items-center">
                            <IoAddCircleOutline size={18} />
                            <span className="ml-[5px] text-sm">Promo Code</span>
                        </div>
                    </div>
                    {/* VOUCHERS SECTION  */}
                    <div className="my-2 text-xs flex flex-col justify-center items-center w-full h-52 border-2 border-zinc-400 rounded-lg">
                        <IoTicketOutline size={20} />
                        <span className="font-bold">You Have No Vouchers</span>
                        <span className="text-zinc-400">Enter a promo code to earn a voucher</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewards;
