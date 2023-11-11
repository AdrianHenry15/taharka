"use client";

import React, { createContext, useContext } from "react";

import { GlobalStateContext } from "./state-provider";
import { GlobalStateStore } from "@/store/GlobalStateStore";
import { IModalStore } from "@/store/schemas/IModalStore";

interface IModalContext {
    children: React.ReactNode;
}

const ModalContext = createContext<IModalStore | undefined>(undefined);

// Create a hook to access the modal context
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

// Create the ModalProvider component
export const ModalProvider = (props: IModalContext) => {
    const modalStore = useContext<GlobalStateStore>(GlobalStateContext).Modal;

    return <ModalContext.Provider value={modalStore}>{props.children}</ModalContext.Provider>;
};
