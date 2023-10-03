import React, { useState } from "react";
import { Link } from "react-router-dom";

export enum Pages {
    MENU = "Menu",
    ORDER = "Order",
    WALLET = "Wallet",
    GIFTS = "Gifts",
    MORE = "More",
    NONE = "",
}

interface INavBtnProps {
    children: React.ReactNode;
    name: Pages;
}

const NavBtn = (props: INavBtnProps) => {
    const LinkTitle = props.name === "Menu" ? "/" : props.name.toLowerCase();
    return (
        <Link to={LinkTitle}>
            <div className={`flex flex-col items-center text-black`}>
                <div>{props.children}</div>
                <span className="text-xs">{props.name}</span>
            </div>
        </Link>
    );
};

export default NavBtn;
