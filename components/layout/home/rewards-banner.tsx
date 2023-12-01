import Image from "next/image";
import React from "react";

import Logo from "@/public/taharka_logo.png";

const RewardsBanner = () => {
    return (
        <section
            id="rewards-banner"
            className="flex flex-col justify-center items-center bg-[url('/imgs/ice-cream-bg-3.jpg')] bg-cover py-20 w-full object-top bg-bottom md:py-10 md:px-20 lg:py-20"
        >
            <div className="flex w-full ">
                <div className="flex flex-1 justify-center">
                    <Image src={Logo} alt="logo" className="flex bg-white rounded-full w-1/2" width={1000} height={1000} loading="eager" />
                </div>
                {/* REWARDS DESCRIPTION/ **ONLY ON LG SCREENS** */}
                <span className="flex-1 justify-end hidden w-[75%] lg:flex lg:text-4xl">
                    <p className="text-black opacity-90 rounded-3xl text-center items-center text-lg font-bold hidden w-[75%] lg:flex lg:text-4xl">
                        Earn Loyalty Points toward FREE ice cream with the Taharka App!
                    </p>
                </span>
            </div>
            <button className="bg-black rounded-full px-10 py-2 text-sm text-white mt-10 md:py-4 md:px-16">Earn Taharka Points</button>
        </section>
    );
};

export default RewardsBanner;
