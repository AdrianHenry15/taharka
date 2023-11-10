"use client";

import React, { useRef } from "react";

import Menu from "@/components/ui/home/Menu";
import PageBanner from "@/components/ui/home/PageBanner";

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="">
                <PageBanner />
                <Menu />
            </div>
        </div>
    );
};

export default Home;
