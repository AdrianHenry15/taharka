import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface ISearchBarProps {
    handleSearch: () => void;
    placeHolder: string;
    containerClass?: string;
    inputClass?: string;
}

const SearchBar = (props: ISearchBarProps) => {
    return (
        <div className={`${props.containerClass} flex items-center rounded-full my-2 w-full`}>
            <div className="pl-4">
                <AiOutlineSearch size={18} />
            </div>
            <input
                onChange={props.handleSearch}
                className={`${props.inputClass} w-full p-2 rounded-full outline-none`}
                type="text"
                placeholder={props.placeHolder}
            />
        </div>
    );
};

export default SearchBar;
