import React from "react";
import Button from "../../components/buttons/Button";
import BackBtn from "../../components/buttons/BackBtn";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <BackBtn path="/" />
            <span className="font-bold text-xl">Sign In</span>
            <span className="text-sm text-center m-2">
                We'll text you a confirmation code to <br /> get started.
            </span>
            <div className="flex flex-col items-center justify-center w-full px-10">
                <input
                    className="border-[1px] w-full my-2 px-4 py-[5px] text-sm border-zinc-300 rounded-full"
                    type="text"
                    placeholder="Enter first and last name"
                />
                <input
                    className="border-[1px] w-full mb-4 px-4 p-[5px] text-sm border-zinc-300 rounded-full"
                    type="tel"
                    placeholder="+1 (888) 888 - 888"
                />{" "}
            </div>
            <Button path="/confirmation-code" onClick={() => {}} text="Send Confirmation Code"></Button>
        </div>
    );
};

export default Login;
