import React from "react";
import { Link } from "react-router-dom";

interface IButtonProps {
    text: string;
    onClick: () => void;
    containerClass?: string;
    btnClass?: string;
}

const Button = (props: IButtonProps) => {
    return (
        <div className={`${props.containerClass} flex bottom-0 justify-center w-full mb-[110px]`}>
            <Link
                className={`${props.btnClass} flex justify-center bg-black py-[10px] w-3/4 md:w-64 lg:w-64 rounded-full shadow-lg`}
                to={"/order"}
            >
                <button>
                    <span className="text-white font-bold flex">{props.text}</span>
                </button>
            </Link>
        </div>
    );
};

export default Button;
