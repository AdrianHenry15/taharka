import React, { useState } from "react";
import { Link } from "react-router-dom";

export enum Pages {
    MENU = "Menu",
    ORDER = "Order",
    WALLET = "Wallet",
    GIFTS = "Gifts",
    MORE = "More",
}

interface INavBtnProps {
    children: React.ReactNode;
    name: Pages;
}

const NavBtn = (props: INavBtnProps) => {
    const [selectedPage, setSelectedPage] = useState(Pages.MENU);

    return (
        <Link onClick={() => setSelectedPage(props.name)} to={props.name.toLowerCase()}>
            <div className={`flex flex-col items-center ${selectedPage === props.name ? "text-black" : "text-gray-500"}`}>
                <div>{props.children}</div>
                <span className="text-xs">{props.name}</span>
            </div>
        </Link>
    );
};

export default NavBtn;
