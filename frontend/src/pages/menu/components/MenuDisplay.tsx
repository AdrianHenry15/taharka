import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";

interface IMenuDisplayProps {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
}

const MenuDisplay = (props: IMenuDisplayProps) => {
    // const LinkTitle = props.title.split(" ").join("_").toLowerCase();
    const fullDollarAmount = Math.floor(props.price);
    return (
        // <Link to={LinkTitle}>
        <div className="flex items-center justify-evenly cursor-pointer">
            <div className="flex flex-col flex-2 w-full">
                <span className="text-lg text-back font-medium">{props.name}</span>
                <span className="text-sm">{props.description}</span>
                <span className="text-xs text-zinc-400 my-2">{`${fullDollarAmount}`}</span>
            </div>
            <LazyLoadImage src={props.imageUrl} alt={props.name} className="lg:w-1/3 md:w-1/3 w-1/2 drop-shadow-xl flex flex-1" />
        </div>
        // </Link>
    );
};

export default MenuDisplay;
