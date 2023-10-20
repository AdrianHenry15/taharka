import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";

interface IMenuDisplay2Props {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
}

const MenuDisplay2 = (props: IMenuDisplay2Props) => {
    // const LinkTitle = props.title.split(" ").join("_");
    const fullDollarAmount = Math.floor(props.price);
    return (
        // <Link id={LinkTitle} to={LinkTitle}>
        <div className="flex items-center justify-evenly cursor-pointer">
            <img src={props.imageUrl} alt={props.name} className="lg:w-1/3 md:w-1/3 w-1/2 drop-shadow-xl flex flex-1" />
            {/* <span>{props.imageUrl}</span> */}
            <div className="flex flex-col flex-2 w-full">
                <span className="text-lg text-back font-medium">{props.name}</span>
                <span className="text-sm">{props.description}</span>
                <span className="text-xs text-zinc-400 my-2">{`$${fullDollarAmount}`}</span>
            </div>
        </div>
        // </Link>
    );
};

export default MenuDisplay2;