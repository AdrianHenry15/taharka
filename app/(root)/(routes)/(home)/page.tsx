import React, { Suspense } from "react";

import PageBanner from "@/components/layout/home/page-banner";
import RewardsBanner from "@/components/layout/home/rewards-banner";
import TruckBanner from "@/components/layout/home/truck-banner";
import VideoPlayer from "@/components/layout/home/video-player";
import { Carousel } from "@/components/carousel";

export default async function HomePage() {
    return (
        <div className="w-full flex flex-col">
            <div>
                <Suspense>
                    <VideoPlayer src="/taharka-bros-vid.mp4" />
                    <PageBanner />
                    <Carousel />
                    <RewardsBanner />
                    <TruckBanner />
                </Suspense>
            </div>
        </div>
    );
}
