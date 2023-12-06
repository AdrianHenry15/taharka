import Image from "next/image";
import React from "react";

import { IoChevronForward } from "react-icons/io5";
import { IoMdHeartEmpty, IoIosIceCream } from "react-icons/io";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { BiBookmark } from "react-icons/bi";
import { BsThreeDots, BsTruck, BsShop } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { PiHouse } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";

import Logo from "@/public/imgs/taharka_logo.png";
import Truck from "@/public/imgs/the-truck.jpg";
import Link from "next/link";

const IgContainer = () => {
    return (
        <section className="w-full bg-black py-10 sm:w-[390px] min-h-[800px] md:border-[1px] md:rounded-md md:border-neutral-400">
            {/* HEADER */}
            <div className="flex text-white items-center flex-none justify-between px-2">
                <div className="flex items-center">
                    <Link href={"https://www.instagram.com/taharkabros"}>
                        <Image
                            src={Logo}
                            alt="cone-logo"
                            width={1000}
                            height={1000}
                            className="rounded-full bg-white border-pink-500 border-2 w-10 h-10 mr-2"
                        />
                    </Link>
                    {/* NAME AND CHECK BADGE */}
                    <Link href={"https://www.instagram.com/taharkabros"} className="flex items-center">
                        <h1 className="text-sm">taharkabros</h1>
                        <HiOutlineBadgeCheck className="text-pink-500 ml-1" size={12} />
                    </Link>
                </div>
                {/* DOTS MODAL */}
                <BsThreeDots />
            </div>
            {/* HEADER END */}
            {/* IG POST */}
            <div className="flex flex-col items-center flex-1 justify-center my-2">
                <Image src={Truck} alt="truck" width={1000} height={1000} className="rounded-sm" />
                {/* IG BANNER */}
                <Link
                    href={"/book-the-truck"}
                    className="flex justify-between px-2 bg-pink-500 text-white w-full items-center text-xs py-2"
                >
                    <h1>Book The Truck</h1>
                    <IoChevronForward size={15} />
                </Link>
            </div>
            {/* END IG POST */}
            {/* IG ACTIONS */}
            <div className="flex justify-between flex-auto text-white w-full px-2 items-center">
                <div className="flex">
                    <IoMdHeartEmpty size={22} />
                    <HiOutlineChatBubbleOvalLeft size={22} className="mx-2" />
                    <CiLocationArrow1 size={22} />
                </div>
                <BiBookmark size={22} />
            </div>
            {/* END IG ACTIONS */}
            {/* IG NAME & CAPTION */}
            <div className="flex flex-col flex-auto text-white text-xs px-3">
                <div className="flex">
                    <Link href={"https://www.instagram.com/taharkabros"} target="_blank" className="mr-1 font-semibold">
                        taharkabros
                    </Link>
                    <p>Scooping up happiness, one cone at a time! 🍦✨</p>
                </div>
                <p className="text-sky-100">#SweetEscape #IceCreamDreams</p>
            </div>
            {/* END IG NAME & CAPTION */}
            {/* TODO: IG COMMENTS */}

            {/* FOOTER */}
            <div className="text-white flex flex-auto justify-evenly">
                <Link href={"/"}>
                    <PiHouse size={25} />
                </Link>
                <Link href={"/flavors"}>
                    <IoIosIceCream size={25} />
                </Link>
                <Link href={"/book-the-truck"}>
                    <BsTruck size={25} />
                </Link>
                <Link href={"find-a-shop"}>
                    <BsShop size={25} />
                </Link>
                <Link href={"/my-account"}>
                    <LuUser2 size={25} />
                </Link>
            </div>
        </section>
    );
};

export default IgContainer;
