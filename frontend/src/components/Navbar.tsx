import React from "react";
import NavBtn, { Pages } from "./buttons/NavBtn";
//icons
import { CgMenuBoxed } from "react-icons/cg";
import { CiIceCream } from "react-icons/ci";
import { GoGift } from "react-icons/go";
import { BsThreeDots, BsTrophy } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="flex bg-white justify-between lg:px-64 md:px-40 pt-4 pb-10 px-10 sticky bottom-0">
            {/* MENU */}
            <NavBtn name={Pages.MENU}>
                <CgMenuBoxed size={20} />
            </NavBtn>
            {/* ORDER */}
            <NavBtn name={Pages.ORDER}>
                <CiIceCream size={20} />
            </NavBtn>
            {/* WALLET */}
            <NavBtn name={Pages.REWARDS}>
                <BsTrophy size={20} />
            </NavBtn>
            {/* GIFTS */}
            <NavBtn name={Pages.GIFTS}>
                <GoGift size={20} />
            </NavBtn>
            {/* MORE */}
            <NavBtn name={Pages.MORE}>
                <BsThreeDots size={20} />
            </NavBtn>
        </nav>
    );
};

export default Navbar;
