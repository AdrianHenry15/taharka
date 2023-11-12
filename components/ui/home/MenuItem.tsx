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
        <Link className="flex w-full items-center px-4 md:justify-between" href={ImageAlt}>
            {/* IMAGE */}
            {props.id % 2 !== 0 && (
                <Image quality={100} className="flex flex-1" src={props.imageSrc} alt={ImageAlt} width={50} height={50} />
            )}
            {/* TEXT */}
            <div className={`flex flex-col flex-1 text-center`}>
                <span className="font-bold text-2xl md:text-3xl">{props.name}</span>
                <span className="text-zinc-500 text-sm font-light my-2 md:text-lg">{props.description}</span>
                <span className="text-zinc-400 text-xs md:text-sm">{`$${props.price}`}</span>
            </div>
            {/* IMAGE ALT POSITION */}
            {props.id % 2 === 0 && <Image className="flex flex-1" src={props.imageSrc} alt={ImageAlt} width={50} height={50} />}
        </Link>
    );
};

export default MenuItem;
