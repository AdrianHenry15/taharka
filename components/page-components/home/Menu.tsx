import React from "react";

import "swiper/css";
import AllFlavors from "./AllFlavors";
import { Product } from "@/lib/shopify/types";

const Menu = ({ products }: { products: Product[] }) => {
    return (
        <section id="menu" className="flex flex-col py-14">
            {/* COOKIE FLAVOR TAB */}
            <aside className="flex flex-col bg-black p-4 text-white justify-start w-min mb-10">
                <h2 className="font-semibold text-2xl whitespace-nowrap">All Ice Cream Flavors</h2>
                <p className="text-zinc-400 text-xs">MINIMUM 6 PINTS</p>
            </aside>
            {/* ITEMS CONTAINER */}
            {/* ITEMS */}
            <AllFlavors products={products} />
        </section>
    );
};

export default Menu;
