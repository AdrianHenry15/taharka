import Link from "next/link";
import React from "react";

export enum Pages {
    MENU = "Menu",
    ORDER = "Order",
    REWARDS = "Rewards",
    GIFTS = "Gifts",
    MORE = "More",
    NONE = "",
}

interface INavBtnProps {
    children: React.ReactNode;
    name: Pages;
    selected?: boolean;
    onClick: () => void;
    className?: string;
}

const NavBtn = (props: INavBtnProps) => {
    const LinkTitle = props.name === "Menu" ? "/" : props.name.toLowerCase();
    return (
        <Link href={LinkTitle}>
            <div className={`${props.className} flex flex-col items-center text-black`}>
                <div>{props.children}</div>
                <span className="text-xs">{props.name}</span>
            </div>
        </Link>
    );
};

export default NavBtn;
