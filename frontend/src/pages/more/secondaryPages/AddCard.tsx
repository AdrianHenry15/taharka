import React from "react";
import PageContainer from "../../../components/PageContainer";
import { Link } from "react-router-dom";
import { PiCreditCardLight } from "react-icons/pi";
import { BiPlus } from "react-icons/bi";
import PaymentMethodBtn from "../../../components/buttons/PaymentMethodBtn";

const AddCard = () => {
    return (
        <PageContainer className="absolute w-full h-full z-50 bg-white">
            <div className="flex w-full justify-center">
                <Link className="absolute left-5" to="/more">
                    <span className="text-sm">Cancel</span>
                </Link>
                <span className="font-bold text-md">Add a Card</span>
                <span className="flex absolute right-5 font-bold">Done</span>
            </div>
            <div className="flex justify-center w-full p-10">
                <PiCreditCardLight size={200} />
            </div>
            <div>
                <PaymentMethodBtn onClick={() => {}} name="Add New Card...">
                    <BiPlus size={20} />
                </PaymentMethodBtn>
            </div>
        </PageContainer>
    );
};

export default AddCard;
