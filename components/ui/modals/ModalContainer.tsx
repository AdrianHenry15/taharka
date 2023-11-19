import React from "react";

interface IModalContainerProps {
    children: React.ReactNode;
    ariaLabel: string;
}

const ModalContainer = (props: IModalContainerProps) => {
    return (
        <div role="dialog" aria-labelledby={props.ariaLabel} className="fixed w-full h-full bg-black bg-opacity-50 z-50">
            {props.children}
        </div>
    );
};

export default ModalContainer;
