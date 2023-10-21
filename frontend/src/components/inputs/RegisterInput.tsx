import React from "react";

interface IRegisterInputProps {
    type: string;
    placeholder: string;
    onChange: () => void;
    className?: string;
}

const RegisterInput = (props: IRegisterInputProps) => {
    return (
        <input
            onChange={props.onChange}
            className={`${props.className} border-[1px] w-full my-2 p-4 text-sm border-zinc-300 rounded-full`}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
};

export default RegisterInput;
