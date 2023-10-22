import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import BackBtn from "../../components/buttons/BackBtn";
import RegisterInput from "../../components/inputs/RegisterInput";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Add a useEffect to listen for "Enter" key presses
    useEffect(() => {
        const handleKeyPress = (e: any) => {
            if (e.key === "Enter") {
                handleLogin();
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener("keydown", handleKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const handleLogin = async () => {
        try {
            // Send a request to your backend to request a confirmation code
            // Include the "identifier" in the request (email or phone number)
            // Your backend should send a confirmation code to the provided email or phone

            // API endpoint for user login
            const response = await fetch("http://localhost:8000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, password, email, phoneNumber }),
            });

            if (response.ok) {
                // TODO: Redirect to the confrmation code page once the code is sent
                navigate("/rewards"); // use navigate to change the route
            } else {
                // Handle login failure
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };
    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <BackBtn path="/" />
            <span className="font-bold text-xl">Sign In</span>
            <span className="text-sm text-center m-2">
                We'll text you a confirmation code to <br /> get started.
            </span>
            <div className="flex flex-col items-center justify-center w-full px-10">
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
            <Button path="" onClick={() => handleLogin()} text="Login"></Button>
        </div>
    );
};

export default Login;
