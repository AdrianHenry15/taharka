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
            <LazyLoadImage src={props.product} alt={props.title} className="w-1/3 drop-shadow-xl" />
            <div className="flex flex-col">
                <span className="text-lg text-back font-medium">{props.title}</span>
                <span className="text-sm">{props.description}</span>
            </div>
        </div>
        // </Link>
    );
};

export default MenuDisplay2;
