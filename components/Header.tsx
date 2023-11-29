import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdLocationPin } from "react-icons/md";
import { LiaShoppingCartSolid } from "react-icons/lia";

import Logo from "../public/taharka_logo.png";

import { useMenuModalStore, useOrderModalStore } from "@/hooks/useModal";
import OpenCart from "./cart/open-cart";
import Cart from "./cart";

const { SITE_NAME } = process.env;

const Header = () => {
    // const openMenuModal = useMenuModalStore().openModal;
    // const openOrderModal = useOrderModalStore().openModal;
    return (
        <header className="flex items-center justify-between w-full px-4 fixed top-0 bg-white z-10 rounded-b-lg lg:w-4/5">
            {/* HAMBURGER AND LOGO CONTAINER  */}
            <div className="flex items-center w-full">
                {/* MENU */}
                <RxHamburgerMenu
                    className="text-zinc-500 font-extrabold absolute left-5 cursor-pointer md:relative"
                    size={30}
                    // onClick={openMenuModal}
                />
                {/* TAHARKA BROS TITLE AND LOGO  */}
                <div className="pl-10 flex items-center w-full justify-center md:justify-start">
                    <Link className="whitespace-nowrap flex items-center" href={"/"}>
                        <Image className="pb-4" width={40} src={Logo} alt="logo" />
                        <p>{SITE_NAME}</p>
                    </Link>
                </div>
                <div className="flex md:hidden">
                    <LiaShoppingCartSolid size={35} />
                </div>
            </div>
            {/* LOCATION AND ORDER NOW CONTAINER */}
            <div className="items-center hidden md:flex">
                <div className="flex items-center p-4">
                    {/* FIND A SHOP LINK */}
                    <Link className="whitespace-nowrap flex items-center" href={"/locations"}>
                        <MdLocationPin size={20} className="mr-2" />
                        <p>Find A Shop</p>
                    </Link>
                </div>
                {/* ORDER NOW LINK */}
                <div
                    // onClick={openOrderModal}
                    className="bg-black rounded-full text-white px-10 py-2 whitespace-nowrap cursor-pointer"
                >
                    <h5 className="font-bold">Order Now</h5>
                </div>
                {/* SHOPPING CART  */}
                {/* <button className="mx-2 p-2 bg-black text-white rounded-full" onClick={() => {}}>
                    <LiaShoppingCartSolid size={25} />
                    {props.numberOfCartItems < 1 ? null : (
                        <p className="absolute bg-red-600 rounded-full z-20 px-2 py-[4px] top-0 right-3 text-xs">
                            {props.numberOfCartItems}
                        </p>
                    )}
                </button> */}
                <div className="flex justify-end md:w-1/3">
                    <Suspense fallback={<OpenCart />}>
                        <Cart />
                    </Suspense>
                </div>
            </div>
        </header>
    );
};

export default Header;
