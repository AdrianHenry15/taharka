"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { createUrl } from "@/lib/utils";

interface ISearchProps {
    dark?: boolean;
}

export default function Search(props: ISearchProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

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

    return (
        <form
            onSubmit={onSubmit}
            className={`w-max-[350px] ${
                props.dark ? "border-white" : "border-black"
            } border-2 rounded-lg relative w-full lg:w-80 xl:w-full`}
        >
            <input
                key={searchParams?.get("q")}
                type="text"
                name="search"
                placeholder="Search for products..."
                autoComplete="off"
                defaultValue={searchParams?.get("q") || ""}
                style={props.dark ? { color: "white" } : { color: "black" }}
                className={`w-full rounded-lg bg-transparent px-4 py-2 text-sm ${props.dark ? "text-white" : "text-black"} `}
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                <MagnifyingGlassIcon className="h-4" />
            </div>
        </form>
    );
}
