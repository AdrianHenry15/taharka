import React from "react";
import { BiCheck } from "react-icons/bi";

interface IPaymentMethodBtn {
    children: React.ReactNode;
    name: string;
    selected?: boolean;
    onClick: () => void;
}

const PaymentMethodBtn = (props: IPaymentMethodBtn) => {
    return (
        <button className="flex w-full justify-between border-y-[1px] border-gray-200 p-2">
            <div className="flex items-center">
                {props.children}
                <span className="ml-4">{props.name}</span>
            </div>
            {props.selected ? <BiCheck /> : <></>}
        </button>
    );
};

export default PaymentMethodBtn;
