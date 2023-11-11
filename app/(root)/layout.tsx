import React from "react";

import Header from "@/components/Header";
import VideoPlayer from "@/components/ui/home/VideoPlayer";
import MainModal from "@/components/ui/modals/MainModal";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full mb-10">
            <MainModal />
            <VideoPlayer src="/taharka-bros-vid.mp4" />
            <Header />
            {children}
            {/* <Footer /> */}
        </div>
    );
}
