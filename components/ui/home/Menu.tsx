"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import axios from "axios";
import { useStaticProducts } from "@/lib/data";

const MenuItem = dynamic(() => import("./MenuItem"));

const Menu = () => {
    // const [products, setProducts] = useState([]);
    // // define endpoint URL
    // const endpointUrl = "https://localhost:4000/api/menu-items";

    // // GET request
    // axios
    //     .get(endpointUrl)
    //     .then((response) => {
    //         setProducts(response.data);
    //         // Handle the successful response here
    //         console.log("Response:", response.data);
    //     })
    //     .catch((error) => {
    //         // Handle errors here
    //         console.error("Error:", error);
    //     });
    return (
        <div id="menu" className="flex flex-col py-14">
            {/* COOKIE FLAVOR TAB */}
            <div className="flex flex-col bg-black p-4 text-white justify-start w-64 mb-10">
                <span className="font-semibold text-2xl whitespace-nowrap">Ice Cream Flavors</span>
                <span className="text-zinc-400 text-xs">MINIMUM 6 PINTS</span>
            </div>
            {/* ITEMS CONTAINER */}
            <div className="flex flex-col w-full">
                {/* ITEMS */}
                {useStaticProducts.map(({ id, name, image, description, price }) => {
                    return <MenuItem key={id} id={id} name={name} price={price} imageSrc={image} description={description} />;
                })}
            </div>
        </div>
    );
};

export default Menu;
