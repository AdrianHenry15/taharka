import React from "react";

import Menu from "@/components/page-components/home/Menu";
import PageBanner from "@/components/page-components/home/PageBanner";
import RewardsBanner from "@/components/page-components/home/RewardsBanner";
import VideoPlayer from "@/components/page-components/home/VideoPlayer";

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="">
                <VideoPlayer src="/taharka-bros-vid.mp4" />
                <PageBanner />
                <Menu />
                <RewardsBanner />
            </div>
        </div>
    );
};

export default Home;
