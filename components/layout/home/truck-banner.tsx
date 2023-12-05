import Image from "next/image";
import React from "react";

import Logo from "@/public/taharka_logo.png";

const TruckBanner = () => {
    return (
        <section
            id="rewards-banner"
            className="flex flex-col justify-center items-center h-[700px] bg-[url('/imgs/the-truck.jpg')] bg-cover py-20 w-full object-top bg-center md:py-10 md:px-20 lg:py-20"
        >
            <div className="flex-col bg-white opacity-90 w-1/2 p-10 rounded-lg justify-center items-center hidden md:flex">
                <div className="flex flex-1 justify-center">
                    <h5 className="font-bold text-4xl mb-4 text-center">Book The Truck!</h5>
                </div>
                {/* REWARDS DESCRIPTION/ **ONLY ON LG SCREENS** */}
                <span className="flex-1 justify-center items-center w-full lg:flex">
                    <p className="text-black rounded-3xl text-center items-center justify-center text-md font-bold w-full lg:flex">
                        Secure the coolest treat on wheels <br /> Book our ice cream truck for an epic experience today!
                    </p>
                </span>
            </div>
            <button className="bg-black rounded-full px-10 py-2 text-sm text-white mt-10 md:py-4 md:px-16">Book The Truck</button>
        </section>
    );
};

export default TruckBanner;
