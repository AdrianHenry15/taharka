import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";

interface IMenuDisplayProps {
    title: string;
    description: string;
    product: string;
}

const MenuDisplay = (props: IMenuDisplayProps) => {
    // const LinkTitle = props.title.split(" ").join("_").toLowerCase();
    return (
        // <Link to={LinkTitle}>
        <div className="flex items-center justify-evenly cursor-pointer">
            <div className="flex flex-col">
                <span className="text-lg text-back font-medium">{props.title}</span>
                <span className="text-sm">{props.description}</span>
            </div>
            <LazyLoadImage src={props.product} alt={props.title} className="w-1/3 drop-shadow-xl" />
        </div>
        // </Link>
    );
};

export default MenuDisplay;
