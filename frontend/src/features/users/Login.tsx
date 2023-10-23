import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import BackBtn from "../../components/buttons/BackBtn";
import RegisterInput from "../../components/inputs/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { GlobalStateContext } from "../../context/GlobalStoreContext";

const Login = () => {
    const navigate = useNavigate();
    const store = useContext<GlobalStateStore>(GlobalStateContext);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${store.BaseUrl}/users/login`, {
                name,
                password,
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

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <BackBtn path="/" />
            <span className="font-bold text-xl">Log In</span>
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
            </div>
            <Button path="" onClick={() => handleLogin()} text="Login"></Button>
            <Link className="text-zinc-400 text-sm" to="/register">
                register
            </Link>
        </div>
    );
};

export default Login;
