import Link from "next/link";
import { Suspense } from "react";

import Cart from "@/components/cart";
import OpenCart from "@/components/cart/open-cart";
import LogoSquare from "@/components/logo-square";
import Logo from "@/public/taharka_logo.png";
import TBLogo from "@/public/imgs/tb-logo.avif";
import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/shopify/types";
import MobileMenu from "./mobile-menu";
import Search from "./search";
import Image from "next/image";

const { SITE_NAME } = process.env;

export default async function Navbar() {
    const menu = await getMenu("next-js-frontend-header-menu");

    return (
        <nav className="bg-pink-400 flex items-center z-50 justify-between p-4 w-full md:fixed md:rounded-b-xl md:w-11/12 lg:px-6">
            <div className="block flex-none">
                <MobileMenu menu={menu} />
            </div>
            <div className="flex w-full items-center">
                <div className="flex w-full md:w-1/3">
                    <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
                        <Image className="mb-4 hidden md:flex" src={Logo} alt="logo" width={50} height={50} />
                        <Image className="" src={TBLogo} alt="logo" width={150} height={150} />
                        {/* <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">{SITE_NAME}</div> */}
                    </Link>
                    {menu.length ? (
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
                    ) : null}
                </div>
                <div className="hidden justify-center md:flex md:w-1/3">
                    <Search />
                </div>
                <div className="flex justify-end md:w-1/3">
                    {/* ORDER NOW LINK */}
                    <button className="bg-black rounded-full justify-end mr-10 text-white px-10 py-2 self-center whitespace-nowrap cursor-pointer hidden md:flex">
                        <p className="font-bold">Order Now</p>
                    </button>
                    <Suspense fallback={<OpenCart />}>
                        <Cart />
                    </Suspense>
                </div>
            </div>
        </nav>
    );
}
