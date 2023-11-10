"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdLocationPin } from "react-icons/md";

import Logo from "../public/taharka_logo.png";

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full px-4 fixed top-0 bg-white z-10 rounded-b-lg lg:w-2/3">
            {/* HAMBURGER AND LOGO CONTAINER  */}
            <div className="flex items-center justify-start">
                <RxHamburgerMenu className="text-zinc-500 font-extrabold" size={30} onClick={() => {}} />
                <Link className="pl-10 flex items-center" href={"/"}>
                    <Image className="pb-4" width={50} src={Logo} alt="logo" />
                    <span className="font-bold text-2xl">Taharka Bros.</span>
                </Link>
            </div>
            {/* LOCATION AND ORDER NOW CONTAINER */}
            <div className="flex items-center">
                <Link className="flex items-center p-4" href={"/location"}>
                    <MdLocationPin size={20} className="mr-2" />
                    <span>Find A Shop</span>
                </Link>
                <Link className="bg-black rounded-full text-white px-10 py-2" href={"/order"}>
                    <span className="font-bold">Order Now</span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
