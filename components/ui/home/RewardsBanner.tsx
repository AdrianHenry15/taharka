import Image from "next/image";
import React from "react";

import { BsPhoneFill } from "react-icons/bs";
import Button from "../buttons/Button";

const RewardsBanner = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-[url('/imgs/ice-cream-bg-3.jpg')] bg-cover py-20 w-full object-top bg-bottom md:py-10 md:px-20 lg:flex-row lg:py-20">
            <span className="flex flex-1">
                <BsPhoneFill className="flex-1 text-pink-400" size={200} />
            </span>
            {/* REWARDS DESCRIPTION/ **ONLY ON LG SCREENS** */}
            <div className="hidden flex-col items-start flex-1 lg:flex">
                <span className="text-black text-lg font-bold md:text-2xl lg:text-4xl">
                    Earn Loyalty Points toward FREE ice cream with the Taharka App!
                </span>
                <Button isLink containerClass="mb-0 mt-6" text={"Earn Taharka Points"} onClick={() => {}} path={"/rewards"} />
            </div>
            <Button containerClass="lg:hidden mt-6 mb-0" isLink text={"Earn Taharka Points"} path={"/rewards"} />
        </div>
    );
};

export default RewardsBanner;
