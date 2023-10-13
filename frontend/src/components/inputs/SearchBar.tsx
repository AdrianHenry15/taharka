import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface ISearchBarProps {
    handleSearch: () => void;
    placeHolder: string;
    inputClass?: string;
}

const SearchBar = (props: ISearchBarProps) => {
    return (
        <div className="flex items-center bg-zinc-300 rounded-full my-2">
            <div className="pl-4">
                <AiOutlineSearch size={18} />
            </div>
            <input
                onChange={props.handleSearch}
                className={`${props.inputClass} w-full p-2 bg-zinc-300 rounded-full outline-none`}
                type="text"
                placeholder={props.placeHolder}
            />
        </div>
    );
};

export default SearchBar;
