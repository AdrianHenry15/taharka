import Image from "next/image";
import React from "react";

import Button from "@/components/Button";

import IPhone from "@/public/imgs/transparent-iphone.png";
import Logo from "@/public/imgs/taharka_logo.png";
import Link from "next/link";

const AppBanner = () => {
    return (
        <section className="bg-pink-200 flex flex-col p-4 md:items-center">
            <div className="flex flex-col items-start md:justify-center">
                <h5 className="font-semibold text-2xl md:text-4xl">Download the App for the best experience</h5>
                <p className="my-4">Enjoy personalize ordering, FREE Cream, birthday rewards, and more with the Taharka Bros. App.</p>
                <Link className="flex text-white bg-black rounded-full px-20 py-2 self-center" href={"/taharka-app"}>
                    Download the app
                </Link>
            </div>
            <Image className="self-center mt-6" src={IPhone} alt="iphone" width={200} height={200} />
            <Image
                className="self-center mt-[290px] absolute bg-white rounded-full md:mt-[250px]"
                src={Logo}
                alt="logo"
                width={100}
                height={100}
            />
        </section>
    );
};

export default AppBanner;
