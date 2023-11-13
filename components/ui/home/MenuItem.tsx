import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <Link className="flex h-auto items-center px-4 my-8 md:self-center md:w-2/3 md:justify-between lg:justify-center" href={ImageAlt}>
            {/* IMAGE */}
            {props.id % 2 !== 0 && (
                <Image className="w-36 md:w-96" src={props.imageSrc} alt={ImageAlt} width={1000} height={1000} loading="lazy" />
            )}
            {/* TEXT */}
            <div className={`flex flex-col flex-1 text-center max-w-[500px] min-w-[200px]`}>
                <span className="font-bold text-2xl md:text-3xl">{props.name}</span>
                <span className={`text-zinc-500 text-[12px] font-light my-2 italic md:text-lg`}>{props.description}</span>
                <span className="text-zinc-400 text-[11px] italic md:text-sm">{`$${props.price}.00`}</span>
            </div>
            {/* IMAGE ALT POSITION */}
            {props.id % 2 === 0 && (
                <Image className="w-36 md:w-96" src={props.imageSrc} alt={ImageAlt} width={1000} height={1000} loading="lazy" />
            )}
        </Link>
    );
};

export default MenuItem;
