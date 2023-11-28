"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Product } from "@/lib/shopify/types";

const AllFlavors = ({ products }: { products: Product[] }) => {
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
            {products.map((product) => {
                return (
                    <SwiperSlide
                        key={product.id}
                        className="flex flex-col min-h-[270px] items-center px-4 my-8 mx-4 bg-white rounded-lg md:self-center md:w-1/4 md:justify-between lg:justify-center"
                        style={{ display: "flex" }}
                        // href={ImageAlt}
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
                        <div className={`flex flex-col flex-1 text-center max-w-[500px] min-w-[200px]`}>
                            <h3 className="font-bold text-md self-center md:text-xl">{product.title}</h3>
                            <div className="flex self-center">
                                <p className="text-zinc-400 text-[11px] italic">{`$${product.priceRange.maxVariantPrice.amount}0 `} </p>
                                {/* <p className="text-zinc-400 text-[11px] italic">{product.priceRange.maxVariantPrice.currencyCode}</p> */}
                            </div>
                        </div>
                        <button className="w-full self-center my-2 text-xs py-2 text-white bg-black rounded-full" onClick={() => {}}>
                            Add To Cart
                        </button>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default AllFlavors;
