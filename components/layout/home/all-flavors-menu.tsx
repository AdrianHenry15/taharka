"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Product } from "@/lib/shopify/types";

export default function AllFlavorsMenu({ products }: { products: Product[] }) {
    return (
        <Swiper
            style={{ display: "flex", width: "100%", padding: "50px 0" }}
            className="bg-black"
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
            {/* PRODUCT */}
            {products.map((product) => {
                return (
                    <SwiperSlide
                        key={product.id}
                        className="flex flex-col min-h-[270px] items-center px-4 my-8 mx-4 bg-white rounded-lg md:self-center md:w-1/4 md:justify-between lg:justify-center"
                        style={{ display: "flex" }}
                    >
                        {/* IMAGE */}
                        <Image
                            className="w-36 md:w-96"
                            src={product.featuredImage.url}
                            alt={product.handle}
                            width={1000}
                            height={1000}
                            loading="eager"
                        />
                        {/* TEXT */}
                        <div className={`flex flex-col flex-1 text-center max-w-[500px] min-w-[200px] min-h-[75px]`}>
                            <h3 className="font-bold text-sm self-center w-1/2 md:text-xl md:w-full">{product.title}</h3>
                            <div className="flex self-center">
                                <p className="text-zinc-400 text-[11px] italic">{`$${product.priceRange.maxVariantPrice.amount}0 `} </p>
                            </div>
                        </div>
                        <button className="w-full self-center my-2 text-white bg-black rounded-full" onClick={() => {}}>
                            <p className="w-full self-center text-xs py-2 text-white bg-black rounded-full">Add To Cart</p>
                        </button>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
