import React from "react";

import Header from "@/components/Header";
import VideoPlayer from "@/components/ui/home/VideoPlayer";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full mb-10">
            <VideoPlayer src="/taharka-bros-vid.mp4" />
            <Header />
            {children}
            {/* <Footer /> */}
        </div>
    );
}
