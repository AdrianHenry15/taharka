"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

import Logo from "@/public/taharka_logo.png";

import ModalContainer from "./ModalContainer";
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
        <ModalContainer>
            <div id="sign-in-modal" ref={modalRef} className="flex flex-col h-full justify-center items-center bg-white">
                <Link href="/">
                    <IoMdClose className="self-start flex" />
                </Link>
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
                    <FcGoogle onClick={() => signIn()} />
                </div>
            </div>
        </ModalContainer>
    );
};

export default SignInModal;
