"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

import Logo from "@/public/taharka_logo.png";

import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useSignInModalStore } from "@/hooks/useModal";

const SignInModal = () => {
    const { isOpen, closeModal } = useSignInModalStore();
    const modalRef = useRef<HTMLDivElement | null>(null);

    // if you click outside of the modal the modal closes
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, closeModal]);
    return (
        <div className="flex justify-center mt-2 h-screen">
            <div id="sign-in-modal" ref={modalRef} className="flex flex-col h-[300px] items-center w-full m-6 rounded-lg bg-white  py-6">
                <Link className="flex w-full mt-4" href={"/"}>
                    <IoMdClose className="flex text-start" size={25} />
                </Link>
                <Image className="bg-black rounded-full" src={Logo} alt="logo" width={75} height={75} />
                <div className="flex w-full items-center justify-around">
                    <h3 className={`flex justify-center text-4xl font-light border-black border-b-8 rounded-md`}>Sign In</h3>
                    <h3 className={`flex justify-center text-4xl font-light border-black border-b-8 rounded-md`}>Sign Up</h3>
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
                    <FcGoogle onClick={() => signIn()} />
                </div>
            </div>
        </div>
    );
};

export default SignInModal;
