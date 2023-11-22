"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { NextResponse } from "next/server";
import { signIn } from "next-auth/react";

import Logo from "@/public/taharka_logo.png";

import { useSignInModalStore } from "@/hooks/useModal";

import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const SignInModal = () => {
    const { isOpen, closeModal } = useSignInModalStore();
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState(false);

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

    const sendConfirmationCode = async (e: React.FormEvent) => {
        e.preventDefault();

        // POST req to server endpoint
        try {
            const response = await axios.post("/api/auth/send-confirmation-code", { email });
            console.log("Server response:", response.data);
        } catch (error) {
            console.error("Error:", error);
            NextResponse.error();
        }
    };

    return (
        <section className="flex justify-center mt-2 h-screen md:mt-0 md:bg-zinc-700">
            <div
                id="sign-in-modal"
                ref={modalRef}
                className="flex flex-col items-center w-full m-6 rounded-lg bg-white py-6 md:w-[600px] md:h-min md:self-center md:p-4"
            >
                <Link className="flex w-full mt-4 md:mt-0" href={"/"}>
                    <IoMdClose className="flex text-start" size={25} />
                </Link>
                <Image className="bg-black rounded-full" src={Logo} alt="logo" width={75} height={75} />
                {/* SIGN IN / SIGN UP */}
                {/* setLogin = Setting the to either "Sign In" or "Sign Up" */}
                <div className="flex w-full items-center justify-around">
                    <button
                        onClick={() => setLogin(true)}
                        className={`flex justify-center text-4xl font-light ${
                            login ? "border-black" : "border-transparent"
                        } border-b-8 rounded-md`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setLogin(false)}
                        className={`flex justify-center text-4xl font-light ${
                            !login ? "border-black" : "border-transparent"
                        } border-b-8 rounded-md`}
                    >
                        Sign Up
                    </button>
                </div>
                {/* SIGN IN  */}
                {/* TODO: EMAIL / PHONE */}
                {login && (
                    <div className="flex flex-col w-full md:px-20 md:pb-2">
                        <form className="flex flex-col w-full" action="/sign-in" method="post">
                            <label className="pt-4 font-semibold text-xl" htmlFor="email">
                                Your Email
                            </label>
                            <input className="rounded-full flex mb-4" type="email" id="email" name="email" placeholder="taharka@bros.com" />
                            <button onClick={sendConfirmationCode} className="bg-black rounded-full py-2 text-white text-sm">
                                SEND CONFIRMATION CODE
                            </button>
                        </form>
                        <p className="py-4 text-xl font-light self-center">or</p>

                        {/* PROVIDERS  */}
                        <button
                            onClick={() => signIn("google")}
                            className="flex items-center justify-evenly w-full border-black border-2 rounded-full py-2 text-lg"
                        >
                            <label className="cursor-pointer">Sign In With</label>
                            <FcGoogle size={20} />
                        </button>
                    </div>
                )}
                {/* SIGN UP */}
                {!login && (
                    <div className="flex flex-col w-full md:px-20 md:pb-2">
                        <form className="flex flex-col w-full" action="/sign-up" method="post">
                            {/* FIRST NAME */}
                            <label className="mt-4 font-semibold text-xl" htmlFor="firstName">
                                First Name
                            </label>
                            <input className="rounded-full" type="text" id="firstName" name="firstName" placeholder="First Name" />

                            {/* LAST NAME */}
                            <label className="mt-4 font-semibold text-xl" htmlFor="lastName">
                                Last Name
                            </label>
                            <input className="rounded-full" type="text" id="lastName" name="lastName" placeholder="Last Name" />

                            {/* EMAIL */}
                            <label className="mt-4 font-semibold text-xl" htmlFor="email">
                                Email
                            </label>
                            <input className="rounded-full" type="email" id="email" name="email" placeholder="Email" />

                            {/* PHONE */}
                            {/* <label className="pt-4 font-semibold text-xl" htmlFor="phone">
                                Phone Number
                            </label>
                            <input className="rounded-full" type="tel" id="phone" name="phone" placeholder="+1 (111) 111-1111" /> */}

                            <button className="bg-black rounded-full mt-4 py-2 text-white text-sm">CREATE ACCOUNT</button>
                            <p className="py-4 text-xl font-light self-center">or</p>
                            {/* PROVIDERS  */}
                            <button
                                onClick={() => signIn("google")}
                                className="flex items-center justify-evenly w-full border-black border-2 rounded-full py-2 text-lg"
                            >
                                <label className="cursor-pointer">Sign Up With</label>
                                <FcGoogle size={20} />
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SignInModal;
