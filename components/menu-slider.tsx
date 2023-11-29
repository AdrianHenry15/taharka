import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Product } from "@/lib/shopify/types";

import { useCartStore } from "@/hooks/useCart";

// interface ICartLines {
//     merchandiseId: string;
//     quantity: number;
// }

interface IMenuSliderProps {
    products: Product[];
    // addToCart: (cartId: string, lines: ICartLines[]) => void;
    // createdCart: () => void;
}

const MenuSlider = (props: IMenuSliderProps) => {
    const createAndSetCart = useCartStore((state) => state.createAndSetCart);

    return (
        <section id="menu" className="flex flex-col my-14">
            {/* COOKIE FLAVOR TAB */}
            <aside className="flex flex-col bg-black p-4 text-white justify-start w-min mb-10">
                <h2 className="font-semibold text-2xl whitespace-nowrap">All Ice Cream Flavors</h2>
                <p className="text-zinc-400 text-xs">MINIMUM 6 PINTS</p>
            </aside>
            {/* ITEMS CONTAINER */}
            {/* ITEMS */}
            <Swiper
                style={{ display: "flex", width: "100%", padding: "50px 0", overflow: "hidden" }}
                slidesPerView={2}
                spaceBetween={0}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 7,
                        spaceBetween: 0,
                    },
                }}
            >
                {props.products.map((product) => {
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
                            <button className="w-full self-center my-2 text-white bg-black rounded-full" onClick={createAndSetCart}>
                                <p className="w-full self-center text-xs py-2 text-white bg-black rounded-full">Add To Cart</p>
                            </button>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default MenuSlider;
