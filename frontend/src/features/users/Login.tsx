import React, { useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import BackBtn from "../../components/buttons/BackBtn";
import RegisterInput from "../../components/inputs/RegisterInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    // const [email, setEmail] = useState("");

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
            const response = await fetch("http://localhost:8000/api/users/phone/send-verification", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber }),
            });

            if (response.ok) {
                // Redirect to the confrmation code page once the code is sent
                navigate("/confirmation-code"); // use navigate to change the route
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
                <RegisterInput value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter first and last name" />
                <RegisterInput
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="tel"
                    placeholder="+1 (888) 888 - 8888"
                />
                {/* <span>or</span> */}
                {/* <RegisterInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="john@doe.com" /> */}
            </div>
            <Button path="" onClick={() => handleLogin()} text="Send Confirmation Code"></Button>
        </div>
    );
};

export default Login;
