import React from "react";
import PageContainer from "../../../components/PageContainer";
import Input from "../../../components/inputs/Input";
import Button from "../../../components/buttons/Button";
import BackBtn from "../../../components/buttons/BackBtn";

const AccountDetails = () => {
    return (
        <PageContainer className="bg-gray-200 ">
            <BackBtn />
            <span className="title-text pb-4">Account Details</span>
            <div className="flex flex-col w-full items-center">
                <Input title="Name" handleInput={() => {}} placeHolder="Your name" />
                <Input title="Phone" handleInput={() => {}} placeHolder="Your Phone" />
                <Input title="Email" handleInput={() => {}} placeHolder="Your email" />
                <Input title="Birthday" optional={true} handleInput={() => {}} placeHolder="Your birthday" />
            </div>
            <Button onClick={() => {}} btnClass="bg-gray-400" containerClass="mt-24" text="Confirm Changes" />
            <span className="flex w-full justify-center text-gray-400">Delete Account</span>
        </PageContainer>
    );
};

export default AccountDetails;
