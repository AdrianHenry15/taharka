import React from "react";
import Link from "next/link";

import { BsTruck, BsShop, BsCreditCard2Back } from "react-icons/bs";
import { PiCallBell, PiArrowsCounterClockwiseFill } from "react-icons/pi";
import { GiIceCreamScoop } from "react-icons/gi";

const PageBanner = () => {
    const btnClass =
        "flex items-center text-black font-semibold bg-white rounded-lg flex-1 m-1 py-6 w-1/2 min-w-[170px] max-w-[170px] justify-start pr-10 lg:bg-black lg:text-white lg:w-full";

    return (
        <section
            id="home-banner"
            className="flex flex-col justify-center items-center text-center w-full py-6 px-2 bg-black text-white font-light"
        >
            <h2 className="font-bold text-3xl">Ice Cream</h2>
            <p className="text-sm my-4">
                Whether you need dessert delivery*, curbside pickup, or something else, we make it easy to order ice cream online and
                through the app.
            </p>
            <aside className="text-xs text-zinc-400 mb-4">*Shipping only available in the United States</aside>
            <div className="flex flex-wrap py-4 justify-center">
                {/* DELIVERY  */}
                <Link href={"/delivery"}>
                    <a className={btnClass}>
                        <BsTruck className="mx-2" size={35} />
                        <span>Delivery</span>
                    </a>
                </Link>
                {/* PICKUP  */}
                <Link href={"/pickup"}>
                    <a className={btnClass}>
                        <BsShop className="mx-2" size={35} />
                        <span>Pickup</span>
                    </a>
                </Link>
                {/* CATERING  */}
                <Link href={"/wholesale"}>
                    <a className={btnClass}>
                        <PiCallBell className="mx-2" size={35} />
                        <span>Wholesale</span>
                    </a>
                </Link>
                {/* GIFTS  */}
                <Link href={"/gifts"}>
                    <a className={btnClass}>
                        <BsCreditCard2Back className="mx-2" size={35} />
                        <span>Gifts</span>
                    </a>
                </Link>
                {/* SHIPPING  */}
                <Link href={"/rewards"}>
                    <a className={btnClass}>
                        <GiIceCreamScoop className="mx-2" size={35} />
                        <span>Rewards</span>
                    </a>
                </Link>
                {/* SUBSCRIPTIONS  */}
                <Link href={"/subscriptions"}>
                    <a className={btnClass}>
                        <PiArrowsCounterClockwiseFill className="mx-2" size={35} />
                        <span>Subs</span>
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default PageBanner;
