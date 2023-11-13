import Link from "next/link";
import React from "react";

import { MdLocationPin } from "react-icons/md";

const MobileFooter = () => {
    return (
        <div className="flex justify-evenly items-center w-full fixed bottom-0 bg-white py-6 md:hidden">
            {/* FIND SHOP  */}
            <Link className="flex items-center p-4" href={"/location"}>
                <MdLocationPin size={20} className="mr-2" />
                <span className="whitespace-nowrap">Find A Taharka</span>
            </Link>
            <Link className="bg-black rounded-full text-white px-10 py-2 whitespace-nowrap" href={"/order"}>
                <span className="font-bold">Order Now</span>
            </Link>
        </div>
    );
};

export default MobileFooter;
