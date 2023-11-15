"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

import { IoMdClose } from "react-icons/io";
import { BsTruck, BsShop, BsMailbox, BsCreditCard2Back } from "react-icons/bs";
import { PiCallBell } from "react-icons/pi";

import ModalContainer from "./ModalContainer";

import { useOrderModalStore } from "@/hooks/useModal";
import OrderCard from "../OrderCard";

const OrderModal = () => {
    const { isOpen, closeModal } = useOrderModalStore();
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

    if (isOpen) {
        return (
            <ModalContainer>
                <div id="order-modal" ref={modalRef} className="flex h-full justify-center items-center">
                    {/* CONTAINER */}
                    <div className="flex flex-col w-full h-full p-4 bg-black border-white border-2 rounded-lg md:h-auto md:p-10 md:w-[1000px]">
                        {/* HEAD */}
                        <IoMdClose className="left-0 text-white" size={40} onClick={closeModal} />
                        <span className="font-bold text-2xl text-center w-full self-center text-white hidden md:flex md:flex-col">
                            Start Order
                        </span>
                        {/* BODY  */}
                        <div className="flex flex-col justify-center h-full items-center py-10 mb-10 md:justify-normal md:px-36 md:h-[500px] md:flex-wrap">
                            <span className="font-bold text-2xl text-center w-full self-center text-white mb-2 md:hidden">Start Order</span>
                            <OrderCard name="Delivery" description="Fresh ice cream delivered to you. What's better than that?">
                                <BsTruck size={40} />
                            </OrderCard>
                            <OrderCard name="Store Pickup" description="Pick up fresh ice cream at your favorite Taharka location.">
                                <BsShop size={40} />
                            </OrderCard>
                            <OrderCard name="Wholesale" description="Set a date for a wholesale order of 6+ pints of ice cream.">
                                <PiCallBell size={40} />
                            </OrderCard>
                            <OrderCard name="Gifts" description="Send a digital gift along with a friendly message.">
                                <BsCreditCard2Back size={40} />
                            </OrderCard>
                            <OrderCard name="Shipping" description="Fresh ice cream shipped to you Happy day!">
                                <BsMailbox size={40} />
                            </OrderCard>
                        </div>
                        <span className="flex text-zinc-500 text-sm text-center self-center">
                            Minimum of 6 pints for any delivery order
                        </span>
                    </div>
                </div>
            </ModalContainer>
        );
    } else {
        return <div></div>;
    }
};

export default OrderModal;
