import React from "react";
import PageContainer from "../../../components/containers/PageContainer";
import { Link } from "react-router-dom";
import { PiCreditCardLight } from "react-icons/pi";
import { BiPlus } from "react-icons/bi";
import PaymentMethodBtn from "../../../components/buttons/PaymentMethodBtn";

const PaymentDetails = () => {
    return (
        <PageContainer className="absolute w-full h-full z-50 bg-white">
            <div className="flex w-full justify-center">
                <Link className="absolute left-5" to="/more">
                    <span className="text-sm">Cancel</span>
                </Link>
                <span className="font-bold text-md">Payment Method</span>
            </div>
            <div className="flex justify-center w-full p-10">
                <PiCreditCardLight size={200} />
            </div>
            <div>
                <Link to="/add-card">
                    <PaymentMethodBtn onClick={() => {}} name="Add New Card...">
                        <BiPlus size={20} />
                    </PaymentMethodBtn>
                </Link>
            </div>
        </PageContainer>
    );
};

export default PaymentDetails;
