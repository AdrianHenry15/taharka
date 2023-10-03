import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../assets/imgs/taharka_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex items-center justify-center w-full pb-4 sticky top-0 bg-white">
            <Link to={"/"}>
                <LazyLoadImage width={50} src={Logo} alt="logo" />
            </Link>
        </div>
    );
};

export default Header;
