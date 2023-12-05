"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { createUrl } from "lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface ISearchProps {
    className?: string;
    inputClassName?: string;
}

export default function Search(props: ISearchProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (searchRef.current && !searchRef.current === event.target) {
                setSearch(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const val = e.target as HTMLFormElement;
        const search = val.search as HTMLInputElement;
        const newParams = new URLSearchParams(searchParams.toString());

        if (search.value) {
            newParams.set("q", search.value);
        } else {
            newParams.delete("q");
        }

        router.push(createUrl("/search", newParams));
    }

    if (!search) {
        return (
            <div
                onClick={() => setSearch(true)}
                className={`${props.className} flex items-center justify-center h-20 cursor-pointer absolute transition-all ease-in-out hover:scale-110`}
            >
                <MagnifyingGlassIcon className={` h-6`} />
            </div>
        );
    } else {
        return (
            <div className="absolute w-full top-0 bg-white z-10 flex items-center justify-center h-20 left-0">
                <form onSubmit={onSubmit} className="w-max-[550px] relative w-full lg:w-80 xl:w-10/12">
                    <input
                        key={searchParams?.get("q")}
                        type="text"
                        name="search"
                        placeholder="Search for products..."
                        autoComplete="off"
                        defaultValue={searchParams?.get("q") || ""}
                        className="w-full ml-2 border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 "
                    />
                    <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                        <MagnifyingGlassIcon className="h-4" />
                    </div>
                </form>
                <button>
                    <XMarkIcon onClick={() => setSearch(false)} className="w-6 h-6 m-4" />
                </button>
            </div>
        );
    }
}
