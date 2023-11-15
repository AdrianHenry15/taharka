"use client";

import { useOrderModalStore } from "@/hooks/useModal";
import Link from "next/link";
import React from "react";

import { MdLocationPin } from "react-icons/md";

const MobileFooter = () => {
    const { openModal } = useOrderModalStore();
    return (
        <div className="flex justify-evenly items-center w-full fixed bottom-0 bg-white py-6 md:hidden">
            {/* FIND SHOP  */}
            <Link className="flex items-center p-4" href={"/location"}>
                <MdLocationPin size={20} className="mr-2" />
                <span className="whitespace-nowrap">Find A Taharka</span>
            </Link>
            <div onClick={openModal} className="bg-black rounded-full text-white px-10 py-2 whitespace-nowrap cursor-pointer">
                <span className="font-bold">Order Now</span>
            </div>
        </div>
    );
};

export default MobileFooter;
