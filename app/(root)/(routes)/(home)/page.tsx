import React, { Suspense } from "react";

import PageBanner from "@/components/layout/home/page-banner";
import RewardsBanner from "@/components/layout/home/rewards-banner";
import VideoPlayer from "@/components/layout/home/video-player";
import { Carousel } from "@/components/carousel";
import IgContainer from "@/components/layout/home/ig-container";
import LoadingDots from "@/components/loading-dots";

export default async function HomePage() {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col w-full">
                <VideoPlayer src="/taharka-bros-vid.mp4" />
                <PageBanner />
                <Suspense fallback={<LoadingDots className={""} />}>
                    <Carousel />
                </Suspense>
                <RewardsBanner />
                {/* <TruckBanner /> */}
                <div className="flex justify-center">
                    <IgContainer />
                </div>
            </div>
        </div>
    );
}
