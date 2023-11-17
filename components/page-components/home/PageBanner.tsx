import React from "react";

import { BsTruck, BsShop, BsMailbox, BsCreditCard2Back } from "react-icons/bs";
import { PiCallBell, PiArrowsCounterClockwiseFill } from "react-icons/pi";
import { GiIceCreamScoop } from "react-icons/gi";
import Link from "next/link";

const PageBanner = () => {
    const BtnClass =
        "flex items-center text-black font-semibold bg-white rounded-lg flex-1 m-1 py-6 w-1/2 min-w-[170px] max-w-[170px] justify-start pr-10 lg:bg-black lg:text-white lg:w-full";

    return (
        <div
            id="home-banner"
            className="flex flex-col justify-center items-center text-center w-full py-6 px-2 bg-black text-white font-light"
        >
            <span className="font-bold text-3xl">Ice Cream</span>
            <span className="text-sm my-4">
                Whether you need dessert delivery*, curbside pickup, or something else, we make it easy to order ice cream online and
                through the app.
            </span>
            <aside className="text-xs text-zinc-400 mb-4">*Shipping only available in the United States</aside>
            <div className="flex flex-wrap py-4 justify-center">
                {/* DELIVERY  */}
                <Link href={"/delivery"} className={BtnClass}>
                    <BsTruck className="mx-2" size={35} />
                    <span>Delivery</span>
                </Link>
                {/* PICKUP  */}
                <Link href={"/pickup"} className={BtnClass}>
                    <BsShop className="mx-2" size={35} />
                    <span>Pickup</span>
                </Link>
                {/* CATERING  */}
                <Link href={"/wholesale"} className={BtnClass}>
                    <PiCallBell className="mx-2" size={35} />
                    <span>Wholesale</span>
                </Link>
                {/* GIFTS  */}
                <Link href={"/gifts"} className={BtnClass}>
                    <BsCreditCard2Back className="mx-2" size={35} />
                    <span>Gifts</span>
                </Link>
                {/* SHIPPING  */}
                <Link href={"/rewards"} className={BtnClass}>
                    <GiIceCreamScoop className="mx-2" size={35} />
                    <span>Rewards</span>
                </Link>
                {/* SUBSCRIPTIONS  */}
                <Link href={"/subscriptions"} className={BtnClass}>
                    <PiArrowsCounterClockwiseFill className="mx-2" size={35} />
                    <span>Subs</span>
                </Link>
            </div>
        </div>
    );
};

export default PageBanner;
