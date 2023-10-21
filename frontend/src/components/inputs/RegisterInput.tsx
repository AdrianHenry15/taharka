import React, { ChangeEvent } from "react";

interface IRegisterInputProps {
    type: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
}

const RegisterInput = (props: IRegisterInputProps) => {
    return (
        <input
            value={props.value}
            onChange={props.onChange}
            className={`${props.className} border-[1px] w-full my-2 p-4 text-sm border-zinc-300 rounded-full`}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
};

export default RegisterInput;
