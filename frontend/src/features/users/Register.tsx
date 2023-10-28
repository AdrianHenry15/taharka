import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import BackBtn from "../../components/buttons/BackBtn";
import RegisterInput from "../../components/inputs/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { GlobalStateContext } from "../../context/GlobalStoreContext";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const store = useContext<GlobalStateStore>(GlobalStateContext);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${store.BaseUrl}/users/register`, {
                name: name,
                password: password,
                email: email,
                phoneNumber: phoneNumber,
            });

            // This sets the authorization token into the local storage
            const authToken = response.data.token;
            localStorage.setItem("authToken", authToken);

            store.User.isLoggedIn = true;

            // Navigate to Menu page when logged in
            navigate("/");
        } catch (error) {
            console.error("Invalid credentials. Please try again.");
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        store.User.username = e.target.value;
    };
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        store.User.email = e.target.value;
    };
    const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
        store.User.phoneNumber = e.target.value;
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <BackBtn path="/" />
            <span className="font-bold text-xl">Register</span>
            {/* <span className="text-sm text-center m-2">
                We'll text you a confirmation code to <br /> get started.
            </span> */}
            <div className="flex flex-col items-center justify-center w-full p-10">
                <RegisterInput
                    className="outline-none"
                    value={name}
                    onChange={(e) => handleName(e)}
                    type="text"
                    placeholder="Enter first and last name"
                />
                <div className="flex w-full items-center border-[1px] border-zinc-300 rounded-full">
                    <RegisterInput
                        value={password}
                        onChange={(e) => handlePassword(e)}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="border-none outline-none p-[8px] pl-4"
                    />
                    <div className="pr-4">
                        {showPassword && (
                            <div onClick={() => handleTogglePassword()}>
                                <AiOutlineEye />
                            </div>
                        )}
                        {!showPassword && (
                            <div onClick={() => handleTogglePassword()}>
                                <AiOutlineEyeInvisible />
                            </div>
                        )}
                    </div>
                </div>
                <RegisterInput
                    className="outline-none"
                    value={phoneNumber}
                    onChange={(e) => handlePhoneNumber(e)}
                    type="tel"
                    placeholder="+1 (888) 888 - 8888"
                />
                <span>or</span>
                <RegisterInput
                    className="outline-none"
                    value={email}
                    onChange={(e) => handleEmail(e)}
                    type="email"
                    placeholder="john@doe.com"
                />
            </div>
            <Button path="" onClick={() => handleRegister()} text="Register"></Button>
            <Link className="text-zinc-400 text-sm" to="/login">
                Login
            </Link>
        </div>
    );
};

export default Register;
