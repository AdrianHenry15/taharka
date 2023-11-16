import React from "react";

import Header from "@/components/Header";
import VideoPlayer from "@/components/ui/home/VideoPlayer";
import MenuModal from "@/components/ui/modals/MenuModal";
import MobileFooter from "@/components/MobileFooter";
import Footer from "@/components/Footer";
import OrderModal from "@/components/ui/modals/OrderModal";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <MenuModal />
            <OrderModal />
            <VideoPlayer src="/taharka-bros-vid.mp4" />
            <Header />
            {children}
            <MobileFooter />
            <Footer />
        </div>
    );
}
