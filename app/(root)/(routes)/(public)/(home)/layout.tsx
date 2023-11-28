import React from "react";

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
    return <div className="w-full flex flex-col">{children}</div>;
}
