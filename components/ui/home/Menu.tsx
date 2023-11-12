"use client";

import dynamic from "next/dynamic";
import React from "react";

const MenuItem = dynamic(() => import("./MenuItem"));

const Menu = () => {
    return (
        <div className="flex flex-col py-10">
            {/* COOKIE FLAVOR TAB */}
            <div className="flex flex-col bg-black p-4 text-white justify-start w-64">
                <span className="font-semibold text-2xl whitespace-nowrap">Ice Cream Flavors</span>
                <span className="text-zinc-400 text-xs">MINIMUM 6 PINTS</span>
            </div>
            {/* ITEMS CONTAINER */}
            <div className="flex flex-col">
                {/* ITEMS */}
                <MenuItem
                    id={0}
                    name={"Ice Cream"}
                    price={"14.00"}
                    imageSrc={"/imgs/black-cherry-chunk.webp"}
                    description={"This is ice cream and it tastes good"}
                />
                <MenuItem
                    id={1}
                    name={"Creamed Ice"}
                    price={"14.00"}
                    imageSrc={"/imgs/caramel-crunch.webp"}
                    description={"Im not really sure what this is"}
                />
                <MenuItem
                    id={2}
                    name={"Cream Corn"}
                    price={"14.00"}
                    imageSrc={"/imgs/chocolate-love.webp"}
                    description={"This stuff really, honestly taste extremely gasious and shall be named the One True Gasness."}
                />
            </div>
        </div>
    );
};

export default Menu;
