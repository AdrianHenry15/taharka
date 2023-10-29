"use client";

import { useContext, useEffect } from "react";
import { GlobalStateStore } from "@/store/GlobalStateStore";
import { GlobalStateContext } from "@/providers/state-provider";

const SetupPage = () => {
    let { isOpen, onOpen } = useContext<GlobalStateStore>(GlobalStateContext).Modal;

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);

    return null;
};

export default SetupPage;
