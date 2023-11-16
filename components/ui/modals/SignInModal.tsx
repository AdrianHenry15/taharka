import React from "react";
import Image from "next/image";

import Logo from "@/public/taharka_logo.png";

import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { TiSocialInstagram } from "react-icons/ti";
import { RiAppleLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import ModalContainer from "./ModalContainer";

const SignInModal = () => {
    return (
        <ModalContainer>
            <div className="flex flex-col h-full justify-center items-center bg-white">
                <IoMdClose className="self-start flex" />
                <Image className="bg-pink-400 rounded-full" src={Logo} alt="logo" width={75} height={75} />
                <div className="flex w-full items-center">
                    <span className={`flex flex-1 justify-center text-2xl`}>Sign In</span>
                    <span className={`flex flex-1 justify-center text-2xl`}>Sign Up</span>
                </div>
                {/* TODO: EMAIL / PHONE */}
                {/* <div>
                <span>Your Email</span>
                <input type="tel" placeholder="+1 (888) 888-8888" />
            </div>
            <Button text="SEND CONFIRMATION EMAIL" onClick={() => {}} /> */}

                {/* PROVIDERS  */}
                <div>
                    {/* GOOGLE INSTAGRAM APPLE FACEBOOK TWITTER */}
                    <FcGoogle />
                    <TiSocialInstagram />
                    <RiAppleLine />
                    <FaFacebookF />
                    <FaTwitter />
                </div>
            </div>
        </ModalContainer>
    );
};

export default SignInModal;
