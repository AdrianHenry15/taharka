import Image from "next/image";
import React from "react";

import { BsPhoneFill } from "react-icons/bs";

const RewardsBanner = () => {
    return (
        <section
            id="rewards-banner"
            className="flex flex-col justify-center items-center bg-[url('/imgs/ice-cream-bg-3.jpg')] bg-cover py-20 w-full object-top bg-bottom md:py-10 md:px-20 lg:py-20"
        >
            <div className="flex w-1/2 self-center">
                <div className="flex flex-1">
                    <BsPhoneFill className="flex-1" size={200} />
                </div>
                {/* REWARDS DESCRIPTION/ **ONLY ON LG SCREENS** */}
                {/* <div className="hidden flex-col items-start flex-1 lg:flex"> */}
                <p className="text-black items-center text-lg font-bold hidden lg:flex md:text-2xl lg:text-4xl">
                    Earn Loyalty Points toward FREE ice cream with the Taharka App!
                </p>
            </div>
            <button className="bg-black rounded-full px-10 py-2 text-sm text-white mt-10">Earn Taharka Points</button>
        </section>
    );
};

export default RewardsBanner;
