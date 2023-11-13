import Link from "next/link";
import React from "react";

interface IButtonProps {
    text: string;
    path: string;
    isLink: boolean;
    containerClass?: string;
    onClick?: () => void;
    btnClass?: string;
}

const Button = (props: IButtonProps) => {
    return (
        <div onClick={props.onClick} className={`${props.containerClass} flex bottom-0 justify-center w-full mb-[110px]`}>
            {!props.isLink && (
                <Link
                    className={`${props.btnClass} flex justify-center bg-black py-[10px] w-3/4 md:w-64 lg:w-64 rounded-full shadow-lg`}
                    href={props.path}
                >
                    <button>
                        <span className="text-white font-bold flex text-xs">{props.text}</span>
                    </button>
                </Link>
            )}
            {props.isLink && (
                <div className={`${props.btnClass} flex justify-center bg-black py-[10px] w-3/4 md:w-64 lg:w-64 rounded-full shadow-lg`}>
                    <button>
                        <span className="text-white font-bold flex text-xs">{props.text}</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Button;
