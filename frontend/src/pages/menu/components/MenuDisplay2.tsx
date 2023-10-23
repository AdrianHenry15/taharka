import React from "react";
// import { Link } from "react-router-dom";

interface IMenuDisplay2Props {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    onClick: () => void;
    className?: string;
}

const MenuDisplay2 = (props: IMenuDisplay2Props) => {
    // const LinkTitle = props.title.split(" ").join("_");
    const fullDollarAmount = Math.floor(props.price);
    return (
        // <Link id={LinkTitle} to={LinkTitle}>
        <div
            onClick={props.onClick}
            className={`${props.className} flex items-center justify-evenly cursor-pointer w-full lg:px-10 md:px-10 px-4`}
        >
            <img src={props.imageUrl} alt={props.name} className="lg:w-[300px] md:w-[300px] w-1/2 drop-shadow-xl flex" />
            {/* <span>{props.imageUrl}</span> */}
            <div className="flex flex-col flex-2 w-[500px]">
                <span className="text-lg text-back font-medium">{props.name}</span>
                <span className="text-xs text-zinc-400">{props.description}</span>
                <span className="text-xs text-zinc-400 my-2">{`$${fullDollarAmount}.00`}</span>
            </div>
        </div>
        // </Link>
    );
};

export default MenuDisplay2;
