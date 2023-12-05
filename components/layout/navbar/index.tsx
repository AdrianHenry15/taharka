import Link from "next/link";
import { Suspense } from "react";
import Search from "./search";
import Image from "next/image";

import { UserIcon } from "@heroicons/react/24/outline";

import Cart from "@/components/cart";
import OpenCart from "@/components/cart/open-cart";
import Logo from "@/public/imgs/pink-logo.png";
import { getMenu } from "@/lib/shopify";
import MobileMenu from "./mobile-menu";
import NavMenu from "./nav-menu";

export default async function Navbar() {
    const menu = await getMenu("main-menu");

    return (
        <nav className="bg-white flex items-center z-50 sticky top-0 justify-between px-4 py-4 w-full lg:fixed lg:rounded-b-xl lg:w-11/12 xl:px-6">
            <div className="absolute left-4 flex lg:hidden">
                <MobileMenu menu={menu} />
            </div>
            <div className="flex w-full items-center justify-center">
                <div className="flex lg:flex-1">
                    <Link href="/" className="flex w-32 items-center justify-center lg:justify-start xl:mr-6">
                        <Image className="" src={Logo} alt="logo" width={125} />
                    </Link>
                    <NavMenu menu={menu} />
                </div>
                <div className="flex items-center justify-end right-4 absolute">
                    <Link className="mx-2 hidden lg:flex" href={"/login"}>
                        <UserIcon className="h-6 w-6 transition-all ease-in-out hover:scale-110 text-black" />
                    </Link>
                    <Suspense fallback={<OpenCart />}>
                        <Cart />
                    </Suspense>
                </div>
            </div>
            <Search className="right-20 lg:right-28" />
        </nav>
    );
}
