import React, { useRef, useState } from "react";
import BackBtn from "../../components/buttons/BackBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/GlobalStateStore";

const ConfirmationCode = () => {
    const state = useSelector((state: State) => state.currentPage);
    const navigate = useNavigate();

    // Create state variables for each input field
    const [code1, setCode1] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");
    const [code4, setCode4] = useState("");

    const fullConfirmationCode = code1 + code2 + code3 + code4; // COmbine input fields

    // Use refs to focus on the next input field
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];
    const handleVerifyCode = async () => {
        // Check if all code fields are filled
        if (fullConfirmationCode.length === 4) {
            try {
                const confirmationCode = code1 + code2 + code3 + code4;
                const response = await fetch("/api/users/phone/send-verification", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ confirmationCode }),
                });
                if (response.ok) {
                    // Redirect to the provate page once the code is verified
                    navigate(state.currentPage === "/rewards" ? "/rewards" : "/more");
                } else {
                    // Display error message
                    console.error("Server responded with an error", response.status, response.statusText);
                }
            } catch (error) {
                console.error("Error verifying confirmation code:", error);
            }
        }
    };

    // Function to focus on the next input field
    const focusNextInput = (currentInputIndex: number) => {
        if (currentInputIndex < inputRefs.length - 1) {
            inputRefs[currentInputIndex + 1].current?.focus();
        }
    };
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <BackBtn path="/login" />
            <span className="font-bold text-xl">Code sent</span>
            <span>Confirmation code sent to:</span>
            {/* TODO: USER PHONE NUMBER  */}
            <span>333-333-3333</span>
            <div className="flex items-center justify-center w-1/2 m-4">
                {/* INPUT 1 */}
                <input
                    type="text"
                    className="bg-white border-[1px] border-zinc-300 rounded-full w-10 h-10 mx-2 text-center font-bold"
                    maxLength={1}
                    onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/\D/g, ""); // Remove non-digits
                        setCode1(input.value);

                        if (input.value.length === 1) {
                            focusNextInput(0);
                        }
                    }}
                    value={code1}
                    ref={inputRefs[0]}
                    inputMode="numeric"
                    pattern="[0-9]"
                    style={{ appearance: "none" }}
                />
                {/* INPUT 2  */}
                <input
                    type="text"
                    className="bg-white border-[1px] border-zinc-300 rounded-full w-10 h-10 mx-2 text-center font-bold"
                    maxLength={1}
                    onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/\D/g, ""); // Remove non-digits
                        setCode2(input.value);

                        if (input.value.length === 1) {
                            focusNextInput(1);
                        }
                    }}
                    value={code2}
                    ref={inputRefs[1]}
                    inputMode="numeric"
                    pattern="[0-9]"
                />

                {/* INPUT 3 */}
                <input
                    type="text"
                    className="bg-white border-[1px] border-zinc-300 rounded-full w-10 h-10 mx-2 text-center font-bold"
                    maxLength={1}
                    onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/\D/g, ""); // Remove non-digits
                        setCode3(input.value);

                        if (input.value.length === 1) {
                            focusNextInput(2);
                        }
                    }}
                    value={code3}
                    ref={inputRefs[2]}
                    inputMode="numeric"
                    pattern="[0-9]"
                />

                {/* INPUT 4 */}
                <input
                    type="text"
                    className="bg-white border-[1px] border-zinc-300 rounded-full w-10 h-10 mx-2 text-center font-bold"
                    maxLength={1}
                    onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/\D/g, ""); // Remove non-digits
                        setCode4(input.value);

                        if (input.value.length === 1) {
                            focusNextInput(3);
                        }
                    }}
                    value={code4}
                    ref={inputRefs[3]}
                    inputMode="numeric"
                    pattern="[0-9]"
                />
            </div>
            <span className="text-xs font-extrabold">{`Didn't get a code? Resend > `}</span>
        </div>
    );
};

export default ConfirmationCode;
