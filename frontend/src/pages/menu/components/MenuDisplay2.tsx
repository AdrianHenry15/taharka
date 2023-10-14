import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";

interface IMenuDisplay2Props {
    title: string;
    description: string;
    product: string;
}

const MenuDisplay2 = (props: IMenuDisplay2Props) => {
    // const LinkTitle = props.title.split(" ").join("_");
    return (
        // <Link id={LinkTitle} to={LinkTitle}>
        <div className="flex items-center justify-evenly cursor-pointer">
            <LazyLoadImage src={props.product} alt={props.title} className="lg:w-1/3 md:w-1/3 w-1/2 drop-shadow-xl flex flex-1" />
            <div className="flex flex-col flex-2 w-full">
                <span className="text-lg text-back font-medium">{props.title}</span>
                <span className="text-sm">{props.description}</span>
                <span className="text-xs text-zinc-400 my-2">$14.00</span>
            </div>
        </div>
        // </Link>
    );
};

export default MenuDisplay2;
