import React, { Suspense } from "react";

import { getProducts } from "@/lib/shopify";

import PageBanner from "@/components/layout/home/page-banner";
import RewardsBanner from "@/components/layout/home/rewards-banner";
import TruckBanner from "@/components/layout/home/truck-banner";
import VideoPlayer from "@/components/layout/home/video-player";
import AllFlavorsMenu from "@/components/layout/home/all-flavors-menu";
import { Carousel } from "@/components/carousel";

export default async function HomePage() {
    const products = await getProducts({});
    return (
        <div className="w-full flex flex-col">
            <div>
                <Suspense>
                    <VideoPlayer src="/taharka-bros-vid.mp4" />
                    <PageBanner />
                    <Carousel />
                    {/* <AllFlavorsMenu products={products} /> */}
                    <RewardsBanner />
                    <TruckBanner />
                </Suspense>
            </div>
        </div>
    );
}
