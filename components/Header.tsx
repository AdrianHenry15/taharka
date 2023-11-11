"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdLocationPin } from "react-icons/md";

import Logo from "../public/taharka_logo.png";
import { GlobalStateStore } from "@/store/GlobalStateStore";
import { GlobalStateContext } from "@/providers/state-provider";

const Header = () => {
    const modalStore = useContext<GlobalStateStore>(GlobalStateContext).Modal;

    const openModal = () => {
        modalStore.onOpen();
        console.log(modalStore.isOpen);
    };
    return (
        <div className="flex items-center justify-between w-full px-4 fixed top-0 bg-white z-10 rounded-b-lg lg:w-4/5">
            {/* HAMBURGER AND LOGO CONTAINER  */}
            <div className="flex items-center w-full">
                <RxHamburgerMenu
                    className="text-zinc-500 font-extrabold fixed left-5 cursor-pointer md:relative"
                    size={30}
                    onClick={openModal}
                />
                <Link className="pl-10 flex items-center w-full justify-center md:justify-start" href={"/"}>
                    <Image className="pb-4" width={40} src={Logo} alt="logo" />
                    <span className="font-bold text-md text-center">Taharka Bros.</span>
                </Link>
            </div>
            {/* LOCATION AND ORDER NOW CONTAINER */}
            <div className="items-center hidden md:flex">
                <Link className="flex items-center p-4" href={"/location"}>
                    <MdLocationPin size={20} className="mr-2" />
                    <span className="whitespace-nowrap">Find A Shop</span>
                </Link>
                <Link className="bg-black rounded-full text-white px-10 py-2 whitespace-nowrap" href={"/order"}>
                    <span className="font-bold">Order Now</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
