import { useModalStore } from "@/hooks/useModal";
import React from "react";

interface IModalContainerProps {
    children: React.ReactNode;
}

const ModalContainer = (props: IModalContainerProps) => {
    const { closeModal } = useModalStore();
    return <div className="absolute w-full h-full bg-black bg-opacity-50 z-50 transition ease-in-out delay-150">{props.children}</div>;
};

export default ModalContainer;
