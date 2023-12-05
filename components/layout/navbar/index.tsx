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

export default async function Navbar() {
    const menu = await getMenu("main-menu");

    return (
        <nav className="bg-white flex items-center z-50 justify-between px-4 w-full md:fixed md:rounded-b-xl md:w-11/12 lg:px-6">
            <div className="absolute left-4 flex md:hidden">
                <MobileMenu menu={menu} />
            </div>
            <div className="flex w-full items-center">
                <div className="flex w-full">
                    <Link href="/" className="mr-2 flex w-full items-center justify-center md:justify-start lg:mr-6">
                        <Image className="my-2 py-2 rounded-lg md:flex" src={Logo} alt="logo" width={130} height={130} />
                        {/* <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">{SITE_NAME}</div> */}
                    </Link>
                    {/* {menu.length ? (
                        <ul className="hidden gap-6 text-sm md:flex md:items-center">
                            {menu.map((item: Menu) => (
                                <li key={item.title}>
                                    <Link
                                        href={item.path}
                                        className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null} */}
                </div>
                {/* <div className="hidden justify-center md:flex md:w-1/3">
                </div> */}
                <div className="flex items-center justify-end right-4 absolute">
                    <Link className="mx-2 hidden md:flex" href={"/login"}>
                        <UserIcon className="h-6 w-6 transition-all ease-in-out hover:scale-110 text-black" />
                    </Link>
                    <Suspense fallback={<OpenCart />}>
                        <Cart />
                    </Suspense>
                </div>
            </div>
            <Search className="right-20 md:right-28" />
        </nav>
    );
}
