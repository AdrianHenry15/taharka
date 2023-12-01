import React, { Suspense } from "react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            <section className="flex flex-col w-full h-full">{children}</section>
        </Suspense>
    );
}
