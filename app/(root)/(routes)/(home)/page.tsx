"use client";

import Menu from "@/components/ui/home/Menu";
import PageBanner from "@/components/ui/home/PageBanner";

import React from "react";

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <PageBanner />
            <Menu />
        </div>
    );
};

export default Home;
