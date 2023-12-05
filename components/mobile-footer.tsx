"use client";

import Link from "next/link";
import React from "react";

import { MdLocationPin } from "react-icons/md";

const MobileFooter = () => {
    return (
        <section className="flex justify-evenly items-center w-full z-50 fixed bottom-0 bg-white py-6 md:hidden">
            {/* FIND SHOP  */}
            <div className="flex items-center p-4">
                <MdLocationPin size={20} className="mr-2" />
                <Link href={"/location"}>Find A Taharka</Link>
            </div>
            <button onClick={() => {}} className="bg-black rounded-full text-white text-sm px-10 py-2 whitespace-nowrap">
                Order Now
            </button>
        </section>
    );
};

export default MobileFooter;
