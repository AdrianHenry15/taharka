import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import BackBtn from "../../components/buttons/BackBtn";
import RegisterInput from "../../components/inputs/RegisterInput";
import { useDispatch } from "react-redux";
import { user_login } from "../../store/slices/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const handleLogin = async () => {
        try {
            // API endpoint for user login
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phoneNumber }),
            });
            if (response.ok) {
                const userData = await response.json();
                const accessToken = ""; // get token from response

                // Dispatch the user_login action to update the user state
                dispatch(user_login(userData));

                // Store user data and access token in localStorage
                localStorage.setItem("user", JSON.stringify(userData));
                localStorage.setItem("access_token", accessToken);

                // Redirect or perform any other actions for a successful login
            } else {
                // Handle login failure
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <BackBtn path="/" />
            <span className="font-bold text-xl">Sign In</span>
            <span className="text-sm text-center m-2">
                We'll text you a confirmation code to <br /> get started.
            </span>
            <div className="flex flex-col items-center justify-center w-full px-10">
                <RegisterInput onChange={() => {}} type="text" placeholder="Enter first and last name" />
                <RegisterInput onChange={() => {}} type="tel" placeholder="+1 (888) 888 - 8888" />
                <span>or</span>
                <RegisterInput onChange={() => {}} type="email" placeholder="john@doe.com" />
            </div>
            <Button path="/confirmation-code" onClick={() => {}} text="Send Confirmation Code"></Button>
        </div>
    );
};

export default Login;
