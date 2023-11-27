"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import "swiper/css";

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
            <aside className="flex flex-col bg-black p-4 text-white justify-start w-min mb-10">
                <h2 className="font-semibold text-2xl whitespace-nowrap">All Ice Cream Flavors</h2>
                <p className="text-zinc-400 text-xs">MINIMUM 6 PINTS</p>
            </aside>
            {/* ITEMS CONTAINER */}
            {/* ITEMS */}
            <Swiper
                style={{ display: "flex", width: "100%" }}
                className="border-y-2 border-y-black"
                slidesPerView={2}
                spaceBetween={0}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                }}
            >
                {products.map(({ id, name, image, price }) => {
                    return (
                        <SwiperSlide
                            key={id}
                            className="flex flex-col min-h-[270px] items-center px-4 my-8 mx-4 bg-white rounded-lg md:self-center md:w-1/4 md:justify-between lg:justify-center"
                            style={{ display: "flex" }}
                            // href={ImageAlt}
                        >
                            {/* IMAGE */}
                            <Image className="w-36 md:w-96" src={image} alt={name} width={1000} height={1000} loading="eager" />
                            {/* TEXT */}
                            <div className={`flex flex-col flex-1 text-center max-w-[500px] min-w-[200px]`}>
                                <h3 className="font-bold text-md self-center md:text-xl">{name}</h3>
                                <p className="text-zinc-400 text-[11px] italic">{`$${price}.00`}</p>
                            </div>
                            <button className="w-full self-center my-2 text-xs py-2 text-white bg-black rounded-full" onClick={() => {}}>
                                Add To Cart
                            </button>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Menu;
