import React from "react";
import VideoPlayer from "./VideoPlayer";
import PageBanner from "./PageBanner";
import Menu from "./Menu";
import RewardsBanner from "./RewardsBanner";

const HomePage = () => {
    return (
        <div className="w-full flex flex-col">
            <div>
                <VideoPlayer src="/taharka-bros-vid.mp4" />
                <PageBanner />
                <Menu />
                <RewardsBanner />
            </div>
        </div>
    );
};

export default HomePage;
