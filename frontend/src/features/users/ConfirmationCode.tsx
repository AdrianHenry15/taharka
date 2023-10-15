import React from "react";
import BackBtn from "../../components/buttons/BackBtn";

const ConfirmationCode = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <BackBtn path="/login" />
            <span className="font-bold text-xl">Code sent</span>
            <span>Confirmation code sent to:</span>
            {/* TODO: USER PHONE NUMBER  */}
            <span>333-333-3333</span>
            <div className="flex items-center justify-center w-1/2 m-4">
                <input
                    type="number"
                    className="bg-white border-[1px] border-zinc-300 rounded-full w-10 h-10 mx-2 text-center font-bold"
                    maxLength={1}
                />
                <input
                    type="number"
                    className="bg-white border-[1px] border-zinc-300 rounded-full w-10 h-10 mx-2 text-center font-bold"
                    maxLength={1}
                />
                <input
                    type="number"
                    className="bg-white border-[1px] border-zinc-300 rounded-full w-10 h-10 mx-2 text-center font-bold"
                    maxLength={1}
                />
                <input
                    type="number"
                    className="bg-white border-[1px] border-zinc-300 rounded-full w-10 h-10 mx-2 text-center font-bold"
                    maxLength={1}
                />
            </div>
            <span className="text-xs font-extrabold">{`Didn't get a code? Resend > `}</span>
        </div>
    );
};

export default ConfirmationCode;
