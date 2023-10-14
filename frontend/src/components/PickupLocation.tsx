import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchBar from "./inputs/SearchBar";
import LocationTab from "./tabs/LocationTab";

interface IPickupLocationProps {
    returnPath: string;
    path: string;
    onClick: () => void;
}

const PickupLocation = (props: IPickupLocationProps) => {
    return (
        <div className="bg-zinc-300 w-full h-full rounded-lg p-4 flex flex-col items-center slide-in origin-bottom">
            <div className="flex items-center justify-center w-full">
                <Link to={props.returnPath} className="left-2 fixed">
                    <AiOutlineClose />
                </Link>
                <span className="font-bold">Select pickup location</span>
            </div>
            <SearchBar containerClass="bg-white" inputClass="bg-white" placeHolder="Enter city, state, or zip" handleSearch={() => {}} />
            <div className="flex flex-col w-full">
                <LocationTab
                    onClick={props.onClick}
                    path={props.path}
                    distance="3.1"
                    city="Winter Park"
                    address="501 N Orlando Ave Suite 309"
                    state="Florida"
                />
                <LocationTab
                    onClick={props.onClick}
                    path={props.path}
                    distance="3.1"
                    city="Winter Park"
                    address="501 N Orlando Ave Suite 309"
                    state="Florida"
                />
            </div>
        </div>
    );
};

export default PickupLocation;
