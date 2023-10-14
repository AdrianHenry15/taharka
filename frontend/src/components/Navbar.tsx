import React, { useState } from "react";
import NavBtn, { Pages } from "./buttons/NavBtn";
//icons
import { BiSolidFoodMenu } from "react-icons/bi";
import { CiIceCream } from "react-icons/ci";
import { GoGift } from "react-icons/go";
import { BsThreeDots, BsTrophy } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="flex bg-white justify-between lg:px-64 md:px-40 pt-4 pb-10 px-10 sticky bottom-0">
            {/* MENU */}
            <NavBtn onClick={() => {}} name={Pages.MENU}>
                <span>
                    <BiSolidFoodMenu size={20} />
                </span>
            </NavBtn>
            {/* ORDER */}
            <NavBtn onClick={() => {}} name={Pages.ORDER}>
                <span>
                    <CiIceCream size={20} />
                </span>
            </NavBtn>
            {/* WALLET */}
            <NavBtn onClick={() => {}} name={Pages.REWARDS}>
                <span>
                    <BsTrophy size={20} />
                </span>
            </NavBtn>
            {/* GIFTS */}
            <NavBtn onClick={() => {}} name={Pages.GIFTS}>
                <span>
                    <GoGift size={20} />
                </span>
            </NavBtn>
            {/* MORE */}
            <NavBtn onClick={() => {}} name={Pages.MORE}>
                <span>
                    <BsThreeDots size={20} />
                </span>
            </NavBtn>
        </nav>
    );
};

export default Navbar;
