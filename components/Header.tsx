"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdLocationPin } from "react-icons/md";

import Logo from "../public/taharka_logo.png";
import { useMenuModalStore, useOrderModalStore } from "@/hooks/useModal";

const Header = () => {
    const openMenuModal = useMenuModalStore().openModal;
    const openOrderModal = useOrderModalStore().openModal;
    return (
        <section className="flex items-center justify-between w-full px-4 fixed top-0 bg-white z-10 rounded-b-lg lg:w-4/5">
            {/* HAMBURGER AND LOGO CONTAINER  */}
            <div className="flex items-center w-full">
                <RxHamburgerMenu
                    className="text-zinc-500 font-extrabold fixed left-5 cursor-pointer md:relative"
                    size={30}
                    onClick={openMenuModal}
                />
                <div className="pl-10 flex items-center w-full justify-center md:justify-start">
                    <Image className="pb-4" width={40} src={Logo} alt="logo" />
                    <Link className="whitespace-nowrap" href={"/"}>
                        Taharka Bros.
                    </Link>
                </div>
            </div>
            {/* LOCATION AND ORDER NOW CONTAINER */}
            <div className="items-center hidden md:flex">
                <div className="flex items-center p-4">
                    <MdLocationPin size={20} className="mr-2" />
                    <Link className="whitespace-nowrap" href={"/location"}>
                        Find A Shop
                    </Link>
                </div>
                <div onClick={openOrderModal} className="bg-black rounded-full text-white px-10 py-2 whitespace-nowrap cursor-pointer">
                    <h5 className="font-bold">Order Now</h5>
                </div>
            </div>
        </section>
    );
};

export default Header;
