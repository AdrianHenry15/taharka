"use client";

import React, { useContext } from "react";
import Link from "next/link";

import ModalContainer from "./ModalContainer";

import { AiOutlineClose, AiOutlineYoutube } from "react-icons/ai";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { BsTwitter, BsTiktok } from "react-icons/bs";
import { GlobalStateStore } from "@/store/GlobalStateStore";
import { GlobalStateContext } from "@/providers/state-provider";

const pages = ["Home", "Menu", "Order", "Rewards", "Our Story"];
const altPages = ["Wholesale", "Gifting", "Find Us", "Fundraisers", "Sign Out"];

const MainModal = () => {
    const modalStore = useContext<GlobalStateStore>(GlobalStateContext).Modal;
    const borderBottom = "border-b-[1px] border-opacity-50 border-zinc-500";

    const closeModal = () => {
        // modalStore.onClose()
        modalStore.isOpen = false;
        console.log(modalStore.isOpen);
    };
    if (modalStore.isOpen) {
        return (
            <ModalContainer>
                <div className="flex flex-col h-screen bg-black text-white overflow-y-scroll p-6 w-9/12 sm:w-[275px]">
                    {/* MODAL HEADER  */}
                    <div className={`flex items-center justify-between pb-2 ${borderBottom}`}>
                        <AiOutlineClose className="cursor-pointer" onClick={() => closeModal()} />
                        <Link className="font=bold text-zinc-500" href={"/account"}>
                            My Account
                        </Link>
                    </div>
                    {/* MODAL NAV */}
                    <div className={`flex flex-col font-semibold text-xl ${borderBottom}`}>
                        {pages.map((value, index) => {
                            const link = value === "Gifting" ? "gifts" : value.toLowerCase().replace(" ", "-");
                            return (
                                <Link key={index} className="my-4" href={`/${link}`}>
                                    {value}
                                </Link>
                            );
                        })}
                    </div>
                    {/* SOCIAL MEDIA */}
                    <div className={`flex justify-evenly w-full py-4 ${borderBottom}`}>
                        <SiFacebook size={25} />
                        <BsTwitter size={25} />
                        <SiInstagram size={25} />
                        <BsTiktok size={25} />
                        <AiOutlineYoutube size={25} />
                    </div>
                    {/* ALT PAGES */}
                    <div className={`flex flex-col font-light text-md text-zinc-500 ${borderBottom}`}>
                        {altPages.map((value, index) => {
                            const link = value === "Gifting" ? "gifts" : value.toLowerCase().replace(" ", "-");
                            return (
                                <Link key={index} className="my-4" href={`/${link}`}>
                                    {value}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </ModalContainer>
        );
    } else if (!modalStore.isOpen) {
        return <div></div>;
    }
};

export default MainModal;