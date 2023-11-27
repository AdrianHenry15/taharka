import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SwiperSlide } from "swiper/react";

import "swiper/css";

interface IMenuItemProps {
    id: number;
    name: string;
    price: number;
    imageSrc: string;
    description: string;
}

const MenuItem = (props: IMenuItemProps) => {
    const ImageAlt = props.imageSrc.toLowerCase().replace(" ", "-");
    return (
        // TODO: CHANGE THIS CONTAINER TO A LINK TO SEE EACH INDIVIDUAL MENU ITEM
        <SwiperSlide
            className="flex flex-col h-auto items-center px-4 my-8 border-2 border-black mx-4 md:self-center md:w-1/4 md:justify-between lg:justify-center"
            // href={ImageAlt}
        >
            {/* IMAGE */}
            <Image className="w-36 md:w-96" src={props.imageSrc} alt={ImageAlt} width={1000} height={1000} loading="eager" />
            {/* TEXT */}
            <div className={`flex flex-col flex-1 text-center max-w-[500px] min-w-[200px]`}>
                <h3 className="font-bold text-2xl md:text-xl">{props.name}</h3>
                <p className="text-zinc-400 text-[11px] italic">{`$${props.price}.00`}</p>
            </div>
        </SwiperSlide>
    );
};

export default MenuItem;
