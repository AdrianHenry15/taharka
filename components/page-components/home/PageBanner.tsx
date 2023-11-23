import React from "react";
import Link from "next/link";

import { BsTruck, BsShop, BsCreditCard2Back, BsMailbox } from "react-icons/bs";
import { PiCallBell } from "react-icons/pi";
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
                <Link href={"/order/delivery"} className={btnClass}>
                    <>
                        <BsTruck className="mx-2" size={35} />
                        Delivery
                    </>
                </Link>
                {/* PICKUP  */}
                <Link href={"/order/pickup"} className={btnClass}>
                    <>
                        <BsShop className="mx-2" size={35} />
                        Pickup
                    </>
                </Link>
                {/* CATERING  */}
                <Link href={"/order/wholesale"} className={btnClass}>
                    <PiCallBell className="mx-2" size={35} />
                    Wholesale
                </Link>
                {/* GIFTS  */}
                <Link href={"/order/gifts"} className={btnClass}>
                    <>
                        <BsCreditCard2Back className="mx-2" size={35} />
                        Gifts
                    </>
                </Link>
                {/* SHIPPING  */}
                <Link href={"/order/rewards"} className={btnClass}>
                    <>
                        <GiIceCreamScoop className="mx-2" size={35} />
                        Rewards
                    </>
                </Link>
                {/* SUBSCRIPTIONS  */}
                <Link href={"/order/shipping"} className={btnClass}>
                    <>
                        <BsMailbox className="mx-2" size={35} />
                        Shipping
                    </>
                </Link>
            </div>
        </section>
    );
};

export default PageBanner;
