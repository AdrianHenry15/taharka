import Image from "next/image";
import React from "react";

import { BsPhone } from "react-icons/bs";

const RewardsBanner = () => {
    return (
        <div className="flex justify-center items-center bg-pink-300 mb-14">
            <BsPhone size={400} />
            <div className="flex flex-col justify-start">
                <span>EarnLoyalty Cream toward FREE cookies with the Taharka App!</span>
                <Image src={"/taharka_logo.png"} alt="taharka-logo" width={100} height={100} />
            </div>
        </div>
    );
};

export default RewardsBanner;
