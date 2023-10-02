import React from "react";
import NavBtn, { Pages } from "./buttons/NavBtn";
//icons
import { MdOutlineMenuBook } from "react-icons/md";
import { IoIosIceCream } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import { TbGiftCard } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="flex bg-white justify-between pt-4 pb-10 px-6 sticky bottom-0">
            {/* MENU */}
            <NavBtn name={Pages.MENU}>
                <MdOutlineMenuBook size={20} />
            </NavBtn>
            {/* ORDER */}
            <NavBtn name={Pages.ORDER}>
                <IoIosIceCream size={20} />
            </NavBtn>
            {/* WALLET */}
            <NavBtn name={Pages.WALLET}>
                <GiWallet size={20} />
            </NavBtn>
            {/* GIFTS */}
            <NavBtn name={Pages.GIFTS}>
                <TbGiftCard size={20} />
            </NavBtn>
            {/* MORE */}
            <NavBtn name={Pages.MORE}>
                <BsThreeDots size={20} />
            </NavBtn>
        </nav>
    );
};

export default Navbar;
