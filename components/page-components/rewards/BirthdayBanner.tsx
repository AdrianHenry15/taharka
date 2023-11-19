import React from "react";
import IceCreamImage from "@/public/imgs/transparent-ice-cream.png";
import Image from "next/image";

const BirthdayBanner = () => {
    return (
        <section className="flex flex-col bg-pink-200 p-4">
            <div className="flex flex-col">
                <h2 className="font-semibold text-2xl">Birthday Treat</h2>
                <p className="font-light text-sm py-2">
                    Enjoy a FREE ice cream on your birthday every year! To sign up, simply visit your <strong>Taharka Bros Account</strong>{" "}
                    online or add your birthday through the Taharka App.
                </p>
            </div>
            <div className="self-center">
                <Image src={IceCreamImage} alt="ice-cream-png" width={500} height={500} />
            </div>
        </section>
    );
};

export default BirthdayBanner;
