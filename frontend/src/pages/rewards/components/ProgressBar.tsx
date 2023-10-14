import React from "react";
import { FaIceCream } from "react-icons/fa";

const Progressbar = () => {
    return (
        <div className="flex items-center w-full justify-between bg-zinc-300 pr-2 rounded-full my-[2px]">
            <div className="bg-pink-300 rounded-full p-[3px]">
                <FaIceCream />
            </div>
            <span className="font-bold">0/100</span>
        </div>
    );
};

export default Progressbar;
