import React, { useState } from "react";
import NavBtn, { Pages } from "./buttons/NavBtn";
//icons
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CiIceCream } from "react-icons/ci";
import { GoGift } from "react-icons/go";
import { BsThreeDots, BsTrophy } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="flex bg-white justify-between lg:px-64 md:px-40 pt-4 pb-10 px-10 sticky bottom-0">
            {/* MENU */}
            <NavBtn onClick={() => {}} name={Pages.MENU}>
                <AiOutlineMenuUnfold size={20} />
            </NavBtn>
            {/* ORDER */}
            <NavBtn onClick={() => {}} name={Pages.ORDER}>
                <CiIceCream size={20} />
            </NavBtn>
            {/* WALLET */}
            <NavBtn onClick={() => {}} name={Pages.REWARDS}>
                <BsTrophy size={20} />
            </NavBtn>
            {/* GIFTS */}
            <NavBtn onClick={() => {}} name={Pages.GIFTS}>
                <GoGift size={20} />
            </NavBtn>
            {/* MORE */}
            <NavBtn onClick={() => {}} name={Pages.MORE}>
                <BsThreeDots size={20} />
            </NavBtn>
        </nav>
    );
};

export default Navbar;
