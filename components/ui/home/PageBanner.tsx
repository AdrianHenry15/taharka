import React from "react";

import { BsTruck, BsShop, BsMailbox, BsCreditCard2Back } from "react-icons/bs";
import { PiCallBell, PiArrowsCounterClockwiseFill } from "react-icons/pi";

const PageBanner = () => {
    const MobileBtnClass =
        "flex items-center text-black font-semibold bg-white rounded-lg flex-1 m-1 py-6 w-full min-w-[120px] justify-evenly pr-10";

    return (
        <div className="flex flex-col justify-center items-center text-center w-full py-6 px-2 bg-black text-white font-light">
            <span className="font-light text-4xl">Ice Cream</span>
            <span className="text-sm my-4">
                Whether you need dessert delivery*, curbside pickup, or something else, we make it easy to order cookies online and through
                the app.
            </span>
            <aside className="text-xs text-zinc-400 mb-4">*Shipping only available in the United States</aside>
            <div className="flex flex-wrap py-4">
                {/* DELIVERY  */}
                <div className={MobileBtnClass}>
                    <BsTruck size={35} />
                    <span>Delivery</span>
                </div>
                {/* PICKUP  */}
                <div className={MobileBtnClass}>
                    <BsShop size={35} />
                    <span>Pickup</span>
                </div>
                {/* CATERING  */}
                <div className={MobileBtnClass}>
                    <PiCallBell size={35} />
                    <span>Catering</span>
                </div>
                {/* GIFTS  */}
                <div className={MobileBtnClass}>
                    <BsCreditCard2Back size={35} />
                    <span>Gifts</span>
                </div>
                {/* SHIPPING  */}
                <div className={MobileBtnClass}>
                    <BsMailbox size={35} />
                    <span>Shipping</span>
                </div>
                {/* SUBSCRIPTIONS  */}
                <div className={MobileBtnClass}>
                    <PiArrowsCounterClockwiseFill size={35} />
                    <span>Subscriptions</span>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;
