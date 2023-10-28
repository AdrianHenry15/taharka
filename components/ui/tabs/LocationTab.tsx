import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

// TODO: THIS NEEDS TO BE IN STATE STORE
interface ILocationTabProps {
    distance: string;
    city: string;
    address: string;
    state: string;
    path: string;
    onClick: () => void;
}

const LocationTab = (props: ILocationTabProps) => {
    return (
        <Link className="flex flex-col bg-white rounded-lg p-2 my-2" onClick={props.onClick} href={props.path}>
            <div className="flex">
                {/* LOCATION ICON | DISTANCE */}
                <div className="flex flex-col items-center justify-center mr-4">
                    <span className="text-pink-500">
                        <CiLocationOn size={25} />
                    </span>
                    {/* DISTANCE  */}
                    <span className="font-bold text-xs">{props.distance}</span>
                    <span>mi</span>
                </div>
                {/* CITY ADDRESS AND STATE  */}
                <div className="flex flex-col">
                    <span className="font-bold">{props.city}</span>
                    <span>{props.address}</span>
                    <span>{props.state}</span>
                </div>
            </div>
            <span className="text-end text-xs text-zinc-400">Select this store</span>
        </Link>
    );
};

export default LocationTab;
