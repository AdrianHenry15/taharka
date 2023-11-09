import React from "react";

import Header from "@/components/Header";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full mb-10">
            <Header />
            {children}
            {/* <Footer /> */}
        </div>
    );
}
