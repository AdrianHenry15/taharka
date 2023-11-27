import React, { Suspense } from "react";

import Header from "@/components/Header";
import MenuModal from "@/components/ui/modals/MenuModal";
import MobileFooter from "@/components/MobileFooter";
import Footer from "@/components/Footer";
import OrderModal from "@/components/ui/modals/OrderModal";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full flex flex-col items-center h-full">
            <Suspense>
                <MenuModal />
                <OrderModal />
            </Suspense>
            <Header />
            <Suspense>
                {children}
                <MobileFooter />
                <Footer />
            </Suspense>
        </main>
    );
}
