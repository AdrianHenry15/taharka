import Link from "next/link";
import React from "react";

import { BsFacebook, BsInstagram, BsTiktok, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="flex flex-col bg-black text-white px-4 pt-10">
            <div className="flex flex-col">
                <span className="font-semibold text-xl">COMPANY</span>
                <div className="text-zinc-600 flex flex-wrap text-md">
                    <Link className="mr-2 my-2" href={"/story"}>
                        Our Story
                    </Link>
                    <Link className="mr-2 my-2" href={"/locations"}>
                        Locations
                    </Link>
                    <Link className="mr-2 my-2" href={"/wholesale"}>
                        Wholesale
                    </Link>
                    <Link className="mr-2 my-2" href={"/loyalty"}>
                        Loyalty
                    </Link>
                    <Link className="mr-2 my-2" href={"/faq"}>
                        Support and FAQ
                    </Link>
                </div>
            </div>

            <div className="flex justify-around border-b-[1px] border-zinc-600 py-10">
                <BsFacebook size={30} />
                <BsInstagram size={30} />
                <BsTiktok size={30} />
                <BsTwitter size={30} />
                <BsYoutube size={30} />
                <BsLinkedin size={30} />
            </div>
            <div className="flex flex-col justify-center items-center pt-12 pb-28">
                <span className="font-bold text-3xl text-white">Taharka Bros.</span>
                <div className="flex items-center text-zinc-600">
                    <BiCopyright />
                    <span>2023. all rights reserved.</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
