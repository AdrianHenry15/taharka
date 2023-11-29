import React, { Suspense } from "react";

import MenuModal from "@/components/ui/modals/menu-modal";
import MobileFooter from "@/components/mobile-footer";
import Footer from "@/components/footer";
import OrderModal from "@/components/ui/modals/order-modal";
import Navbar from "@/components/layout/navbar";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full flex flex-col items-center h-full">
            <Suspense>
                <MenuModal />
                <OrderModal />
            </Suspense>
            <Navbar />
            <Suspense>
                {children}
                <MobileFooter />
                <Footer />
            </Suspense>
        </main>
    );
}
