import React, { Suspense } from "react";

import VideoPlayer from "@/components/page-components/home/VideoPlayer";
import PageBanner from "@/components/page-components/home/PageBanner";
import Menu from "@/components/page-components/home/Menu";
import RewardsBanner from "@/components/page-components/home/RewardsBanner";
import TruckBanner from "@/components/page-components/home/TruckBanner";

import { getProducts } from "@/lib/shopify";

export default async function Home() {
    const products = await getProducts({});
    return (
        <div>
            <VideoPlayer src="/taharka-bros-vid.mp4" />
            <PageBanner />
            <Suspense>
                <Menu products={products} />
            </Suspense>
            <RewardsBanner />
            <TruckBanner />
        </div>
    );
}
