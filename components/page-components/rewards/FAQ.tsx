import React from "react";

interface IFAQProps {
    q: string;
    a: string;
}

const FAQ = (props: IFAQProps) => {
    return (
        <div className="flex flex-col bg-white rounded-xl p-4 my-4 w-full self-center md:text-xl">
            <div className="flex font-bold">
                <span className="mr-4">Q.</span>
                <p>{props.q}</p>
            </div>
            <div className="flex font-light">
                <span className="mr-4">A.</span>
                <p>{props.a}</p>
            </div>
        </div>
    );
};

export default FAQ;
