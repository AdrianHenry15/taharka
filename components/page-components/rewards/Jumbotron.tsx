import Button from "@/components/Button";
import React from "react";

const Jumbotron = () => {
    return (
        <div>
            <span>A whole new way to treat yourself</span>
            <span>{`Don't miss out on FREE ice cream! `}</span>
            {/* REWARDS LOGO */}
            <div></div>
            <Button text="Sign In" isLink path={"sign-in"} />
        </div>
    );
};

export default Jumbotron;
