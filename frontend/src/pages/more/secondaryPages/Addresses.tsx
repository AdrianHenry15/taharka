import React from "react";
import PageContainer from "../../../components/PageContainer";
import SearchBar from "../../../components/inputs/SearchBar";

const Addresses = () => {
    return (
        <div className="bg-zinc-400 flex flex-col h-full">
            <PageContainer className="flex flex-1 flex-col">
                <span className="font-bold">Default Address</span>
                <span className="font-semibold">For delivery and shipping orders</span>
                <div className="bg-white p-10 m-4 rounded-md text-sm text-center">
                    <span>Select an address from your saved addresses list</span>
                </div>
            </PageContainer>
            <PageContainer className="bg-white flex flex-2">
                <span className="font-bold">Saved Addresses</span>
                <SearchBar handleSearch={() => {}} />
                <span className="text-center text-sm mt-4">You don't have any saved addresses.</span>
            </PageContainer>
        </div>
    );
};

export default Addresses;
