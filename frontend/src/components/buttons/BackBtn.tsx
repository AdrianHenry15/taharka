import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const BackBtn = () => {
    return (
        <Link to="/more" className="absolute left-2 top-5">
            <FiChevronLeft size={25} />
        </Link>
    );
};

export default BackBtn;
