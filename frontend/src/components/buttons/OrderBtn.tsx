import React from "react";
import { Link } from "react-router-dom";

const OrderBtn = () => {
    return (
        <div className="flex fixed bottom-0 justify-center w-full mb-[110px]">
            <Link className="flex justify-center bg-black py-4 w-3/4 lg:w-64 rounded-full shadow-lg" to={"/order"}>
                <button>
                    <span className="text-white font-bold flex">Order Now</span>
                </button>
            </Link>
        </div>
    );
};

export default OrderBtn;
