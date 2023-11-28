import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "@/lib/shopify/types";

import { getProducts } from "@/lib/shopify";

const AllFlavors = ({ products }: { products: Product[] }) => {
    return (
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
            {products.map(({ id, title, images, variants }) => {
                return (
                    <SwiperSlide
                        key={id}
                        className="flex flex-col min-h-[270px] items-center px-4 my-8 mx-4 bg-white rounded-lg md:self-center md:w-1/4 md:justify-between lg:justify-center"
                        style={{ display: "flex" }}
                        // href={ImageAlt}
                    >
                        {/* IMAGE */}
                        <Image className="w-36 md:w-96" src={images[0].url} alt={title} width={1000} height={1000} loading="eager" />
                        {/* TEXT */}
                        <div className={`flex flex-col flex-1 text-center max-w-[500px] min-w-[200px]`}>
                            <h3 className="font-bold text-md self-center md:text-xl">{title}</h3>
                            <p className="text-zinc-400 text-[11px] italic">{`$.00`}</p>
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

export async function getStaticProps() {
    try {
        const productsData = await getProducts({ query: "", reverse: false, sortKey: "" });
        return {
            props: {
                products: productsData,
            },
            revalidate: 60 * 60, // Revalidate every 1 hour for example
        };
    } catch (error) {
        console.error("Error fetching products:", error);
        return {
            props: {
                products: [],
            },
        };
    }
}
