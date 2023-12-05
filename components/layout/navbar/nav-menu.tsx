"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { Menu } from "@/lib/shopify/types";

interface INavMenuProps {
    menu: Menu[];
}

const NavMenu = (props: INavMenuProps) => {
    const pathname = usePathname();
    if (props.menu.length) {
        return (
            <ul className="md:flex w-full hidden items-center justify-start gap-6 text-sm">
                {props.menu.map((item: Menu) => (
                    <li key={item.title}>
                        <Link
                            href={item.path}
                            className={`${
                                pathname === item.path ? "underline" : ""
                            } text-black underline-offset-4 hover:text-neutral-400 hover:underline`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    } else {
        return null;
    }
};

export default NavMenu;
