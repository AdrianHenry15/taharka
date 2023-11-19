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
        <section id="menu" className="flex flex-col py-14">
            {/* COOKIE FLAVOR TAB */}
            <aside className="flex flex-col bg-black p-4 text-white justify-start w-64 mb-10">
                <h2 className="font-semibold text-2xl whitespace-nowrap">Ice Cream Flavors</h2>
                <p className="text-zinc-400 text-xs">MINIMUM 6 PINTS</p>
            </aside>
            {/* ITEMS CONTAINER */}
            <div className="flex flex-col w-full">
                {/* ITEMS */}
                {products.map(({ id, name, image, description, price }) => {
                    return <MenuItem key={id} id={id} name={name} price={price} imageSrc={image} description={description} />;
                })}
            </div>
        </section>
    );
};

export default Menu;
