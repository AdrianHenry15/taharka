import Image from "next/image";
import React from "react";

import { TiSocialInstagramCircular } from "react-icons/ti";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

import Logo from "@/public/imgs/taharka_logo.png";

const IgContainer = () => {
    return (
        <section className="w-full h-[500px] md:w-96">
            {/* HEADER */}
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center">
                    <Image
                        src={Logo}
                        alt="cone-logo"
                        width={1000}
                        height={1000}
                        className="rounded-full border-pink-500 border-2 w-10 h-10 mr-2"
                    />
                    {/* NAME AND CHECK BADGE */}
                    <div className="flex items-center">
                        <h1 className="text-sm">taharkabros</h1>
                        <HiOutlineBadgeCheck className="text-pink-500 mb-1" size={12} />
                    </div>
                </div>
                {/* DOTS MODAL */}
                <BsThreeDots />
            </div>
        </section>
    );
};

export default IgContainer;
