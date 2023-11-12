import React from "react";

import { BsTruck, BsShop, BsMailbox, BsCreditCard2Back } from "react-icons/bs";
import { PiCallBell, PiArrowsCounterClockwiseFill } from "react-icons/pi";

const PageBanner = () => {
    const BtnClass =
        "flex items-center text-black font-semibold bg-white rounded-lg flex-1 m-1 py-6 w-1/2 min-w-[170px] max-w-[170px] justify-start pr-10 lg:bg-black lg:text-white lg:w-full";

    return (
        <div className="flex flex-col justify-center items-center text-center w-full py-6 px-2 bg-black text-white font-light">
            <span className="font-bold text-3xl">Ice Cream</span>
            <span className="text-sm my-4">
                Whether you need dessert delivery*, curbside pickup, or something else, we make it easy to order ice cream online and
                through the app.
            </span>
            <aside className="text-xs text-zinc-400 mb-4">*Shipping only available in the United States</aside>
            <div className="flex flex-wrap py-4 justify-center">
                {/* DELIVERY  */}
                <div className={BtnClass}>
                    <BsTruck className="mx-2" size={35} />
                    <span>Delivery</span>
                </div>
                {/* PICKUP  */}
                <div className={BtnClass}>
                    <BsShop className="mx-2" size={35} />
                    <span>Pickup</span>
                </div>
                {/* CATERING  */}
                <div className={BtnClass}>
                    <PiCallBell className="mx-2" size={35} />
                    <span>Catering</span>
                </div>
                {/* GIFTS  */}
                <div className={BtnClass}>
                    <BsCreditCard2Back className="mx-2" size={35} />
                    <span>Gifts</span>
                </div>
                {/* SHIPPING  */}
                <div className={BtnClass}>
                    <BsMailbox className="mx-2" size={35} />
                    <span>Shipping</span>
                </div>
                {/* SUBSCRIPTIONS  */}
                <div className={BtnClass}>
                    <PiArrowsCounterClockwiseFill className="mx-2" size={35} />
                    <span>Subscriptions</span>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;
