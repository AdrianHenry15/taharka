"use client";

import React, { useRef } from "react";

import Menu from "@/components/ui/home/Menu";
import PageBanner from "@/components/ui/home/PageBanner";
import RewardsBanner from "@/components/ui/home/RewardsBanner";

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="">
                <PageBanner />
                <Menu />
                <RewardsBanner />
            </div>
        </div>
    );
};

export default Home;
