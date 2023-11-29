import React, { Suspense } from "react";

import { getProducts } from "@/lib/shopify";

import PageBanner from "@/components/page-components/home/page-banner";
import RewardsBanner from "@/components/page-components/home/rewards-banner";
import TruckBanner from "@/components/page-components/home/truck-banner";
import VideoPlayer from "@/components/page-components/home/video-player";
import AllFlavorsMenu from "@/components/page-components/home/all-flavors-menu";

export default async function HomePage() {
    const products = await getProducts({});
    return (
        <div className="w-full flex flex-col">
            <div>
                <Suspense>
                    <VideoPlayer src="/taharka-bros-vid.mp4" />
                    <PageBanner />
                    <AllFlavorsMenu products={products} />
                    <RewardsBanner />
                    <TruckBanner />
                </Suspense>
            </div>
        </div>
    );
}
