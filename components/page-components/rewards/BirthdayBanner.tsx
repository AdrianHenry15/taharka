import React from "react";

import IceCream from "@/public/imgs/transparent-ice-cream.png";
import Image from "next/image";

const BirthdayBanner = () => {
    return (
        <div className="flex flex-col bg-pink-200 py-10">
            <div className="flex flex-col">
                <span>Birthday Treat</span>
                <span>
                    Enjoy a FREE ice cream on your birthday every year! To sign up, simply visit your <strong>Taharka Bros Account</strong>{" "}
                    online or add your birthday through the Taharka App.
                </span>
            </div>
            <Image src={IceCream} alt="ice-cream-png" width={100} height={100} />
        </div>
    );
};

export default BirthdayBanner;
