"use client";

import React from "react";
import Logo from "../assets/imgs/taharka_logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex items-center justify-center w-full pb-4 sticky top-0 bg-white">
            <Link href={"/"}>
                <Image width={50} src={Logo} alt="logo" />
            </Link>
        </div>
    );
};

export default Header;
