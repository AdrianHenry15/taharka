"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MenuItem = dynamic(() => import("./MenuItem"));

const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);
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
                {products.map(({ id, name, image, description, price }) => {
                    return <MenuItem key={id} id={id} name={name} price={price} imageSrc={image} description={description} />;
                })}
            </div>
        </div>
    );
};

export default Menu;
