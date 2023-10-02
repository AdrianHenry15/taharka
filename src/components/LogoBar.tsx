import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../assets/imgs/taharka_logo.png";

const LogoBar = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <LazyLoadImage width={50} src={Logo} alt="logo" />
        </div>
    );
};

export default LogoBar;
