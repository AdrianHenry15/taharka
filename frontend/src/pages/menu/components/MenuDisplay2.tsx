import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

interface IMenuDisplay2Props {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    // onClick: () => void;
    path: string;
    className?: string;
}

const MenuDisplay2 = (props: IMenuDisplay2Props) => {
    // const LinkTitle = props.title.split(" ").join("_");
    const fullDollarAmount = Math.floor(props.price);
    return (
        <Link className="flex w-full p-4" to={props.path}>
            <div
                // onClick={props.onClick}
                className={`${props.className} flex w-full items-center justify-evenly`}
            >
                <img src={props.imageUrl} alt={props.name} className="lg:w-1/6 md:w-1/3 w-1/2" />
                <div className="flex flex-col max-w-sm">
                    <span className="font-bold">{props.name}</span>
                    <span className="text-xs py-2">{props.description}</span>
                    <span className="text-xs text-zinc-400">{`$${fullDollarAmount}.00`}</span>
                </div>
                {/* <span>{props.imageUrl}</span> */}
            </div>
        </Link>
    );
};

export default MenuDisplay2;
