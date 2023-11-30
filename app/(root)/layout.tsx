import React, { Suspense } from "react";

import MobileFooter from "@/components/mobile-footer";
import Footer from "@/components/footer";
import Navbar from "@/components/layout/navbar";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full flex flex-col items-center h-full">
            <Navbar />
            <Suspense>
                {children}
                <MobileFooter />
                <Footer />
            </Suspense>
        </main>
    );
}
