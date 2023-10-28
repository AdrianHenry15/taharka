import React from "react";

interface IInputProps {
    title: string;
    handleInput: () => void;
    placeHolder: string;
    optional?: boolean;
}

const Input = (props: IInputProps) => {
    return (
        <div className="w-full flex flex-col m-2 items-center">
            <div className="self-start">
                <span className="font-bold">{props.title}</span>
                <span>{props.optional ? " (optional)" : ""}</span>
            </div>
            <input
                placeholder={props.placeHolder}
                className="border-[1px] rounded-2xl bg-white w-full py-[8px] px-2"
                onChange={props.handleInput}
                type="text"
                name={props.title.toLowerCase()}
                id={props.title.toLowerCase()}
            />
        </div>
    );
};

export default Input;
