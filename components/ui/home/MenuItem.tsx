import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IMenuItemProps {
    id: number;
    name: string;
    price: string;
    imageSrc: string;
    description: string;
}

const MenuItem = (props: IMenuItemProps) => {
    const ImageAlt = props.imageSrc.toLowerCase().replace(" ", "-");
    return (
        <Link className="flex w-full items-center px-4" href={ImageAlt}>
            {/* IMAGE */}
            {props.id % 2 !== 0 && <Image className="flex flex-1" src={props.imageSrc} alt={ImageAlt} width={50} height={50} />}
            {/* TEXT */}
            <div className="flex flex-col flex-1">
                <span className="font-bold text-2xl">{props.name}</span>
                <span className="text-zinc-500 text-sm my-2">{props.description}</span>
                <span className="text-zinc-400 text-xs">{`$${props.price}`}</span>
            </div>
            {/* IMAGE ALT POSITION */}
            {props.id % 2 === 0 && <Image className="flex flex-1" src={props.imageSrc} alt={ImageAlt} width={50} height={50} />}
        </Link>
    );
};

export default MenuItem;
