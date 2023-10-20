import React from "react";
import Button from "../../components/buttons/Button";
import BackBtn from "../../components/buttons/BackBtn";
import { Link } from "react-router-dom";
import RegisterInput from "../../components/inputs/RegisterInput";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <BackBtn path="/" />
            <span className="font-bold text-xl">Sign In</span>
            <span className="text-sm text-center m-2">
                We'll text you a confirmation code to <br /> get started.
            </span>
            <div className="flex flex-col items-center justify-center w-full px-10">
                <RegisterInput type="text" placeholder="Enter first and last name" />
                <RegisterInput type="tel" placeholder="+1 (888) 888 - 8888" />
            </div>
            <Button path="/confirmation-code" onClick={() => {}} text="Send Confirmation Code"></Button>
        </div>
    );
};

export default Login;
