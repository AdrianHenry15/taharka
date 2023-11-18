import Image from "next/image";
import React from "react";

import Button from "@/components/Button";

import Logo from "@/public/taharka_logo.png";

const Jumbotron = () => {
    return (
        <div className="flex flex-col items-center h-min bg-pink-200 mt-20 p-10 md:flex-row">
            <div className="flex flex-col items-center">
                <span className="font-semibold text-4xl text-center">A whole new way to treat yourself</span>
                <span className="font-light py-4">{`Don't miss out on FREE ice cream! `}</span>
            </div>
            {/* REWARDS LOGO */}
            <div className="flex flex-col items-center">
                <Image src={Logo} alt="logo" width={200} height={200} className="border-2 rounded-full bg-white self-center mb-10" />
                <Button containerClass="" text="Sign In" isLink path={"sign-in"} />
            </div>
        </div>
    );
};

export default Jumbotron;
