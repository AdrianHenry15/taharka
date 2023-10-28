"use client";

import { useContext, useEffect } from "react";
import { GlobalStateStore } from "@/store/GlobalStateStore";
import { GlobalStateContext } from "@/providers/state-provider";

const SetupPage = () => {
    let { ModalOpen } = useContext<GlobalStateStore>(GlobalStateContext);

    const onOpen = () => {
        ModalOpen = true;
    };

    useEffect(() => {
        if (!ModalOpen) {
            onOpen();
        }
    }, [ModalOpen, onOpen]);

    return null;
};

export default SetupPage;
