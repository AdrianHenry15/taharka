import React from "react";
import { Link } from "react-router-dom";

interface IButtonProps {
    text: string;
    className?: string;
}

const Button = (props: IButtonProps) => {
    return (
        <div className={`flex bottom-0 justify-center w-full mb-[110px] ${props.className}`}>
            <Link className="flex justify-center bg-black py-4 w-3/4 md:w-64 lg:w-64 rounded-full shadow-lg" to={"/order"}>
                <button>
                    <span className="text-white font-bold flex">{props.text}</span>
                </button>
            </Link>
        </div>
    );
};

export default Button;
